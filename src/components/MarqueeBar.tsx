const MarqueeBar = () => {
  const text =
    "Telecom Site Constructions • Power Installations • Telecom Cabling • Laying/Runway Installation • Site Survey • Inspection & Consultation • Microwave Equipments • Towers/BTS • VSAT Installations • Earthing & Grounding • Operation & Maintenance • ";

  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="text-sm font-medium mx-4">{text}</span>
        <span className="text-sm font-medium mx-4">{text}</span>
      </div>
    </div>
  );
};

export default MarqueeBar;
