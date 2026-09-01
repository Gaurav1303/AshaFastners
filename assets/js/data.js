/* ============================================================
   Asha Fasteners — catalogue data
   ------------------------------------------------------------
   Single source of truth for the whole site. Add a product here
   and it appears in the catalogue, search, filters and detail
   pages automatically.

   image:  optional. Drop a photo at assets/img/<file> and set it
           here — the UI uses it and falls back to the generated
           technical illustration when it is missing or fails.
   shape:  key into assets/js/illustrations.js
   ============================================================ */

const CATEGORIES = [
  { id: 'nuts',       name: 'Nuts',              shape: 'hexnut',      blurb: 'Hex, flange, long, barrel, cage, insert, tee and rivet nuts.' },
  { id: 'bolts',      name: 'Bolts',             shape: 'hexbolt',     blurb: 'Hex, allen, CSK, square head, flange and stud bolts.' },
  { id: 'screws',     name: 'Screws',            shape: 'screw',       blurb: 'Self-drilling, machine, self-tapping and cap screws.' },
  { id: 'washers',    name: 'Washers',           shape: 'washer',      blurb: 'Plain, spring, GI and heavy structural washers.' },
  { id: 'anchors',    name: 'Anchor Fasteners',  shape: 'anchorbolt',  blurb: 'Wedge, drop-in, sleeve and pin type anchors.' },
  { id: 'channel',    name: 'Channel & Strut',   shape: 'channelnut',  blurb: 'Channel nuts, spring nuts and strut accessories.' },
  { id: 'galvanized', name: 'Galvanized Range',  shape: 'gibolt',      blurb: 'Hot-dip galvanised nuts, bolts and washers.' },
  { id: 'tools',      name: 'Tools & Rods',      shape: 'allenkey',    blurb: 'Allen keys, threaded rods and U-bolt assemblies.' }
];

const PRODUCTS = [
  /* ---------------------------------- NUTS */
  { id:'ms-hex-nut', name:'Mild Steel Hex Nut', category:'nuts', shape:'hexnut', featured:true,
    tagline:'The workhorse hexagon nut, stocked in every size we carry.',
    sizes:'M3 – M64', standard:'DIN 934 / IS 1364', material:'Mild Steel', finish:'Self, Zinc, HDG, Black', grade:'Class 4 / 5 / 8',
    tags:['Hex','DIN 934','MS'],
    desc:'Cold-forged mild steel hexagon nuts with cleanly cut, burr-free threads. Our highest volume line — held in depth across the full M3 to M64 range so mixed-size orders ship the same day.' },

  { id:'high-tensile-hex-nut', name:'High Tensile Hex Nut', category:'nuts', shape:'hexnut', featured:true,
    tagline:'Grade 8.8 and 10.9 nuts for structural and machine duty.',
    sizes:'M6 – M36', standard:'DIN 934 / IS 1364 Part 1', material:'Medium Carbon Steel', finish:'Black, Zinc, Geomet', grade:'8.8 / 10.9 / 12.9',
    tags:['High Tensile','8.8','10.9'],
    desc:'Heat-treated high tensile nuts matched to the proof load of their mating bolt grade. Supplied with mill test certificates on request for structural, railway and heavy machinery work.' },

  { id:'ms-flange-nut', name:'Mild Steel Flange Nut', category:'nuts', shape:'flangenut', featured:true,
    tagline:'Integrated serrated flange — spreads load, resists loosening.',
    sizes:'M4 – M24', standard:'DIN 6923', material:'Mild Steel', finish:'Zinc Plated, Black', grade:'Class 8',
    tags:['Flange','DIN 6923','Serrated'],
    desc:'A built-in washer face removes a part from the assembly and the serrations bite into the joint surface, giving vibration resistance without a lock washer. Widely used on automotive and solar mounting lines.' },

  { id:'flange-nut-din6923', name:'Flange Nut DIN 6923', category:'nuts', shape:'flangenut',
    tagline:'Non-serrated flange nut for painted and coated surfaces.',
    sizes:'M5 – M20', standard:'DIN 6923', material:'MS / High Tensile', finish:'Zinc, Yellow Passivated', grade:'8 / 10',
    tags:['Flange','DIN 6923'],
    desc:'The smooth-face variant, used where a serrated flange would score a finished or galvanised surface. Available in both mild steel and high tensile grades.' },

  { id:'ms-long-nut', name:'MS Long Nut (Coupling Nut)', category:'nuts', shape:'longnut', featured:true,
    tagline:'Extended body for joining two lengths of threaded rod.',
    sizes:'M6 – M30 · 25mm to 100mm long', standard:'DIN 6334', material:'Mild Steel', finish:'Zinc, HDG, Self', grade:'Class 4 / 6',
    tags:['Long Nut','Coupler','DIN 6334'],
    desc:'Also called a coupling or extension nut. Three-diameter body length gives full thread engagement on both rods — the standard joiner in threaded rod hanger systems for HVAC and fire-sprinkler runs.' },

  { id:'ms-barrel-nut', name:'Mild Steel Barrel Nut', category:'nuts', shape:'barrelnut',
    tagline:'Cylindrical cross-dowel nut for furniture and frame joints.',
    sizes:'M6 – M12', standard:'Manufacturer standard', material:'Mild Steel', finish:'Zinc Plated', grade:'Class 4.8',
    tags:['Barrel','Cross Dowel'],
    desc:'A round barrel with a cross-drilled threaded hole and a screwdriver slot for alignment. Seats inside a drilled bore to create a strong, concealed knock-down joint.' },

  { id:'ms-cage-nut', name:'Mild Steel Cage Nut', category:'nuts', shape:'cagenut',
    tagline:'Spring-steel cage nut for server racks and enclosures.',
    sizes:'M4, M5, M6', standard:'Rack standard 9.5mm square', material:'MS nut in spring steel cage', finish:'Zinc Plated', grade:'Class 8',
    tags:['Cage','Rack','19-inch'],
    desc:'Snaps into the square holes of a 19-inch rack or sheet metal enclosure and floats slightly, letting the bolt find the thread even when panels are marginally out of line.' },

  { id:'ms-insert-nut', name:'Mild Steel Insert Nut', category:'nuts', shape:'insertnut',
    tagline:'Threaded insert that gives soft materials a steel thread.',
    sizes:'M4 – M12', standard:'Manufacturer standard', material:'Mild Steel', finish:'Zinc Plated', grade:'Class 4.8',
    tags:['Insert','Threaded Insert'],
    desc:'External barbs or coarse wood thread anchor the insert into timber, MDF or plastic; the internal metric thread then takes repeated assembly and disassembly without wear.' },

  { id:'ms-tee-nut', name:'Mild Steel Tee Nut', category:'nuts', shape:'teenut',
    tagline:'Flanged T-nut with prongs that grip on the blind side.',
    sizes:'M4 – M12', standard:'Manufacturer standard', material:'Mild Steel', finish:'Zinc Plated', grade:'Class 4.8',
    tags:['Tee Nut','Prong'],
    desc:'Driven from the back of a panel, the three or four prongs bite in and stop the nut turning. Standard in climbing walls, speaker cabinets and knock-down furniture.' },

  { id:'ms-rivet-nut', name:'Mild Steel Rivet Nut', category:'nuts', shape:'rivetnut',
    tagline:'Blind threaded rivet for one-sided sheet metal access.',
    sizes:'M3 – M12', standard:'Manufacturer standard', material:'Mild Steel', finish:'Zinc Plated', grade:'Class 6',
    tags:['Rivnut','Blind','Sheet Metal'],
    desc:'Set with a hand or pneumatic tool, the body collapses behind the panel to form a permanent load-bearing thread in sheet as thin as 0.5mm — no welding, no rear access.' },

  { id:'ms-spring-nut', name:'Mild Steel Spring Nut', category:'channel', shape:'springnut', featured:true,
    tagline:'Channel nut with a captive spring for one-hand fitting.',
    sizes:'M6 – M16', standard:'Strut channel 41x41 / 41x21', material:'Mild Steel, spring steel', finish:'Zinc Plated, HDG', grade:'Class 4.8',
    tags:['Spring Nut','Strut','Channel'],
    desc:'The spring holds the nut against the channel lips at any point along the run, so the fitter can position and bolt with one hand while holding the bracket with the other.' },

  { id:'channel-nut', name:'Channel Nut — Long / Short / No Spring', category:'channel', shape:'channelnut', featured:true,
    tagline:'Full family of strut channel nuts in three spring lengths.',
    sizes:'M6, M8, M10, M12, M16', standard:'For 41mm strut channel', material:'Mild Steel', finish:'Zinc Plated, HDG', grade:'Class 4.8',
    tags:['Channel Nut','Long Spring','Short Spring'],
    desc:'Supplied with a long spring for deep channel, a short spring for shallow channel, and plain without spring where the nut is slid in from the end. Grooved teeth key into the channel lips to resist slip under load.' },

  { id:'ms-taper-nut', name:'Mild Steel Taper Nut', category:'nuts', shape:'tapernut',
    tagline:'Conical body for self-centring and clearance-limited joints.',
    sizes:'M8 – M24', standard:'Manufacturer standard', material:'Mild Steel', finish:'Zinc, Black', grade:'Class 4.8',
    tags:['Taper','Conical'],
    desc:'The tapered profile draws the joint into alignment as it tightens and lets a spanner reach into recessed pockets where a standard hex would foul.' },

  { id:'ms-anchor-nut', name:'Mild Steel Anchor Nut', category:'anchors', shape:'anchornut',
    tagline:'Two-lug plate nut, riveted for permanent captive threads.',
    sizes:'M4 – M10', standard:'Manufacturer standard', material:'Mild Steel', finish:'Cadmium / Zinc Plated', grade:'Class 5',
    tags:['Anchor Nut','Plate Nut','Captive'],
    desc:'Riveted to the inside of a panel so the thread stays captive for the life of the assembly. Used on access panels and inspection covers that are opened repeatedly.' },

  { id:'makhi-nut', name:'Makhi Nut (Wing Nut)', category:'nuts', shape:'wingnut',
    tagline:'Hand-tightened wing nut — no tool required.',
    sizes:'M4 – M16', standard:'DIN 315', material:'Mild Steel', finish:'Zinc Plated', grade:'Class 4.8',
    tags:['Wing Nut','Makhi','DIN 315'],
    desc:'Two wings give enough purchase to tighten and release by hand, for guards, covers and fixtures that come off often. Supplied loose or paired with a matching U-bolt.' },

  { id:'ms-dome-nut', name:'Dome Nut (Acorn Nut)', category:'nuts', shape:'domenut',
    tagline:'Closed cap nut — covers the thread, finishes the joint.',
    sizes:'M4 – M20', standard:'DIN 1587', material:'Mild Steel', finish:'Zinc, Nickel Plated', grade:'Class 6',
    tags:['Dome','Acorn','DIN 1587'],
    desc:'A closed dome seals the bolt end against moisture and removes the sharp thread stub — chosen wherever the fastener is visible or within reach of hands.' },

  { id:'ms-nylock-nut', name:'Nyloc Self-Locking Nut', category:'nuts', shape:'nylocnut',
    tagline:'Nylon insert grips the thread and holds under vibration.',
    sizes:'M3 – M24', standard:'DIN 985', material:'MS / High Tensile + nylon', finish:'Zinc Plated', grade:'Class 8 / 10',
    tags:['Nyloc','Self Locking','DIN 985'],
    desc:'The uncut nylon collar deforms around the bolt thread to create prevailing torque that survives vibration and thermal cycling. Reusable for several cycles before the collar loses grip.' },

  /* --------------------------------- BOLTS */
  { id:'ms-hex-bolt', name:'MS Hex Bolt', category:'bolts', shape:'hexbolt', featured:true,
    tagline:'Full and half-threaded hexagon bolts, M3 upwards.',
    sizes:'M3 – M48 · 10mm to 500mm', standard:'DIN 931 / 933 · IS 1364', material:'Mild Steel', finish:'Self, Zinc, HDG, Black', grade:'4.6 / 4.8',
    tags:['Hex Bolt','DIN 933','DIN 931'],
    desc:'The core of our bolt range. DIN 933 fully threaded and DIN 931 with a plain shank, cut from bright drawn bar and rolled — never cut — threads for a stronger root.' },

  { id:'high-tensile-hex-bolt', name:'High Tensile Hex Bolt 8.8 / 10.9', category:'bolts', shape:'hexbolt', featured:true,
    tagline:'Certified structural bolts with mill test reports.',
    sizes:'M6 – M36', standard:'DIN 931 / 933 · IS 1367', material:'Medium Carbon Alloy Steel', finish:'Black, Zinc, HDG', grade:'8.8 / 10.9 / 12.9',
    tags:['High Tensile','8.8','Structural'],
    desc:'Quenched and tempered to grade, head-marked for identification, and traceable to heat number. Specified for structural steelwork, crane rails, presses and heavy plant.' },

  { id:'allen-socket-head-bolt', name:'Allen Socket Head Bolt (SHCS)', category:'bolts', shape:'allenbolt', featured:true,
    tagline:'Internal hex drive for tight, high-torque assemblies.',
    sizes:'M3 – M24', standard:'DIN 912 / ISO 4762', material:'Alloy Steel', finish:'Black Oxide, Zinc', grade:'8.8 / 10.9 / 12.9',
    tags:['Allen','SHCS','DIN 912'],
    desc:'A compact cylindrical head driven from inside, so it sits in a counterbore flush with the surface and takes far more torque than an equivalent slotted head. The standard for jigs, dies and machine building.' },

  { id:'csk-allen-bolt', name:'CSK Allen Bolt', category:'bolts', shape:'cskbolt',
    tagline:'Countersunk socket head — finishes flush with the surface.',
    sizes:'M3 – M20 · M5, M6, M8, M10, M12, M14 in stock depth', standard:'DIN 7991 / ISO 10642', material:'Alloy Steel', finish:'Black Oxide, Zinc', grade:'8.8 / 10.9',
    tags:['CSK','Countersunk','DIN 7991'],
    desc:'A 90-degree conical head that pulls itself flush into a countersunk hole, leaving nothing proud of the surface — essential on sliding faces, guards and panel work.' },

  { id:'hexagon-socket-head-cap-screw', name:'Hexagon Socket Head Cap Screw', category:'screws', shape:'allenbolt',
    tagline:'Precision cap screws in high tensile alloy steel.',
    sizes:'M2 – M20', standard:'DIN 912', material:'Alloy Steel 12.9', finish:'Black Oxide', grade:'12.9',
    tags:['Cap Screw','DIN 912','12.9'],
    desc:'Our highest grade fastener, at 1220 MPa tensile. Held for tool rooms, moulds and fixtures where the bolt has to carry near its rated load in a small envelope.' },

  { id:'ms-square-head-bolt', name:'Mild Steel Square Head Bolt', category:'bolts', shape:'squarebolt',
    tagline:'Four-sided head for spanner grip in confined pockets.',
    sizes:'M8 – M30', standard:'DIN 478 / manufacturer standard', material:'Mild Steel', finish:'Self, Zinc, HDG', grade:'4.6',
    tags:['Square Head','Set Bolt'],
    desc:'A traditional head form still specified for agricultural machinery, transmission line hardware and heavy fabrication where a square pocket holds the bolt against rotation.' },

  { id:'ms-flange-bolt', name:'Mild Steel Flange Bolt', category:'bolts', shape:'flangebolt',
    tagline:'Washer-faced head — one part instead of two.',
    sizes:'M6 – M20', standard:'DIN 6921', material:'MS / High Tensile', finish:'Zinc Plated, Black', grade:'8.8 / 10.9',
    tags:['Flange Bolt','DIN 6921'],
    desc:'The integral serrated flange spreads clamp load over a wider footprint and locks against the joint face, cutting assembly time on production lines.' },

  { id:'ms-stud-bolt', name:'Mild Steel Stud Bolt', category:'bolts', shape:'studbolt', featured:true,
    tagline:'Fully threaded studs, cut to your length.',
    sizes:'M6 – M56 · cut to length', standard:'ASTM A193 B7 / IS 1367', material:'MS / Alloy Steel', finish:'Self, Zinc, HDG, PTFE', grade:'4.6 / 8.8 / B7',
    tags:['Stud','Flange Bolt','B7'],
    desc:'Double-end and fully threaded studs for flanged pipe joints, pressure vessels and pump mounts. Cut, chamfered and supplied with matching heavy hex nuts as a set.' },

  { id:'ms-hex-nut-bolt-set', name:'MS Hex Nut Bolt Set', category:'bolts', shape:'nutboltset', featured:true,
    tagline:'Matched bolt, nut and washer, bagged per size.',
    sizes:'M6 – M24', standard:'DIN 933 + DIN 934 + DIN 125', material:'Mild Steel', finish:'Zinc, HDG', grade:'4.6 / 8.8',
    tags:['Set','Kit','Assembly'],
    desc:'Bolt, hex nut and plain washer pre-counted and bagged so a site crew opens one bag per size instead of three. Custom kit contents on request for repeat projects.' },

  { id:'ms-m3-hex-bolt', name:'MS M3 Hex Bolt', category:'bolts', shape:'hexbolt',
    tagline:'Small-diameter hex bolts for electrical and panel work.',
    sizes:'M3 · 6mm to 50mm', standard:'DIN 933', material:'Mild Steel', finish:'Zinc Plated', grade:'4.8',
    tags:['M3','Small Bolt'],
    desc:'The smallest hex bolt we hold in volume, used across switchgear, control panels and light enclosure assembly where an M3 clearance hole is the norm.' },

  { id:'eye-bolt', name:'Eye Bolt', category:'bolts', shape:'eyebolt',
    tagline:'Forged lifting eye for slings, cables and tie-downs.',
    sizes:'M6 – M36', standard:'DIN 580', material:'Forged Steel C15', finish:'Zinc Plated, Galvanised', grade:'Class 4 forged',
    tags:['Eye Bolt','Lifting','DIN 580'],
    desc:'Drop-forged rather than bent from bar, so the eye carries its rated lifting load without opening. Supplied with load rating stamped on the ring.' },

  { id:'u-bolt-nut', name:'U Bolt & Nut', category:'tools', shape:'ubolt', featured:true,
    tagline:'Round and square U-bolts with matching nuts.',
    sizes:'M6 – M24 · to your pipe OD', standard:'Made to order', material:'MS / Galvanised', finish:'Self, Zinc, HDG', grade:'4.6',
    tags:['U Bolt','Pipe Clamp','Makhi'],
    desc:'Bent to your pipe or beam dimension in round or square profile, supplied with makhi (wing) or hex nuts. The standard clamp for pipe runs, exhaust work and leaf spring assemblies.' },

  { id:'j-bolt-foundation', name:'J Bolt / Foundation Bolt', category:'anchors', shape:'jbolt',
    tagline:'Cast-in foundation bolts, bent and threaded to drawing.',
    sizes:'M12 – M64 · up to 1500mm', standard:'Made to drawing', material:'MS / High Tensile', finish:'Self, HDG', grade:'4.6 / 8.8',
    tags:['Foundation','J Bolt','Cast In'],
    desc:'L, J and hook-form foundation bolts fabricated to your GA drawing and supplied with template plates, nuts and washers for casting into concrete bases.' },

  /* -------------------------------- SCREWS */
  { id:'self-drilling-screw', name:'Self Drilling Screw', category:'screws', shape:'selfdrill', featured:true,
    tagline:'Drills, taps and fastens in a single pass.',
    sizes:'#8 – #14 · 13mm to 100mm', standard:'DIN 7504', material:'Case Hardened Steel', finish:'Zinc, Ruspert', grade:'Case hardened',
    tags:['Self Drilling','TEK','Roofing'],
    desc:'A drill-point tip cuts its own pilot hole through steel purlins up to 5mm, so roofing and cladding crews fix sheets in one operation. Available with bonded EPDM sealing washers.' },

  { id:'self-tapping-screw', name:'Self Tapping Screw', category:'screws', shape:'screw',
    tagline:'Forms its own thread in sheet metal and plastic.',
    sizes:'#4 – #14', standard:'DIN 7981 / 7982', material:'Case Hardened Steel', finish:'Zinc Plated', grade:'Case hardened',
    tags:['Self Tapping','Pan Head','CSK'],
    desc:'Pan, countersunk and flange heads with Phillips or pozi drive. Sharp point for thin sheet, blunt point for pre-drilled holes.' },

  { id:'machine-screw', name:'Machine Screw', category:'screws', shape:'screw',
    tagline:'Precision metric screws in every common head form.',
    sizes:'M2 – M12', standard:'DIN 84 / 963 / 7985', material:'Mild Steel', finish:'Zinc, Nickel, Black', grade:'4.8',
    tags:['Machine Screw','Pan','CSK','Cheese'],
    desc:'Straight-shank screws for tapped holes and nuts. Cheese, pan, countersunk and raised heads in slotted and cross drives.' },

  { id:'grub-screw', name:'Grub Screw / Set Screw', category:'screws', shape:'grubscrew',
    tagline:'Headless socket screw for shafts, collars and pulleys.',
    sizes:'M3 – M16', standard:'DIN 913 / 914 / 916', material:'Alloy Steel', finish:'Black Oxide', grade:'45H',
    tags:['Grub','Set Screw','DIN 916'],
    desc:'Flat, cone and cup point headless screws that sit fully inside the tapped hole, locking a hub, collar or gear onto its shaft with no protrusion.' },

  { id:'ms-screw', name:'MS Screw — General Range', category:'screws', shape:'screw',
    tagline:'Mixed mild steel screw stock across drives and heads.',
    sizes:'M2 – M16', standard:'Various DIN / IS', material:'Mild Steel', finish:'Zinc, Self, Black', grade:'4.8',
    tags:['MS Screw','General'],
    desc:'Our general screw shelf — the odd sizes, drives and head forms that keep a maintenance store running. Tell us what you need and we will match it from stock.' },

  /* ------------------------------- WASHERS */
  { id:'metal-plain-washer', name:'Metal Plain Washer', category:'washers', shape:'washer', featured:true,
    tagline:'M3 to M100 flat washers to IS, DIN and ASTM standards.',
    sizes:'M3 – M100', standard:'IS 2016 / DIN 125 / DIN 9021 / F436', material:'MS & High Tensile', finish:'Self, Zinc, HDG, Black', grade:'MS / HT 8.8',
    tags:['Plain Washer','DIN 125','IS 2016'],
    desc:'Punched and deburred flat washers across the widest size span we stock, from M3 electrical work to M100 structural. DIN 9021 heavy pattern available where load has to spread over soft material.' },

  { id:'ms-spring-washer', name:'Mild Steel Spring Washer', category:'washers', shape:'springwasher', featured:true,
    tagline:'Split lock washer — keeps tension as the joint settles.',
    sizes:'M3 – M48', standard:'IS 3063 / DIN 127B', material:'Spring Steel', finish:'Self, Zinc, HDG', grade:'Spring tempered',
    tags:['Spring Washer','Lock','DIN 127'],
    desc:'A tempered split ring that stays elastic under the nut, holding preload as gaskets compress and joints bed in. The default anti-loosening washer on general machinery.' },

  { id:'gi-washer', name:'Galvanized Iron Washer', category:'washers', shape:'washer',
    tagline:'Hot-dip galvanised washers for outdoor and coastal sites.',
    sizes:'M6 – M64', standard:'IS 2016 / F436', material:'Mild Steel, HDG', finish:'Hot Dip Galvanised 45–85 µm', grade:'MS',
    tags:['GI','Galvanised','Outdoor'],
    desc:'Thick zinc coating applied by hot dipping, giving decades of outdoor life on transmission towers, solar structures and marine-adjacent plant.' },

  { id:'heavy-structural-washer', name:'Heavy Structural Washer', category:'washers', shape:'heavywasher',
    tagline:'Thick, hardened washers for high tensile structural joints.',
    sizes:'M12 – M36', standard:'ASTM F436 / IS 6649', material:'Hardened Carbon Steel', finish:'Black, HDG', grade:'HRC 38–45',
    tags:['Structural','F436','Hardened'],
    desc:'Hardened to prevent the washer dishing under a 10.9 bolt head, and dimensioned to IS 6649 for structural steel connections.' },

  /* ------------------------------- ANCHORS */
  { id:'wedge-anchor-bolt', name:'Wedge Anchor Bolt', category:'anchors', shape:'anchorbolt', featured:true,
    tagline:'Expansion clip anchor for cracked and uncracked concrete.',
    sizes:'M6 – M24 · 50mm to 300mm', standard:'Manufacturer standard', material:'Carbon Steel', finish:'Zinc Plated, HDG', grade:'Grade 4.8 / 8.8',
    tags:['Wedge','Expansion','Concrete'],
    desc:'Driven into a drilled hole and tightened; the clip is drawn up the tapered cone and wedges hard against the concrete. Our most-used anchor for machine bases, racking and structural steel baseplates.' },

  { id:'drop-in-anchor', name:'M12 Drop In Anchor', category:'anchors', shape:'dropinanchor', featured:true,
    tagline:'Flush internally threaded anchor for overhead fixing.',
    sizes:'M6, M8, M10, M12, M16, M20', standard:'Manufacturer standard', material:'Carbon Steel / Zamak', finish:'Zinc Plated', grade:'Class 4.8',
    tags:['Drop In','Internal Thread','Overhead'],
    desc:'Set flush with a setting tool, leaving an internal thread in the slab. The threaded rod or bolt goes in afterwards, which makes it the standard anchor for suspended ceilings, cable tray and HVAC hangers.' },

  { id:'sleeve-anchor', name:'Anchor Bolt Sleeve', category:'anchors', shape:'sleeveanchor', featured:true,
    tagline:'Sleeved anchor that grips brick, block and concrete.',
    sizes:'M6 – M20', standard:'Manufacturer standard', material:'Carbon Steel', finish:'Zinc Plated, HDG', grade:'Class 4.8',
    tags:['Sleeve','Masonry','Brick'],
    desc:'The full-length expanding sleeve spreads load over a larger area than a wedge clip, which is what lets it hold in hollow block and brickwork as well as solid concrete.' },

  { id:'pin-type-anchor', name:'Pin Type Anchor Fastener', category:'anchors', shape:'pinanchor',
    tagline:'Hammer-set nail anchor for fast, high-volume fixing.',
    sizes:'6mm – 12mm', standard:'Manufacturer standard', material:'Carbon Steel', finish:'Zinc Plated', grade:'Class 4.8',
    tags:['Pin','Hammer Set','Nail Anchor'],
    desc:'Placed through the fixture and driven home with a hammer — no torquing. Ideal for repeated light fixings such as conduit clips, battens and cladding rails.' },

  { id:'chemical-anchor-stud', name:'Chemical Anchor Stud', category:'anchors', shape:'studbolt',
    tagline:'Threaded stud for resin-bonded high-load anchoring.',
    sizes:'M8 – M30', standard:'Made to length', material:'MS / High Tensile', finish:'Zinc, HDG', grade:'5.8 / 8.8',
    tags:['Chemical','Resin','Stud'],
    desc:'Chamfered and notched studs designed to key into injection resin, for close-to-edge fixings and high loads where an expansion anchor would split the concrete.' },

  /* ---------------------------- GALVANIZED */
  { id:'hdg-bolts-nuts-washers', name:'HDG Bolts, Nuts & Washers', category:'galvanized', shape:'gibolt', featured:true,
    tagline:'Complete hot-dip galvanised assemblies for outdoor steel.',
    sizes:'M8 – M48', standard:'IS 1367 Part 13 / ASTM A153', material:'MS & High Tensile', finish:'Hot Dip Galvanised', grade:'4.6 / 8.8',
    tags:['HDG','Galvanised','Outdoor'],
    desc:'Bolts galvanised then nuts tapped oversize and lubricated so the assembly still runs freely — supplied as matched sets. Specified for transmission towers, solar structures and bridge work.' },

  { id:'gi-nut-bolt', name:'GI Nut Bolt', category:'galvanized', shape:'gibolt',
    tagline:'Electro-galvanised nut and bolt sets for general outdoor use.',
    sizes:'M6 – M24', standard:'DIN 933 / 934', material:'Mild Steel', finish:'Electro Galvanised 8–12 µm', grade:'4.6',
    tags:['GI','Zinc','Nut Bolt'],
    desc:'A bright, uniform zinc coat for sheltered outdoor and semi-industrial environments where hot dip would be more coating than the job needs.' },

  { id:'gi-threaded-rod', name:'GI Threaded Rod', category:'galvanized', shape:'threadedrod',
    tagline:'Galvanised studding in 1m and 3m lengths.',
    sizes:'M6 – M36 · 1m / 3m', standard:'DIN 975', material:'Mild Steel', finish:'HDG / Electro Galvanised', grade:'4.6 / 4.8',
    tags:['Threaded Rod','Studding','GI'],
    desc:'Full-length rolled thread with clean starts at both ends. Cut on site or supplied cut to length with matching long nuts and washers.' },

  /* ------------------------------ TOOLS/RODS */
  { id:'allen-key-set', name:'Allen Key Set', category:'tools', shape:'allenkey', featured:true,
    tagline:'Hardened hex keys, singles and folding sets.',
    sizes:'1.5mm – 22mm (metric) · 1/16" – 3/8"', standard:'DIN 911 / ISO 2936', material:'Chrome Vanadium Steel', finish:'Black, Nickel Plated', grade:'HRC 55–60',
    tags:['Allen Key','Hex Key','CRV'],
    desc:'Chrome vanadium keys hardened through the section so the corners do not round off. Long arm, short arm, ball-end and T-handle patterns, loose or in a folding set.' },

  { id:'csk-allen-key-bolt', name:'CSK Allen Key Bolt — All Sizes', category:'bolts', shape:'cskbolt',
    tagline:'M5, M6, M8, M10, M12, M14 and beyond, held in depth.',
    sizes:'M5, M6, M8, M10, M12, M14, M16, M20', standard:'DIN 7991', material:'Alloy Steel', finish:'Black Oxide, Zinc', grade:'8.8 / 10.9',
    tags:['CSK','Allen','All Sizes'],
    desc:'The countersunk allen sizes that move fastest, stocked deep in the common lengths so a whole machine build ships from one order.' },

  { id:'ms-threaded-rod', name:'MS Threaded Rod', category:'tools', shape:'threadedrod', featured:true,
    tagline:'Fully threaded studding, 1m and 3m, cut to order.',
    sizes:'M4 – M48 · 1m / 3m / cut', standard:'DIN 975 / DIN 976', material:'Mild Steel', finish:'Self, Zinc, HDG', grade:'4.6 / 4.8 / 8.8',
    tags:['Threaded Rod','Studding','DIN 975'],
    desc:'Rolled thread over the full length, straightened and chamfered. The backbone of pipe hanger and cable tray suspension systems, and cut to any length you need.' },

  { id:'spanner-set', name:'Spanner & Socket Set', category:'tools', shape:'spanner',
    tagline:'Workshop spanners matched to the fasteners we supply.',
    sizes:'6mm – 32mm', standard:'DIN 3113 / DIN 3124', material:'Chrome Vanadium Steel', finish:'Chrome Plated', grade:'HRC 42–48',
    tags:['Spanner','Socket','Workshop'],
    desc:'Double-ended, ring-and-open and socket sets in the sizes that match our nut and bolt range, so a fitter can be equipped from one supplier.' }
];

/* Industries the company serves — used on the home page. */
const INDUSTRIES = [
  { name:'Metal Framing',   note:'Strut, channel and support systems' },
  { name:'Solar',           note:'Module clamps and mounting structures' },
  { name:'Railways',        note:'Rolling stock and track-side hardware' },
  { name:'Automobile',      note:'Assembly line and aftermarket fasteners' },
  { name:'HVAC',            note:'Duct, hanger and plant room fixings' },
  { name:'Electrical',      note:'Panels, switchgear and cable tray' },
  { name:'Construction',    note:'Structural steel and formwork' },
  { name:'General Engineering', note:'Fabrication, tool rooms and maintenance' }
];

const COMPANY = {
  name: 'Asha Fasteners',
  legal: 'Asha Fasteners',
  since: 2015,
  tagline: 'Complete fastener solutions for the metal framing industry',
  address: 'H. No. 879/1, Street No. 5½, Nirankari Mohalla,\nOpp. District Industries Centre, Millerganj,\nLudhiana — 141003, Punjab, India',
  addressShort: 'Millerganj, Ludhiana — 141003, Punjab',
  contactPerson: 'Shubham',
  contactRole: 'Manager',
  phone: '+91 98765 43210',
  phoneHref: '+919876543210',
  email: 'info@ashafasteners.in',
  gst: '03BWJPM6444C1ZQ',
  iec: 'BWJPM6444C',
  nature: 'Manufacturer · Wholesaler · Trader · Distributor',
  hours: 'Monday – Saturday · 9:30 AM to 7:00 PM'
};
