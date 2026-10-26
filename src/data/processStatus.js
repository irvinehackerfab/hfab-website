import LithoStepperIntro from "../assets/subteam_imgs_2/lithography.png";
import SpinCoaterIntro from "../assets/subteam_imgs_2/spincoater.png";
import ThermalEvapIntro from "../assets/subteam_imgs_2/thermalevap.jpg";
import TubeFurnaceIntro from "../assets/subteam_imgs_2/tubefurnace.png";
import SputteringIntro from "../assets/subteam_imgs_2/sputtering.png";
import home_picture from "../assets/home_picture.jpg";

// Status definitions — label + token color. Add a new status here once.
export const STATUS = {
  active: { label: "ACTIVE", color: "var(--gold)" },
  partial: { label: "PARTIAL", color: "var(--blue)" },
  rnd: { label: "R&D", color: "var(--muted)" },
};

// Rows — add/reorder/edit by changing this array only.
export const PROCESSES = [
  {
    id: "lithography",
    name: "Lithography",
    category: "Patterning",
    status: "active",
    image: LithoStepperIntro,
    imageAlt: "Lithography stepper",
    description:
      "A lithography stepper transfers precise patterns onto a wafer during microfabrication. Our setup uses an projector and an optical setup to perform maskless lithography at a 50 micrometer level. We are also in the process of developing an automated 3D stage, with a tested single axis precision of 1 micrometer.",
  },
  {
    id: "spin-coating",
    name: "Spin Coating",
    category: "Deposition",
    status: "active",
    image: SpinCoaterIntro,
    imageAlt: "Spin coater",
    description:
      "A spin coater creates thin, uniform films on flat surfaces by placing a small amount of liquid on a substrate and spinning it at high speed. Our setup uses a 3D printed structure, a hot-swap holder, a touchscreen display, and a vacuum chuck that can spin 1 to 4 in. wafers up to 10,000±10% RPM."
  },
  {
    id: "process-integration",
    name: "Process Integration",
    category: "Process",
    status: "partial",
    image: home_picture,
    imageAlt: "Process integration",
    description:
      "Process integration ties together the individual fabrication steps into a coherent, repeatable flow. This subteam designs process sequences, tracks yield, and troubleshoots cross-step interactions to keep the fab's overall pipeline reliable. Our current implementation involves spin coating and patterning integration using photoresist and a fume hood.",
  },
  {
    id: "thermal-evaporation",
    name: "Thermal Evaporation",
    category: "Deposition",
    status: "rnd",
    image: ThermalEvapIntro,
    imageAlt: "Thermal evaporation",
    description:
      "A thermal evaporator deposits thin metal or dielectric layers on wafers by heating a solid source material in a vacuum until it evaporates and coats the wafer surface. Given this required a high vacuum, we've developed and tested a vacuum system to be used for the setup.",
  },
  {
    id: "tube-furnace",
    name: "Tube Furnace",
    category: "Annealing",
    status: "rnd",
    image: TubeFurnaceIntro,
    imageAlt: "Tube furnace",
    description:
      "A tube furnace heats materials to high temperatures in a controlled environment using a cylindrical chamber surrounded by heating elements. Samples placed inside the tube get precise, even heat distribution, optionally under specific gases, making it useful for material synthesis, annealing, and thermal processing.",
  },
  {
    id: "sputtering",
    name: "Sputtering",
    category: "Deposition",
    status: "rnd",
    image: SputteringIntro,
    imageAlt: "Sputtering",
    description:
      "A sputtering system deposits thin films of material onto a substrate by bombarding a target with high-energy ions, ejecting atoms that settle onto the surface below. This gives precise control over film thickness and composition, producing durable, uniform, high-quality coatings for electronics and sensors.",
  },
];
