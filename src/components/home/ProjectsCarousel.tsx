'use client';

import FlexCarousel from '@/components/ui/FlexCarousel';

const photo = (id: string) => `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=max`;

const projectItems = [
  {
    src: photo('photo-1518770660439-4636190af475'), // Circuit board
    alt: 'Smart Home Automation System',
    title: 'Smart Home Automation',
    subtitle: 'ESP32/ESP8266, MQTT/web control'
  },
  {
    src: photo('photo-1555664424-778a1e5e1b48'), // Hardware
    alt: 'IoT Weather Station',
    title: 'IoT Weather Station',
    subtitle: 'ESP32 + multi-sensor node'
  },
  {
    src: photo('photo-1581091226825-a6a2a5aee158'), // Tech
    alt: 'Cloud-Based Air Quality Monitor',
    title: 'Air Quality Monitor',
    subtitle: 'PM2.5 + gas sensors + dashboard'
  },
  {
    src: photo('photo-1517077304055-6e89abbf09b0'), // Microcontroller
    alt: 'Line-Following Autonomous Robot',
    title: 'Autonomous Robot',
    subtitle: 'IR array + motor control'
  },
  {
    src: photo('photo-1580584126903-c17d41830450'), // Robotics
    alt: 'RFID-Based Smart Locker',
    title: 'Smart Locker',
    subtitle: 'RFID + motor/solenoid + logging'
  },
  {
    src: photo('photo-1605810230434-7631ac76ec81'), // Technology
    alt: 'Face-Recognition Door Lock',
    title: 'Face-Recognition Lock',
    subtitle: 'ESP32-CAM/Raspberry Pi'
  }
];

export function ProjectsCarousel() {
  return (
    <section className="w-full py-24 bg-brand-bg border-t border-brand-border relative overflow-hidden flex flex-col items-center">
      <div className="text-center mb-16 z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-primary mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-brand-muted max-w-2xl mx-auto">
          Explore our top student-ready project ideas for basic, intermediate, IoT, and advanced electronics.
        </p>
      </div>
      
      <div className="w-full h-[600px] relative">
        <FlexCarousel 
          items={projectItems}
          preset="vortex"
          intro="deal"
          autoplay={true}
          interval={4}
        />
      </div>
    </section>
  );
}
