import { path } from "@dependencies"
import { invertObject } from "@utilities/objects.ts"

export const ENTITIES_IDS: Record<string, string> = Object.freeze(
  {
    "Banreservas": "BS",
    "Cambio Extranjero": "CE",
    "Asociación Peravia de Ahorros y Préstamos": "APAP",
    "Motor Crédito": "MC",
    "ScotiabankCambio online": "SBO",
    "Imbert y Balbuena": "IB",
    "Asociación Cibao de Ahorros y Préstamos": "ACAP",
    "Banco Promerica": "BP",
    "Banco Caribe": "BC",
    "Banco Santa Cruz": "BSC",
    "Asociación La Nacional de Ahorros y Préstamos": "ALNAP",
    "Banco Popular": "BPD",
    "Banco Lafise": "BL",
    "Capla": "CP",
    "Scotiabank": "SB",
    "Girosol": "GS",
    "Gamelin": "GM",
    "SCT": "SCT",
    "Bonanza Banco": "BB",
    "Moneycorps": "MCS",
    "Taveras": "TV",
    "RM": "RM",
    "Agente de Cambio La Nacional": "ACLN",
  } as const,
)

export const ENTITIES_IDS_INVERTED = Object.freeze(invertObject(ENTITIES_IDS))

export const ROOT_PATH = Deno.cwd()
export const STATIC_FILES_PATH = path.join(ROOT_PATH, "public")
export const ROOT_TABLE_ID_CONTENT = "Dolar"
