import { RULES, FAQS } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Note from '../components/Note.jsx'
import Tabs from '../components/Tabs.jsx'
import Accordion from '../components/Accordion.jsx'

export default function Rules() {
  return (
    <>
      <PageHero eyebrow="Know before you go" title="Rules &" accent="FAQs" sub="Race policies, regulations and answers to the questions we hear most." ghost="RULES" />

      <section className="section container">
        <SectionHead kicker="Race rules" title="Race" accent="regulations" />
        <div className="rules-grid">
          {RULES.map((r) => <Note key={r.title} variant={r.v} icon={r.icon} title={r.title}>{r.text}</Note>)}
        </div>
        <Note variant="ok" icon="Briefcase" title="Baggage — one bag per runner">
          Bags must be tagged with your bib number. No valuables, electronics or food. Untagged bags are not accepted. Counters open 4:00 AM – 1:00 PM on race day.
        </Note>
      </section>

      <section className="section container faq">
        <SectionHead kicker="Help centre" title="Frequently asked" accent="questions" />
        <Tabs tabs={Object.entries(FAQS).map(([k, items]) => ({ id: k, label: k, content: <Accordion items={items} /> }))} />
      </section>
    </>
  )
}
