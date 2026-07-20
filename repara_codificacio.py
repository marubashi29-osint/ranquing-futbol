"""
REPARA_CODIFICACIO · desfa la doble codificacio dels fitxers
=============================================================
    python repara_codificacio.py           mira que faria, sense tocar res
    python repara_codificacio.py --arregla  ho arregla de veritat

QUE HA PASSAT: una comanda de PowerShell va llegir un fitxer UTF-8 sense
dir-li la codificacio. Windows PowerShell, per defecte, el llegeix com a
ANSI (Windows-1252), aixi que va interpretar malament cada caracter amb
accent i cada emoji. Despres el va tornar a escriure com a UTF-8, o sigui
que va desar la mala interpretacio: doble codificacio.

    Força  ->  ForÃ§a
    rànquing  ->  rÃ nquing
    la bandera d'Anglaterra  ->  ðŸ´ó §ó ¢ó ¥ó ®ó §ó ¿

NO S'HA PERDUT RES. La transformacio es reversible: nomes cal desfer-la
en l'ordre contrari (llegir com a UTF-8, codificar com a Windows-1252 i
tornar a llegir com a UTF-8). Aixo torna el text exacte d'abans.

Com ho detecta: un text sa amb accents i emojis NO es pot codificar en
Windows-1252, perque aquell joc de caracters no els conte. Si un fitxer
si que s'hi pot codificar, es que el que conte son els bytes mal llegits,
i llavors sabem del cert que esta danyat.

Fa una copia .abans-de-reparar de cada fitxer que toca.
"""
import os
import shutil
import sys

CARPETA = os.path.dirname(os.path.abspath(__file__))
EXTENSIONS = (".html", ".js", ".json", ".css", ".txt")
# Senyals inequivocs de doble codificacio
PISTES = ("Ã ", "Ã©", "Ã¨", "Ã­", "Ã³", "Ãº", "Ã§", "Ã±", "ðŸ", "Â·", "â€")


# Windows-1252 te cinc posicions sense definir (81, 8D, 8F, 90, 9D).
# Python les rebutja, pero .NET (i per tant PowerShell) les converteix en
# caracters de control invisibles. Per desfer el dany exactament, hem de
# fer la mateixa correspondencia; si no, la bandera d'Anglaterra no es
# podria reconstruir, perque un dels seus bytes cau en un d'aquests forats.
FORATS = {0x81, 0x8D, 0x8F, 0x90, 0x9D}


def a_bytes_1252(text):
    """Codifica com ho faria PowerShell, forats inclosos."""
    out = bytearray()
    for ch in text:
        o = ord(ch)
        if o in FORATS:
            out.append(o)
        else:
            out.extend(ch.encode("cp1252"))
    return bytes(out)


def repara(text):
    """Desfa la doble codificacio. Retorna None si no es pot (fitxer sa)."""
    try:
        bo = a_bytes_1252(text).decode("utf-8")
    except (UnicodeEncodeError, UnicodeDecodeError):
        return None
    return bo if bo != text else None


def main():
    arregla = "--arregla" in sys.argv
    print(f"\n  Mirant {CARPETA}\n")

    danyats, sans = [], []
    for nom in sorted(os.listdir(CARPETA)):
        if not nom.lower().endswith(EXTENSIONS):
            continue
        cami = os.path.join(CARPETA, nom)
        if not os.path.isfile(cami):
            continue
        with open(cami, "rb") as fh:
            crus = fh.read()
        # PowerShell, amb -Encoding UTF8, afegeix una marca invisible al
        # principi (BOM). Cal treure-la abans d'analitzar res: si no, es
        # confon amb un caracter de text i el fitxer sembla sa quan no ho es.
        te_bom = crus.startswith(b"\xef\xbb\xbf")
        try:
            text = crus.decode("utf-8-sig")
        except UnicodeDecodeError:
            print(f"  {nom:<28}no es UTF-8; el deixo estar")
            continue

        bo = repara(text)
        te_pistes = any(p in text for p in PISTES)
        if bo and te_pistes:
            danyats.append((nom, cami, text, bo, te_bom))
        else:
            sans.append(nom + ("  (amb BOM)" if te_bom else ""))

    for nom in sans:
        print(f"  {nom:<28}be")

    if not danyats:
        print("\n  Cap fitxer danyat. Res a fer.\n")
        return

    print()
    for nom, cami, text, bo, te_bom in danyats:
        marca = "  (i amb BOM)" if te_bom else ""
        print(f"  {nom}  DANYAT{marca}")
        # ensenyem un parell d'exemples del que canviaria
        mostres = 0
        for p in PISTES:
            i = text.find(p)
            if i < 0 or mostres >= 2:
                continue
            abans = text[max(0, i-18):i+16].replace("\n", " ")
            j = bo.find(repara(p) or p) if repara(p) else -1
            print(f"      ...{abans}...")
            mostres += 1
    print()

    if not arregla:
        print("  Aixo era una PROVA. Per arreglar-ho de veritat:")
        print("    python repara_codificacio.py --arregla\n")
        return

    for nom, cami, text, bo, te_bom in danyats:
        shutil.copy(cami, cami + ".abans-de-reparar")
        with open(cami, "w", encoding="utf-8", newline="") as fh:
            fh.write(bo)
        print(f"  {nom}  reparat  (copia a {nom}.abans-de-reparar)")
    print("\n  Fet. Obre la web amb Ctrl+F5 i comprova-ho.")
    print("  Si alguna cosa no quadra, els .abans-de-reparar hi son.\n")


if __name__ == "__main__":
    main()
