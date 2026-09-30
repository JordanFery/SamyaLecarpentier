import { getDictionary } from "@/i18n/get-dictionary";
import { getAbout, getGraphicWork, getProjects } from "@/lib/content";
import PageTransition from "@/components/ui/PageTransition";
import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import GraphicWork from "@/components/home/GraphicWork";
import AboutTeaser from "@/components/home/AboutTeaser";

export default async function HomePage({ params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <PageTransition>
      <Hero dict={dict} />
      <SelectedWork projects={getProjects(lang)} lang={lang} dict={dict} />
      <GraphicWork items={getGraphicWork(lang)} dict={dict} />
      <AboutTeaser teaser={getAbout(lang).teaser} lang={lang} dict={dict} />
    </PageTransition>
  );
}
