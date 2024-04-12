import { path } from "@dependencies"
import { invertObject } from "@utilities/objects.ts"

export const ENTITIES_IDS: Record<string, string> = Object.freeze(
  {
    "Banreservas": "BS",
    "Cambio Extranjero": "CE",
    "Asociación Peravia de Ahorros y Préstamos": "APAP",
    "Motor Crédito": "MC",
    "Scotiabank Cambio online": "SBO",
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
export const URL_SB_SEARCH = "https://sb.gob.do/busqueda?searchTerm="

export const ENTITIES_PAGES: Record<string, string> = Object.freeze({
   "Banreservas": "https://www.banreservas.com",
   "Cambio Extranjero": "https://cambioextranjero.com.do",
   "Asociación Peravia de Ahorros y Préstamos": "https://asociacionperavia.com.do/",
   "Motor Crédito": "https://motorcredito.com.do/",
   "Scotiabank Cambio online": "https://www.scotiabank.com.do/",
   "Imbert y Balbuena": "https://sb.gob.do/supervisados/entidades-de-intermediacion-cambiaria/imbert-y-balbuena/",
   "Asociación Cibao de Ahorros y Préstamos": "https://www.acap.com.do/banca-personal/",
   "Banco Promerica": "https://www.promerica.com.do/",
   "Banco Caribe": "https://www.bancocaribe.com.do/",
   "Banco Santa Cruz": "https://bsc.com.do/home",
   "Asociación La Nacional de Ahorros y Préstamos": "https://asociacionlanacional.com.do/",
   "Banco Popular": "https://popularenlinea.com/empresarial/Paginas/Home.aspx",
   "Banco Lafise": "https://www.lafise.com/blrd",
   "Capla": "https://accapla.com/",
   "Scotiabank": "https://www.scotiabank.com.do/",
   "Girosol": "https://girosol.com/index.htm",
   "Gamelin": "https://www.sb.gob.do/supervisados/entidades-de-intermediacion-cambiaria/gamelin/",
   "SCT": "https://sb.gob.do/supervisados/entidades-de-intermediacion-cambiaria/sct/",
   "Bonanza Banco": "https://bonanzabanco.com.do/",
   "Moneycorps": "https://moneycorps.com.do/",
   "Taveras": "https://agentedecambiotaveras.com/",
   "RM": "https://www.sb.gob.do/supervisados/entidades-de-intermediacion-cambiaria/r-m/",
   "Agente de Cambio La Nacional": "https://acn.com.do/",
})

export const ENTITIES_PAGES_INVERTED = Object.freeze(invertObject(ENTITIES_PAGES))
