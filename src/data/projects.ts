export type ProjectCategory = 
  | "Basic Sensors"
  | "Intermediate Automation"
  | "IoT & Smart Systems"
  | "Advanced Electronics"
  | "Robotics & Control";

export interface ProjectData {
  id: string;
  no: number;
  title: string;
  description: string;
  category: ProjectCategory;
  price: number;
  imageUrl: string;
}

const photo = (id: string) => `https://images.unsplash.com/${id}?w=600&q=80&auto=format&fit=crop`;

// Temporary sample data combining the catalog items
export const projectsData: ProjectData[] = [
  {
    id: "p1",
    no: 1,
    title: "Ultrasonic Radar / Object Scanner",
    description: "HC-SR04, servo, Arduino based object detection and mapping.",
    category: "Basic Sensors",
    price: 1500,
    imageUrl: photo("photo-1518770660439-4636190af475")
  },
  {
    id: "p3",
    no: 3,
    title: "Rain Detection System",
    description: "Rain sensor, relay, alert system for home automation.",
    category: "Basic Sensors",
    price: 1200,
    imageUrl: photo("photo-1611078586026-6b2ccf8c68aa")
  },
  {
    id: "p12",
    no: 12,
    title: "Room Temperature Monitor",
    description: "LM35/DHT11/DHT22 sensing with display.",
    category: "Basic Sensors",
    price: 1300,
    imageUrl: photo("photo-1506509653147-386d34e9e14a")
  },
  {
    id: "p24",
    no: 24,
    title: "Bluetooth Home Automation",
    description: "ESP32/HC-05, relay module for smart home control.",
    category: "Intermediate Automation",
    price: 2500,
    imageUrl: photo("photo-1558346490-a72e53ae2d4f")
  },
  {
    id: "p27",
    no: 27,
    title: "Digital Energy Monitoring Dashboard",
    description: "ESP32, cloud dashboard for power metrics.",
    category: "Intermediate Automation",
    price: 3500,
    imageUrl: photo("photo-1517077304055-6e89abbf09b0")
  },
  {
    id: "p32",
    no: 32,
    title: "Face-Recognition Door Lock",
    description: "ESP32-CAM/Raspberry Pi for secure entry.",
    category: "Intermediate Automation",
    price: 4500,
    imageUrl: photo("photo-1605810230434-7631ac76ec81")
  },
  {
    id: "p41",
    no: 41,
    title: "IoT Weather Station",
    description: "ESP32 + multi-sensor node with cloud syncing.",
    category: "IoT & Smart Systems",
    price: 3200,
    imageUrl: photo("photo-1555664424-778a1e5e1b48")
  },
  {
    id: "p44",
    no: 44,
    title: "Crop Disease Detection",
    description: "Camera + ML image classification.",
    category: "IoT & Smart Systems",
    price: 5500,
    imageUrl: photo("photo-1530836369250-ef71a36167c7")
  },
  {
    id: "p50",
    no: 50,
    title: "Smart Building Energy Management",
    description: "Sensors + load analytics for large scale buildings.",
    category: "IoT & Smart Systems",
    price: 6000,
    imageUrl: photo("photo-1497366216548-37526070297c")
  },
  {
    id: "p57",
    no: 57,
    title: "DC-DC Buck Converter Design",
    description: "MOSFET switching + feedback controller.",
    category: "Advanced Electronics",
    price: 3000,
    imageUrl: photo("photo-1518770660439-4636190af475")
  },
  {
    id: "p66",
    no: 66,
    title: "Digital Oscilloscope Prototype",
    description: "ADC + MCU + high-speed display plotting.",
    category: "Advanced Electronics",
    price: 4000,
    imageUrl: photo("photo-1581091226825-a6a2a5aee158")
  },
  {
    id: "p75",
    no: 75,
    title: "Semiconductor Chamber Controller",
    description: "Sensor + PID + heater/cooling precision loop.",
    category: "Advanced Electronics",
    price: 4800,
    imageUrl: photo("photo-1517077304055-6e89abbf09b0")
  },
  {
    id: "p85",
    no: 85,
    title: "Line-Following Autonomous Robot",
    description: "IR array + motor control algorithms.",
    category: "Robotics & Control",
    price: 2800,
    imageUrl: photo("photo-1580584126903-c17d41830450")
  },
  {
    id: "p88",
    no: 88,
    title: "Self-Balancing Robot",
    description: "IMU + PID control for two-wheeled balancing.",
    category: "Robotics & Control",
    price: 3500,
    imageUrl: photo("photo-1485827404703-89b55fcc595e")
  },
  {
    id: "p90",
    no: 90,
    title: "Autonomous Fire-Fighting Robot",
    description: "Flame sensing + navigation + extinguishing mechanism.",
    category: "Robotics & Control",
    price: 5000,
    imageUrl: photo("photo-1581092795360-fd1ca04f0952")
  }
];
