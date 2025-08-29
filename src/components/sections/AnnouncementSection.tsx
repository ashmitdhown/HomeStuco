// ...existing code...
import { Calendar, Clock } from "lucide-react"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
// ...existing code...

interface Announcement {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  category: string;
  intro?: string;
}

const events: Announcement[] = [
  {
    id: 1,
    title: "p2pTitle",
    date: "",
    time: "9:00 AM - 3:00 PM",
    description: "p2pDesc",
    image: '/assets/P2P.webp',
    category: "workshopCat"
  },
  {
    id: 2,
    title: "gameNightTitle",
    date: "August 29, 2025",
    time: "6:00 PM",
    description: "gameNightDesc",
    image: '/assets/gamenight.webp',
    category: "orientationCat"
  },
  {
    id: 3,
    title: "orientationTitle",
    date: "August 25, 2025",
    time: "9:00 AM - 3:00 PM",
    description: "orientationDesc",
    image: '/assets/orientation.webp',
    category: "orientationCat",
    intro: "Hey freshers, welcome to bits. Come meet us on ice breakers day and learn everything you need for a smooth start to your university life. Join us ……"
  }
];

export const AnnouncementSection = () => {
  const { t } = useTranslation();

  return (
    <section id="announcement-section" className="py-20 bg-gradient-secondary relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-champagne/20 rounded-full blur-2xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("announcements")}
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("announcementDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {events.map((event) => (
            <div key={event.id} className="h-full">
              <Card className={`h-full flex flex-col bg-[#14213d99] backdrop-blur-md border-border/50 shadow-card hover:shadow-luxury transition-all duration-500 group overflow-hidden text-white ${event.id === 2 ? 'min-h-[480px]' : ''}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velvet/60 via-transparent to-transparent opacity-0 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-champagne/90 text-velvet hover:bg-champagne border-none"
                    >
                      {t(event.category)}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-white group-hover:text-champagne transition-colors duration-300">
                    {t(event.title)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-white/80 text-sm leading-relaxed text-justify">
                      {event.id === 3 && event.intro ? event.intro : t(event.description)}
                    </p>
                    {(event.id !== 1) && (
                      <div className="grid grid-cols-1 gap-3 mt-4">
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <Calendar className="h-4 w-4 text-champagne" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <Clock className="h-4 w-4 text-champagne" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    {event.id === 1 ? (
                      <Button
                        className="w-full bg-velvet hover:bg-velvet/90 text-pearl font-semibold transition-all duration-300 hover:shadow-glow"
                    onClick={() => window.open('https://forms.gle/mRtcp1uHZFMz4Gi58', '_self')}
                      >
                        {t('joinMentee', 'Join as Mentee')}
                      </Button>
                    ) : (
                      <Button
                        className="w-full bg-velvet hover:bg-velvet/90 text-pearl font-semibold transition-all duration-300 hover:shadow-glow"
                    onClick={() => window.open(`/Events/`, '_self')}
                      >
                        {t('learnMore', 'Learn more')}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
