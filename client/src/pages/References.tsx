import { Hero } from '@components/box/Hero'
import { referenceIcons } from '@data/reference'
import { Paragraph } from '@components/elements/Paragraph'
import { ListAnchors } from '@components/list/ListAnchors'
import { Section } from '@components/box/Section'

function ReferencesPage () {
  return (
    <>
      <Hero
        imagesWidth='150px'
        imagesUrls={['/reference.png']}
        title='Referencias de recursos y información utilizados en el proyecto'
      />

      <Section title='Referencias de información'>
        <Paragraph>
          La información utilizada en el proyecto fue obtenida mediante la consulta de
          la web <a href="https://www.infodolar.com.do/" target="_blank" rel="noreferrer">infodolar.com.do</a> con
          el objetivo de mostrar los precios del dolar cotizado por diferentes entidades financieras
          de forma mas simplificada y accesible para el usuario.
        </Paragraph>

        <Paragraph>
          La tecnica de web scraping fue utilizada para obtener la información de la web mencionada
          y mostrarla en la aplicación de forma actualizada.
        </Paragraph>

        <Paragraph>
          Este sitio web no tiene ninguna relación con la web mencionada y no se hace responsable
          de la información mostrada en la misma, de la misma forma no se esta indexando esta
          información para no competir con la web original.
        </Paragraph>

        <Paragraph>
          La API es abierta y gratuita para cualquier persona que desee utilizarla.
        </Paragraph>
      </Section>

      <Section title='Referencias de ilustraciones'>
        <Paragraph>
          Las ilustraciones utilizadas en el proyecto fueron creadas por los siguientes artistas
          y se encuentran disponibles en la plataforma de recursos gráficos:
        </Paragraph>

        <ListAnchors items={referenceIcons} />
      </Section>
    </>
  )
}

export default ReferencesPage
