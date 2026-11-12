import type { ContentMeta, EquipmentItem, ImageAsset } from "@/content/types";

const pexelsLicense = {
  license: "Pexels License",
  licenseUrl: "https://www.pexels.com/license/",
} as const;

const demoMeta = (source: string): ContentMeta => ({
  status: "demo",
  approval: "pending",
  mustReplace: true,
  source,
  note: "Illustrative catalogue entry. Specifications and availability require client confirmation.",
});

const images = {
  multibeam: {
    src: "/images/equipment/multibeam.jpg",
    alt: "Survey vessel moving across clear blue water",
    width: 1600,
    height: 2402,
    credit: "Maahid Photos",
    sourceUrl: "https://www.pexels.com/photo/top-view-photo-of-speedboat-on-sea-4701633/",
    ...pexelsLicense,
  },
  gnss: {
    src: "/images/equipment/gnss-ins.jpg",
    alt: "Surveying instrument set up outdoors for precise positioning",
    width: 1600,
    height: 1068,
    credit: "Khoiru Ummah Kendari 24",
    sourceUrl:
      "https://www.pexels.com/photo/high-precision-construction-surveying-equipment-outdoors-36930873/",
    ...pexelsLicense,
  },
  usv: {
    src: "/images/equipment/usv.jpg",
    alt: "Unmanned survey vessel on calm open water seen from above",
    width: 1600,
    height: 2000,
    credit: "Emre Koşak",
    sourceUrl:
      "https://www.pexels.com/photo/aerial-view-of-boat-on-tranquil-ocean-surface-30617592/",
    ...pexelsLicense,
  },
  echoSounder: {
    src: "/images/equipment/echo-sounder.jpg",
    alt: "Surveying theodolite mounted on a tripod outdoors",
    width: 1600,
    height: 2400,
    credit: "Anthony Desrochers",
    sourceUrl: "https://www.pexels.com/photo/engineering-equipment-in-close-up-shot-13279686/",
    ...pexelsLicense,
  },
} satisfies Record<string, ImageAsset>;

export const equipmentItems = [
  {
    slug: "multibeam-echosounder",
    name: "Multibeam echosounder",
    category: "Bathymetric survey",
    model: "Demo configuration",
    summary:
      "A swath sonar configuration for bathymetric mapping, seabed visualisation and survey data capture.",
    description:
      "A portable multibeam configuration intended for nearshore and coastal survey work. The illustrative package combines sonar acquisition, motion compensation and processed bathymetric outputs for engineering review.",
    specs: [
      { label: "Operating frequency", value: "200–400 kHz (illustrative)" },
      { label: "Depth capability", value: "Up to 200 m (illustrative)" },
      { label: "Beam configuration", value: "256 beams (illustrative)" },
      { label: "Outputs", value: "Bathymetry, backscatter and raw sonar files" },
    ],
    applications: [
      "Nearshore corridor mapping",
      "Bathymetric baseline surveys",
      "Pre-construction seabed review",
      "Survey data handover",
    ],
    hireNote:
      "Hire configuration, mobilisation scope and availability are subject to client confirmation.",
    image: images.multibeam,
    meta: demoMeta("Illustrative equipment catalogue record"),
  },
  {
    slug: "gnss-ins-positioning",
    name: "GNSS / INS positioning system",
    category: "Positioning & motion",
    model: "Demo configuration",
    summary:
      "A positioning and motion reference package for survey acquisition, vessel heading and tight quality control.",
    description:
      "An illustrative GNSS and inertial system for survey positioning. The configuration is presented to show how positioning, heading, motion and time synchronisation could be described in a hire catalogue.",
    specs: [
      { label: "Heading accuracy", value: "0.05° (illustrative)" },
      { label: "Pitch and roll accuracy", value: "0.02° (illustrative)" },
      { label: "RTK positioning", value: "1 cm + 1 ppm (illustrative)" },
      { label: "Update rate", value: "200 Hz (illustrative)" },
    ],
    applications: [
      "Hydrographic survey positioning",
      "Vessel motion compensation",
      "Equipment calibration",
      "Survey quality checks",
    ],
    hireNote:
      "Antenna configuration, calibration and mobilisation requirements require a project-specific review.",
    image: images.gnss,
    meta: demoMeta("Illustrative equipment catalogue record"),
  },
  {
    slug: "unmanned-survey-vessel",
    name: "Unmanned survey vessel",
    category: "Surface survey platform",
    model: "Demo configuration",
    summary:
      "A compact uncrewed platform for shallow-water survey lines and repeatable nearshore data collection.",
    description:
      "An illustrative uncrewed surface vessel for shallow-water survey support. The platform concept pairs a small vessel footprint with a modular payload bay and remote operating workflow.",
    specs: [
      { label: "Length", value: "3.2 m (illustrative)" },
      { label: "Cruising speed", value: "Up to 8 knots (illustrative)" },
      { label: "Endurance", value: "Up to 10 hours (illustrative)" },
      { label: "Payload capacity", value: "Up to 25 kg (illustrative)" },
    ],
    applications: [
      "Shallow-water bathymetry",
      "Repeat nearshore monitoring",
      "Inaccessible or constrained sites",
      "Survey mobilisation support",
    ],
    hireNote:
      "Operating limits, payload compatibility and local permissions require confirmation before hire.",
    image: images.usv,
    meta: demoMeta("Illustrative equipment catalogue record"),
  },
  {
    slug: "single-beam-echosounder",
    name: "Single-beam echosounder",
    category: "Depth sounding",
    model: "Demo configuration",
    summary:
      "A compact depth-sounding package for profile checks, calibration work and supplementary survey data.",
    description:
      "An illustrative single-beam system for depth measurement and survey support. It is presented as a practical secondary sensor for check lines, calibration and smaller survey scopes.",
    specs: [
      { label: "Frequency", value: "200 kHz (illustrative)" },
      { label: "Depth range", value: "0.3–300 m (illustrative)" },
      { label: "Accuracy", value: "1 cm ± 0.1% (illustrative)" },
      { label: "Interface", value: "NMEA and survey software output" },
    ],
    applications: [
      "Depth profile checks",
      "Calibration and verification lines",
      "Small survey scopes",
      "Supplementary survey data",
    ],
    hireNote:
      "Transducer mounting, calibration and data format requirements are confirmed per project.",
    image: images.echoSounder,
    meta: demoMeta("Illustrative equipment catalogue record"),
  },
] satisfies readonly EquipmentItem[];
