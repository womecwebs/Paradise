// where-next.js

const VIATOR_BASE_URL = "https://www.viator.com/searchResults/all";
const VIATOR_PARAMS = "pid=P00218939&mcid=42383&medium=link";

(function () {
  // Skip page-specific app initialization if this page doesn't have the core elements.
  if (
    !document.getElementById("months") &&
    !document.getElementById("resultsGrid")
  ) {
    console.log(
      "where-next.js: skipping page-specific initialization (blog page detected)",
    );
    return;
  }

  const EXPERIENCES = [
    "Beach",
    "City",
    "Culture",
    "Food & Wine",
    "Nature",
    "Adventure",
    "Skiing",
    "Wildlife",
    "Wellness",
    "Remote Work",
    "Luxury",
    "Festival",
    "Romance",
    "Honeymoon",
    "Family",
    "Nightlife",
    "Shopping",
    "History",
    "Road Trip",
    "Cruise",
    "Hiking",
    "Safari",
    "Winter",
    "Summer",
  ];

  const MONTHS_DATA = [
    {
      id: 1,
      name: "January",
      note: "Southern Hemisphere summer & warm winter sun picks",
      top: [
        /* ---------- JANUARY (30) ---------- */
        {
          month: "January",
          title: "Phuket, Thailand",
          description:
            "Tropical beaches, buzzing nightlife, Thai cuisine, and island hopping—perfect for escaping winter chills and enjoying sunshine.",
          bestFor: ["Beach", "Food & Wine", "Summer"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648647/thailand-phuket_st9eg1.webp",
        },
        {
          month: "January",
          title: "Zermatt, Switzerland",
          description:
            "Ski down the Matterhorn slopes, enjoy après-ski in alpine lodges, and explore Swiss winter culture in stunning mountain scenery.",
          bestFor: ["Skiing", "Winter", "Luxury"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648863/zermatt_z9z0t6.webp",
        },
        {
          month: "January",
          title: "Serengeti, Tanzania",
          description:
            "Witness wildlife migrations, big cats, and safari drives across vast plains—an unforgettable African adventure during cooler, dry January weather.",
          bestFor: ["Safari", "Wildlife", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648509/serengeti_ointks.jpg",
        },
        {
          month: "January",
          title: "Reykjavik, Iceland",
          description:
            "Chase the Northern Lights, relax in geothermal spas, and explore Icelandic winter landscapes including glaciers and waterfalls.",
          bestFor: ["Winter", "Adventure", "Wellness"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648310/reykjavik_znlsp6.jpg",
        },
        {
          month: "January",
          title: "Maldives",
          description:
            "Crystal-clear lagoons, overwater villas, and luxury honeymoon escapes—January offers perfect weather for romance and relaxation.",
          bestFor: ["Honeymoon", "Beach", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647222/maldives-luxury-resorts_wjjoum.jpg",
        },
        {
          month: "January",
          title: "Dubai, UAE",
          description:
            "Sunny skies, luxury shopping, desert safaris, and extravagant hotels make Dubai an ideal winter sun escape.",
          bestFor: ["Luxury", "City", "Adventure"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646385/dubai_geckji.webp",
        },
        {
          month: "January",
          title: "Antarctic Peninsula",
          description:
            "Take a once-in-a-lifetime cruise through icy waters, spotting penguins, seals, and whales in untouched landscapes.",
          bestFor: ["Cruise", "Wildlife", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646179/antarctica_uzawpp.webp",
        },
        {
          month: "January",
          title: "Kyoto, Japan",
          description:
            "Enjoy peaceful temples, tea ceremonies, and winter gardens in Japan’s cultural capital during quiet January days.",
          bestFor: ["Culture", "History", "Wellness"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646827/kyoto_ahvfoo.jpg",
        },
        {
          month: "January",
          title: "Goa, India",
          description:
            "Vibrant festivals, golden beaches, yoga retreats, and colorful markets attract sun-seekers escaping colder regions.",
          bestFor: ["Festival", "Beach", "Wellness"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646476/goa_ofz1vn.webp",
        },
        {
          month: "January",
          title: "Banff, Canada",
          description:
            "Snow-capped peaks, skiing, ice walks, and cozy log cabins define Banff’s magical winter wonderland.",
          bestFor: ["Skiing", "Winter", "Nature"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646204/banff_dqmow3.jpg",
        },
        {
          month: "January",
          title: "Buenos Aires, Argentina",
          description:
            "Summer in the southern hemisphere brings tango shows, local cuisine, and lively neighborhoods to explore.",
          bestFor: ["City", "Summer", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646242/buenosaires_tniwei.webp",
        },
        {
          month: "January",
          title: "Petra, Jordan",
          description:
            "Wander through ancient rock-carved architecture, desert canyons, and rich Middle Eastern history.",
          bestFor: ["History", "Adventure", "Culture"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648227/petra_stsc1m.jpg",
        },
        {
          month: "January",
          title: "Queenstown, New Zealand",
          description:
            "Thrill-seekers flock here for bungee jumping, hiking trails, and breathtaking lake views in warm summer weather.",
          bestFor: ["Adventure", "Hiking", "Summer"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648311/queenstown_b9fzub.webp",
        },
        {
          month: "January",
          title: "Vienna, Austria",
          description:
            "Elegant winter balls, historic architecture, and warm coffee houses offer a refined European cultural experience.",
          bestFor: ["Culture", "Winter", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648687/vienna_yquqv9.jpg",
        },
        {
          month: "January",
          title: "Sri Lanka",
          description:
            "Golden beaches, ancient temples, tea plantations, and safari parks make Sri Lanka a diverse January escape.",
          bestFor: ["Beach", "Safari", "History"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648535/srilanka_fa3yzj.jpg",
        },
        {
          month: "January",
          title: "Lapland, Finland",
          description:
            "Snowy forests, reindeer rides, husky sledding, and the magical Northern Lights create a fairytale winter escape.",
          bestFor: ["Winter", "Festival", "Adventure"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646861/lapland_bbewsr.webp",
        },
        {
          month: "January",
          title: "Santorini, Greece",
          description:
            "Quieter winter months make Santorini perfect for romantic cliffside sunsets and exploring historic villages without crowds.",
          bestFor: ["Honeymoon", "History", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648421/santorini_sryzrq.jpg",
        },
        {
          month: "January",
          title: "Cape Town, South Africa",
          description:
            "January’s summer sunshine makes Cape Town ideal for beaches, hiking Table Mountain, and local wine tours.",
          bestFor: ["Hiking", "Beach", "Food & Wine"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646257/capetown_zb4nhs.webp",
        },
        {
          month: "January",
          title: "Caribbean Cruise",
          description:
            "Sail through tropical islands, enjoy onboard luxury, and stop for snorkeling and cultural tours along the way.",
          bestFor: ["Cruise", "Luxury", "Summer"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646259/caribbean-cruise_njvrey.webp",
        },
        {
          month: "January",
          title: "Prague, Czech Republic",
          description:
            "Snow-dusted castles, Gothic architecture, and cozy winter pubs define Prague’s January charm.",
          bestFor: ["Winter", "History", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648262/prague_usgcjq.webp",
        },
        {
          month: "January",
          title: "Bali, Indonesia",
          description:
            "January’s lush landscapes invite yoga retreats, rice terrace hikes, and cultural festivals.",
          bestFor: ["Wellness", "Hiking", "Festival"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645850/bali_vivapm.jpg",
        },
        {
          month: "January",
          title: "Venice, Italy",
          description:
            "Winter fog and quiet canals make Venice mysterious and romantic before Carnival season begins.",
          bestFor: ["History", "Culture", "Honeymoon"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648689/venice_q9tqq6.webp",
        },
        {
          month: "January",
          title: "Patagonia, Chile",
          description:
            "Trek glaciers, hike wild landscapes, and witness pristine nature in its summer peak season.",
          bestFor: ["Hiking", "Nature", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648165/patagonia_ofiggk.jpg",
        },
        {
          month: "January",
          title: "New Orleans, USA",
          description:
            "January warms up with pre-Mardi Gras festivities, jazz clubs, and Cajun cuisine.",
          bestFor: ["Festival", "Food & Wine", "City"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648007/neworleans_mwoznz.webp",
        },

        {
          month: "January",
          title: "Seychelles",
          description:
            "Idyllic white sands, snorkeling in coral reefs, and secluded resorts create a dream honeymoon destination.",
          bestFor: ["Beach", "Honeymoon", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648555/sychelles_jktsv0.webp",
        },
        {
          month: "January",
          title: "Machu Picchu, Peru",
          description:
            "Trek the Inca Trail in cooler weather to uncover the legendary citadel of the Andes.",
          bestFor: ["History", "Hiking", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647221/machu-picchu_cky3g3.webp",
        },
        {
          month: "January",
          title: "Tromsø, Norway",
          description:
            "Experience Arctic adventures like dog sledding, fjord cruises, and northern light safaris.",
          bestFor: ["Winter", "Cruise", "Adventure"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648674/tromso_w5k79b.webp",
        },
        {
          month: "January",
          title: "Marrakech, Morocco",
          description:
            "Colorful souks, desert excursions, palaces, and January sunshine bring Morocco’s culture alive.",
          bestFor: ["Culture", "History", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/marrakech_tdrdyj.webp",
        },
        {
          month: "January",
          title: "Whistler, Canada",
          description:
            "One of the world’s best ski resorts with snowboarding, luxury lodges, and après-ski fun.",
          bestFor: ["Skiing", "Winter", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648697/whistler_hf0kzu.webp",
        },
        {
          month: "January",
          title: "Tenerife, Canary Islands",
          description:
            "Mild winter sun, volcanic landscapes and Teide National Park — perfect for beach days, hiking volcanic trails, whale watching and family-friendly resorts.",
          bestFor: ["Beach", "Hiking", "Nature", "Winter"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648561/tenerife_t6nns8.webp",
        },
        {
          month: "January",
          title: "Orlando, Florida, USA",
          description:
            "Theme parks, family resorts and warm winter days — ideal for families seeking fun-filled holidays with kids.",
          bestFor: ["Family", "Shopping", "Entertainment"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648114/orlando_qmf8x6.webp",
        },
        {
          month: "January",
          title: "Bangkok, Thailand",
          description:
            "Vibrant nightlife, bustling shopping malls and floating markets — a dynamic urban start to the year.",
          bestFor: ["Nightlife", "Shopping", "City"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648639/thailand-elephants_hcctgp.webp",
        },
        {
          month: "January",
          title: "Cancún, Mexico",
          description:
            "Warm beaches by day, buzzing clubs by night — a nightlife hotspot with romantic beachfront stays.",
          bestFor: ["Nightlife", "Romance", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646244/cancun_a7lmrp.webp",
        },
        {
          month: "January",
          title: "Dubai, UAE (Shopping Festival)",
          description:
            "World-famous shopping festival, luxury malls and desert excursions — January is Dubai’s shopping season.",
          bestFor: ["Shopping", "Luxury", "City"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646385/dubai_geckji.webp",
        },
        {
          month: "January",
          title: "Los Angeles, USA",
          description:
            "Mild weather for a winter road trip — explore beaches, Hollywood and Pacific Coast drives.",
          bestFor: ["Road trip", "Shopping", "Family"],
          travelerType: "Group",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646921/los-angeles_di2zpp.webp",
        },
        {
          month: "January",
          title: "Lisbon, Portugal",
          description:
            "Mild winter, ocean views and excellent internet — a great city for remote work and cultural discovery.",
          bestFor: ["Remote Work", "Culture", "Food & Wine"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646890/lisbon-remote_oo66ty.webp",
        },
        {
          month: "January",
          title: "Miami, Florida, USA",
          description:
            "Warm weather, art deco vibes, beach clubs and a thriving nightlife scene — a winter escape for fun lovers.",
          bestFor: ["Nightlife", "Romance", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647868/miami_judmrq.webp",
        },
        {
          month: "January",
          title: "Kyoto, Japan (Winter Romance)",
          description:
            "Serene temples, light snow and intimate ryokans — a peaceful and romantic January escape.",
          bestFor: ["Romance", "Culture", "Winter"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646826/kyoto-winter_cziiv2.webp",
        },
        {
          month: "January",
          title: "Cape Verde",
          description:
            "Sunshine, sandy beaches, family resorts and good infrastructure for remote work — a balanced winter getaway.",
          bestFor: ["Family", "Remote Work", "Beach"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646246/cape-verde_blfhnl.webp",
        },
        {
          month: "January",
          title: "San Diego, California, USA",
          description:
            "Sunny skies, family attractions like the zoo, and scenic coastal drives — ideal for a road trip and family fun.",
          bestFor: ["Family", "Road trip", "Nature"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648421/san-diego_aehy2f.webp",
        },
      ],
    },
    {
      id: 2,
      name: "February",
      note: "Carnivals, snow festivals and warm escapes",
      top: [
        {
          month: "February",
          title: "Rio de Janeiro, Brazil",
          description:
            "Carnival energy, golden beaches and samba nightlife — February is vibrant with parades, music and seaside romance.",
          bestFor: ["Festival", "Nightlife", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648361/rio_cykjzo.webp",
        },
        {
          month: "February",
          title: "Sapporo, Japan",
          description:
            "Famous snow and ice sculptures, winter festivals and nearby ski resorts — a top winter experience for families and culture lovers.",
          bestFor: ["Winter", "Festival", "Skiing"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648422/sapporo_r7k07r.webp",
        },
        {
          month: "February",
          title: "New Orleans, USA",
          description:
            "Mardi Gras season brings parades, live jazz, Creole food and a high-energy nightlife scene in historic neighborhoods.",
          bestFor: ["Festival", "Nightlife", "Food & Wine"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647979/new-orleans_cveygi.webp",
        },
        {
          month: "February",
          title: "Tenerife, Canary Islands",
          description:
            "Mild winter sun, volcanic landscapes and family-friendly resorts — easy island escapes with hiking and whale-watching options.",
          bestFor: ["Beach", "Family", "Hiking"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648561/tenerife_t6nns8.webp",
        },
        {
          month: "February",
          title: "Lisbon, Portugal",
          description:
            "Sunny winter days, cafes and fast internet make Lisbon great for remote work plus short city escapes and vibrant nightlife.",
          bestFor: ["Remote Work", "City", "Food & Wine"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646889/lisbon_batgam.webp",
        },
        {
          month: "February",
          title: "Banff, Canada",
          description:
            "Iconic winter mountain scenery, world-class skiing and cozy lodges — perfect for alpine adventures and family ski trips.",
          bestFor: ["Skiing", "Winter", "Nature"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646204/banff_dqmow3.jpg",
        },
        {
          month: "February",
          title: "Kerala, India",
          description:
            "Backwaters, Ayurvedic retreats and cultural experiences — ideal for wellness, gentle trekking and warm-weather winter escapes.",
          bestFor: ["Wellness", "Culture", "Nature"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646804/kerala_o4fsae.webp",
        },
        {
          month: "February",
          title: "Buenos Aires, Argentina",
          description:
            "Summer season with tango, late-night dining and vibrant neighbourhoods — lively nightlife and cultural touring in warm weather.",
          bestFor: ["Nightlife", "Culture", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646242/buenos-aires_zvlnvn.webp",
        },
        {
          month: "February",
          title: "Cape Town, South Africa",
          description:
            "Sunny days for hikes up Table Mountain, coastal drives and world-class vineyards — great for families and adventure seekers.",
          bestFor: ["Hiking", "Food & Wine", "Nature"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646257/capetown_zb4nhs.webp",
        },
        {
          month: "February",
          title: "Queenstown, New Zealand",
          description:
            "Summer adventures—bungee, lake cruises and dramatic hikes—perfect for adrenaline activities and scenic day trips.",
          bestFor: ["Adventure", "Hiking", "Luxury"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648311/queenstown_b9fzub.webp",
        },
        {
          month: "February",
          title: "Maldives",
          description:
            "Stable warm weather, overwater villas and private-island luxury — a classic honeymoon and romance destination in February.",
          bestFor: ["Honeymoon", "Luxury", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647222/maldives-luxury-resorts_wjjoum.jpg",
        },
        {
          month: "February",
          title: "Kyoto, Japan",
          description:
            "Temples, quiet winter gardens and cultural experiences — an atmospheric month for cultural exploration and intimate stays.",
          bestFor: ["Culture", "History", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646827/kyoto_ahvfoo.jpg",
        },
        {
          month: "February",
          title: "Masai Mara, Kenya",
          description:
            "Prime safari conditions with dry plains and excellent wildlife viewing in comfortable temperatures—perfect for wildlife safaris.",
          bestFor: ["Safari", "Wildlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647791/masai-mara_mhqbki.webp",
        },
        {
          month: "February",
          title: "Dubai, UAE",
          description:
            "Cooler weather, epic shopping and family attractions — a winter sun city-break with luxury hotels and desert excursions.",
          bestFor: ["Shopping", "Luxury", "Family"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646382/dubai_j8xryu.jpg",
        },
        {
          month: "February",
          title: "Reykjavik, Iceland",
          description:
            "A winter base for Northern Lights hunts, hot springs and glacier tours—adventurous and romantic in equal measure.",
          bestFor: ["Winter", "Adventure", "Wellness"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648361/reykjavik_b2ij5c.webp",
        },
        {
          month: "February",
          title: "Niseko, Japan",
          description:
            "World-class powder skiing, cozy ryokans and vibrant resort nightlife—one of Asia’s best winter-sport destinations.",
          bestFor: ["Skiing", "Winter", "Wellness"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648033/niseko_zkcr5c.webp",
        },
        {
          month: "February",
          title: "Cartagena, Colombia",
          description:
            "Colorful colonial streets, warm weather and romantic plazas—great for couples seeking culture and coastal relaxation.",
          bestFor: ["Romance", "Culture", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646272/cartagena_zndcbz.webp",
        },
        {
          month: "February",
          title: "Amalfi Coast, Italy",
          description:
            "Sword cliffs, seaside villages and quiet off-season charm—ideal for romantic escapes and coastal drives in mild weather.",
          bestFor: ["Romance", "Food & Wine", "Road trip"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646163/amalfi_flixfc.webp",
        },
        {
          month: "February",
          title: "Marrakech, Morocco",
          description:
            "Historic medinas, riads and warm winter days—good for shopping, culture and short luxury escapes from colder climates.",
          bestFor: ["Culture", "Shopping", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/marrakech_tdrdyj.webp",
        },
        {
          month: "February",
          title: "Galápagos Islands, Ecuador",
          description:
            "Wildlife cruises, unique endemic species and year-round exploration—February offers abundant marine life and clear waters.",
          bestFor: ["Wildlife", "Cruise", "Nature"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646448/galapagos_xeksmf.webp",
        },
        {
          month: "February",
          title: "Madeira, Portugal",
          description:
            "Lush year-round island with levada walks, mild climate and good connectivity—popular with remote workers and nature lovers.",
          bestFor: ["Remote Work", "Hiking", "Wellness"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647222/madeira_jfwodm.webp",
        },
        {
          month: "February",
          title: "Seoul, South Korea",
          description:
            "Vibrant city life with late-night culture, shopping districts and culinary discoveries—great for urban explorers and shoppers.",
          bestFor: ["Shopping", "Nightlife", "Food & Wine"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648509/seoul_itax2i.webp",
        },
        {
          month: "February",
          title: "Austin, Texas, USA",
          description:
            "Live music venues, thriving food scene and energetic nightlife—an eclectic choice for groups and music lovers.",
          bestFor: ["Nightlife", "Music", "Food & Wine"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645851/austin_o9q4ly.webp",
        },
        {
          month: "February",
          title: "Singapore",
          description:
            "Modern city with family attractions, rooftop dining and major shopping avenues—warm-weather urban comfort and convenience.",
          bestFor: ["Family", "Shopping", "City"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648512/singapore_ja0zzz.webp",
        },
        {
          month: "February",
          title: "Zanzibar, Tanzania",
          description:
            "Spice-island beaches, Swahili culture and romantic beachfront lodges—a quieter, warm-season honeymoon alternative.",
          bestFor: ["Romance", "Beach", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648800/zanzibar_zitzrr.webp",
        },
        {
          month: "February",
          title: "Musandam Fjords, Oman",
          description:
            "Dhow cruises, dramatic cliffs and snorkeling—a short luxury cruise escape from regional hubs.",
          bestFor: ["Cruise", "Adventure", "Nature"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647942/musandam_ehfdea.webp",
        },
        {
          month: "February",
          title: "Madrid, Spain",
          description:
            "Cultural museums, tapas culture and designer shopping — pleasant winter city breaks with lively nightlife.",
          bestFor: ["Shopping", "Culture", "Nightlife"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647221/madrid_hqrtim.webp",
        },
        {
          month: "February",
          title: "Pacific Coast (California) Road Trip, USA",
          description:
            "Scenic coastal drives, surf towns and family-friendly stops — ideal for a mild winter road trip adventure.",
          bestFor: ["Road trip", "Family", "Nature"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648168/pch-roadtrip_fyhlct.webp",
        },
        {
          month: "February",
          title: "Mauritius",
          description:
            "Lagoon beaches, coral reefs and upscale resorts—a warm tropical spot for couples and families alike.",
          bestFor: ["Beach", "Romance", "Luxury"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647794/mauritius_inzszl.webp",
        },
        {
          month: "February",
          title: "Fiji",
          description:
            "Tropical islands, private resorts and cultural village visits—excellent for romantic stays and wellness retreats.",
          bestFor: ["Honeymoon", "Wellness", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646423/fiji_gbme1l.webp",
        },
        {
          month: "February",
          title: "Orlando, Florida, USA",
          description:
            "Theme parks, family resorts and warm winter days—perfect for families seeking a fun January–February break.",
          bestFor: ["Family", "Entertainment", "Shopping"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648114/orlando_qmf8x6.webp",
        },
        {
          month: "February",
          title: "Miami, Florida, USA",
          description:
            "Vibrant nightlife, beachfront bars and romantic rooftop dinners—ideal for couples and party-goers in winter months.",
          bestFor: ["Nightlife", "Romance", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647868/miami_judmrq.webp",
        },
        {
          month: "February",
          title: "Milan, Italy",
          description:
            "High-end boutiques, designer showrooms and winter fashion events — February is excellent for serious shoppers.",
          bestFor: ["Shopping", "Fashion", "City"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647903/milan_gysqan.webp",
        },
        {
          month: "February",
          title: "Pacific Coast Highway, USA (PCH Road Trip)",
          description:
            "Iconic coastal route with beach towns, redwood forests and scenic viewpoints—perfect for a winter road trip itinerary.",
          bestFor: ["Road trip", "Nature", "Family"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648180/pch_ijtpyl.webp",
        },
        {
          month: "February",
          title: "Chiang Mai, Thailand",
          description:
            "Affordable living, strong digital-nomad community and reliable cafes—an excellent February base for remote work and culture.",
          bestFor: ["Remote Work", "Culture", "Wellness"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648623/thailand-chiang-mai_b7o8cd.webp",
        },
        {
          month: "February",
          title: "Algarve, Portugal",
          description:
            "Family-friendly beaches, coastal road routes and mild winter weather—great for a relaxed family break and scenic drives.",
          bestFor: ["Family", "Road trip", "Beach"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646158/algarve_sx1pm9.webp",
        },
        {
          month: "February",
          title: "Sydney, Australia",
          description:
            "Summer festivals, iconic beaches and outdoor dining — Sydney is vibrant with sunshine and coastal energy in February.",
          bestFor: ["Summer", "Beach", "City"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646379/sydney-bali-flight_znasyz.webp",
        },
        {
          month: "February",
          title: "Auckland & Bay of Islands, New Zealand",
          description:
            "Warm summer days, sailing trips and wine regions — northern New Zealand shines in February for adventure and relaxation.",
          bestFor: ["Summer", "Adventure", "Nature"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647980/new-zealand_cgowbc.webp",
        },
        {
          month: "February",
          title: "Cape Winelands, South Africa",
          description:
            "Vineyards in full bloom, summer wine festivals and mountain views — South Africa’s Cape Winelands is perfect for February travel.",
          bestFor: ["Summer", "Food & Wine", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648535/south-africa_kuttwb.webp",
        },

        {
          month: "February",
          title: "Berlin, Germany",
          description:
            "World-class nightlife, underground clubs and year-round cultural events—appeals to night owls and music lovers.",
          bestFor: ["Nightlife", "Culture", "Food & Wine"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646222/berlin_cuy0fg.webp",
        },
        {
          month: "February",
          title: "Valletta, Malta",
          description:
            "Compact, historic city with good connectivity and mild winter days—popular for short remote-work stays and island exploration.",
          bestFor: ["Remote Work", "History", "Family"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648672/valletta_ubrz0f.webp",
        },
        {
          month: "February",
          title: "Lake Como, Italy",
          description:
            "Romantic lakeside villas and intimate winter charm—a refined choice for couples seeking quiet romance and scenic walks.",
          bestFor: ["Romance", "Luxury", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646858/lake-como_l6m6v8.webp",
        },
        {
          month: "February",
          title: "Tokyo, Japan (Shopping & Nightlife)",
          description:
            "Fashion districts, electronics markets and late-night izakayas—Tokyo serves both serious shoppers and vibrant nightlife seekers.",
          bestFor: ["Shopping", "Nightlife", "City"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648663/tokyo_m0koff.webp",
        },
      ],
    },
    {
      id: 3,
      name: "March",
      note: "Spring blooms and shoulder-season escapes",
      top: [
        {
          month: "March",
          title: "Kruger National Park, South Africa",
          description:
            "Late summer game drives with excellent wildlife sightings and luxury lodges — perfect for safari adventures in March.",
          bestFor: ["Safari", "Wildlife", "Luxury"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646825/kruger_qy4iik.webp",
        },
        {
          month: "March",
          title: "Patagonia, Chile & Argentina",
          description:
            "Clear skies for hiking, summer landscapes and wildlife — prime time for Patagonian road trips and expeditions.",
          bestFor: ["Road Trip", "Summer", "Wildlife"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648165/patagonia_ofiggk.jpg",
        },
        {
          month: "March",
          title: "Lapland, Finland",
          description:
            "Snowy wonderland with reindeer safaris, skiing and Northern Lights tours — ideal for winter magic.",
          bestFor: ["Winter", "Skiing", "Family"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646861/lapland_bbewsr.webp",
        },
        {
          month: "March",
          title: "Hokkaido, Japan",
          description:
            "Snow festivals linger, ski resorts thrive and seafood season peaks — Japan’s winter paradise.",
          bestFor: ["Winter", "Skiing", "Food & Wine"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646503/hokkaido_zrsaav.webp",
        },
        {
          month: "March",
          title: "Seychelles",
          description:
            "Tropical islands with calm seas — perfect for honeymooners, wellness retreats and barefoot luxury.",
          bestFor: ["Honeymoon", "Wellness", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648555/sychelles_jktsv0.webp",
        },
        {
          month: "March",
          title: "Whistler, Canada",
          description:
            "Extended ski season with snowboarding, après-ski nightlife and family-friendly mountain villages.",
          bestFor: ["Skiing", "Winter", "Nightlife"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648697/whistler_hf0kzu.webp",
        },
        {
          month: "March",
          title: "Serengeti, Tanzania",
          description:
            "Calving season brings predator action — March safaris show Africa’s wildlife spectacles at their best.",
          bestFor: ["Safari", "Wildlife", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648509/serengeti_ointks.jpg",
        },
        {
          month: "March",
          title: "Canary Islands, Spain",
          description:
            "Mild temperatures for hiking, wellness retreats and road trips through volcanic landscapes.",
          bestFor: ["Road Trip", "Wellness", "Family"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648561/tenerife_t6nns8.webp",
        },
        {
          month: "March",
          title: "Phuket, Thailand",
          description:
            "Dry-season beaches and nightlife hotspots — also a favorite for couples on honeymoon getaways.",
          bestFor: ["Honeymoon", "Nightlife", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648647/thailand-phuket_st9eg1.webp",
        },
        {
          month: "March",
          title: "Norwegian Fjords",
          description:
            "Cruises start running through dramatic fjords, with snowy peaks still lining the waterways.",
          bestFor: ["Cruise", "Winter", "Nature"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648070/norway-fjords_xhffdt.webp",
        },
        {
          month: "March",
          title: "Maui, Hawaii, USA",
          description:
            "Whale-watching, scenic road trips on the Hana Highway and beach days — a perfect March family escape.",
          bestFor: ["Road Trip", "Family", "Wildlife"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647791/maui_y0vwzf.webp",
        },
        {
          month: "March",
          title: "Queenstown, New Zealand",
          description:
            "Late summer adventure hub — bungee, hiking and wine tasting under perfect weather.",
          bestFor: ["Summer", "Adventure", "Remote Work"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648309/queenstown_xkhqnl.jpg",
        },
        {
          month: "March",
          title: "Dubai, UAE",
          description:
            "Luxury shopping, desert road trips and nightlife — a mix of modern glam and family fun.",
          bestFor: ["Shopping", "Nightlife", "Road Trip"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646382/dubai_j8xryu.jpg",
        },
        {
          month: "March",
          title: "Maldives",
          description:
            "Dry-season romance, snorkeling and luxury villas — a honeymooner’s paradise in March.",
          bestFor: ["Honeymoon", "Wellness", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647753/maldives-luxury-resorts_y8m3er.webp",
        },
        {
          month: "March",
          title: "Iceland",
          description:
            "Aurora season continues, with winter landscapes, waterfalls and geothermal wellness escapes.",
          bestFor: ["Winter", "Road Trip", "Wellness"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648361/reykjavik_b2ij5c.webp",
        },
        {
          month: "March",
          title: "Bali, Indonesia",
          description:
            "A hotspot for digital nomads — coworking villas, yoga retreats and cultural festivals thrive in March.",
          bestFor: ["Remote Work", "Wellness", "Culture"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645850/bali_vivapm.jpg",
        },
        {
          month: "March",
          title: "Swiss Alps, Switzerland",
          description:
            "Spring skiing with alpine wellness resorts — great snow and luxury chalets remain open into March.",
          bestFor: ["Skiing", "Wellness", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648549/swiss-alps-summer_ulsqnt.jpg",
        },
        {
          month: "March",
          title: "Galápagos Islands, Ecuador",
          description:
            "March is warm and wet, but wildlife thrives — a top choice for small-ship cruises.",
          bestFor: ["Cruise", "Wildlife", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646448/galapagos_xeksmf.webp",
        },
        {
          month: "March",
          title: "Cape Town, South Africa",
          description:
            "Late summer in the Cape means beaches, wine harvests and stunning family-friendly hikes.",
          bestFor: ["Summer", "Family", "Food & Wine"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646257/capetown_zb4nhs.webp",
        },
        {
          month: "March",
          title: "Buenos Aires, Argentina",
          description:
            "Warm summer evenings with tango, nightlife and romantic dining — ideal for couples exploring South America.",
          bestFor: ["Nightlife", "Summer", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646241/buenosaires_eqa9aq.jpg",
        },

        {
          month: "March",
          title: "Kyoto, Japan (cherry blossoms)",
          description:
            "Early sakura blooms, temples and refined culinary culture—iconic springtime experience.",
          bestFor: ["Culture", "Nature", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646828/kyoto_sklj9y.webp",
        },
        {
          month: "March",
          title: "Marrakesh, Morocco",
          description:
            "Markets, riads and fragrant cuisine—mild spring weather for cultural exploration.",
          bestFor: ["Culture", "Shopping", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/marrakech_esdxwl.jpg",
        },
        {
          month: "March",
          title: "Seville, Spain",
          description:
            "Spring festivals, orange blossom scent and tapas culture—great time for lively city breaks.",
          bestFor: ["Festival", "Culture", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648512/seville_qnpdl3.webp",
        },
        {
          month: "March",
          title: "Lisbon, Portugal",
          description:
            "Comfortable weather, coastal day-trips and seafood dining—walkable city with scenic viewpoints.",
          bestFor: ["City", "Food & Wine", "Remote Work"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646889/lisbon_batgam.webp",
        },
        {
          month: "March",
          title: "Cappadocia, Turkey",
          description:
            "Hot-air balloons, lunar landscapes and boutique cave hotels—romantic and adventurous spring option.",
          bestFor: ["Adventure", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646257/cappadocia_wixkvr.webp",
        },
        {
          month: "March",
          title: "Nepal (Kathmandu & trekking)",
          description:
            "Start of trekking season, clear mountain views and cultural sites—gateway to Himalayan adventures.",
          bestFor: ["Trekking", "Adventure", "Culture"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646783/Kathmandu_rjxu1k.webp",
        },
        {
          month: "March",
          title: "Jordan (Petra & Wadi Rum)",
          description:
            "Comfortable spring weather for desert exploration, Petra and scenic Wadi Rum camps.",
          bestFor: ["Culture", "Adventure", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646771/jordan_egbwp3.webp",
        },
        {
          month: "March",
          title: "Canary Islands (La Palma)",
          description:
            "Spring hiking, volcanic trails and quiet coastal towns—great for outdoor nature in mild weather.",
          bestFor: ["Nature", "Hiking", "Relaxation"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646242/canary-islands_eevcto.webp",
        },
        {
          month: "March",
          title: "Luxor & Aswan, Egypt",
          description:
            "Pleasant temperatures for temples and Nile cruises—heritage-rich, comfortable sightseeing.",
          bestFor: ["Culture", "History", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646403/egypt-luxor_mgygkh.webp",
        },
        {
          month: "March",
          title: "Nepal (Pokhara region)",
          description:
            "Lakeside lodges, trekking starts and Himalayan views—tranquil and adventure-ready.",
          bestFor: ["Trekking", "Nature", "Adventure"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648258/Pokhara_b2kq5z.webp",
        },
        {
          month: "March",
          title: "Kyoto (early blossom spots)",
          description:
            "Quieter temples and seasonal food—classic cultural spring experience with fewer crowds early March.",
          bestFor: ["Culture", "Food & Wine", "Romance"],
          travelerType: "Couples",
          image:
            "/https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646828/kyoto_sklj9y.webp",
        },
        {
          month: "March",
          title: "Mendoza, Argentina (late summer)",
          description:
            "Harvest preparation, vineyards and Andes views—wine-focused trips with outdoor leisure.",
          bestFor: ["Food & Wine", "Nature", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647793/mendoza_uhl03g.webp",
        },
        {
          month: "March",
          title: "Galapagos Islands",
          description:
            "Unique wildlife encounters and guided cruises—must-visit for nature and conservation-minded travelers.",
          bestFor: ["Wildlife", "Nature", "Cruise"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646448/galapagos_xeksmf.webp",
        },
        {
          month: "March",
          title: "Istanbul, Turkey",
          description:
            "Mild spring weather, Bosphorus cruises and historic sites—blend of culture and cuisine.",
          bestFor: ["Culture", "City", "Food & Wine"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646755/istanbul_y315cq.webp",
        },
        {
          month: "March",
          title: "Lisbon Coast (Cascais)",
          description:
            "Coastal trails, surf and seaside dining—quick escape from the city with relaxed beaches.",
          bestFor: ["Beach", "City", "Food & Wine"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646273/cascais_d1h07v.webp",
        },
        {
          month: "March",
          title: "Nepal (Annapurna base)",
          description:
            "Early trekking season, mountain lodges and local culture—accessible Himalayan routes for active travelers.",
          bestFor: ["Trekking", "Adventure", "Nature"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646179/annapurna_jyoxay.webp",
        },
        {
          month: "March",
          title: "Seville (Semana Santa prep)",
          description:
            "Cultural processions and springtime tapas—rich traditions before peak festival season.",
          bestFor: ["Culture", "Food & Wine", "Festival"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648512/seville_qnpdl3.webp",
        },
        {
          month: "March",
          title: "Lima, Peru",
          description:
            "Culinary capital with coastal breezes—excellent food scene and cultural day trips.",
          bestFor: ["Food & Wine", "City", "Culture"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646859/lima_xict97.webp",
        },
        {
          month: "March",
          title: "Jordan (Dead Sea)",
          description:
            "Relaxing mineral-rich waters and spa escapes—gentle climate for relaxation and wellness.",
          bestFor: ["Wellness", "Relaxation", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646342/dead-sea_scldjo.webp",
        },
        {
          month: "March",
          title: "Madeira, Portugal",
          description:
            "Spring flowers, levada walks and dramatic cliffs—compact island for active nature escapes.",
          bestFor: ["Hiking", "Nature", "Wellness"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647222/madeira_jfwodm.webp",
        },
        {
          month: "March",
          title: "Mexico City, Mexico",
          description:
            "World-class museums, markets and vibrant gastronomy—urban cultural hub with great neighborhoods.",
          bestFor: ["Culture", "Food & Wine", "City"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647869/mexico-city_pydwt5.webp",
        },
        {
          month: "March",
          title: "Azores, Portugal",
          description:
            "Whale watching, crater lakes and green landscapes—remote island nature escapes in spring.",
          bestFor: ["Nature", "Adventure", "Whale Watching"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646193/azores_ntpqxf.webp",
        },
        {
          month: "March",
          title: "Hokkaido, Japan (early season)",
          description:
            "Cooler spring air, seafood and early flower fields—less crowded pockets of northern Japan.",
          bestFor: ["Nature", "Food & Wine", "Adventure"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646503/hokkaido_zrsaav.webp",
        },
        {
          month: "March",
          title: "Peru (Colca Canyon)",
          description:
            "Andean landscapes, condor viewing and cultural villages—adventurous trekking less crowded than other trails.",
          bestFor: ["Adventure", "Nature", "Culture"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646299/colca-canyon_g46q5s.webp",
        },
        {
          month: "March",
          title: "Morocco (Essaouira)",
          description:
            "Wind-swept beaches, coastal seafood and artistic villages—calmer alternative to Marrakech.",
          bestFor: ["Beach", "Culture", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646403/essaouira_mdyjdd.jpg",
        },
        {
          month: "March",
          title: "Nepal (Langtang Valley)",
          description:
            "Accessible trekking, Himalayan culture and dramatic vistas—spring clarity and moderate trails.",
          bestFor: ["Trekking", "Nature", "Adventure"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646857/langtang_uqw1vz.webp",
        },
      ],
    },
    {
      id: 4,
      name: "April",
      note: "Tulips, spring festivals, early Europe shoulder season",
      top: [
        {
          title: "Amsterdam, Netherlands",
          description:
            "Tulips in bloom, canal cruises and spring charm — one of Europe’s best April escapes.",
          bestFor: ["Culture", "Festival", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645843/amsterdam_n5w7hm.webp",
        },
        {
          title: "Paris, France",
          description:
            "Spring cafés, museums and cherry blossoms along the Seine — the city of romance shines.",
          bestFor: ["Culture", "Romance", "Food & Wine"],
          travelerType: "Couples",
          image: "/images/paris-tower.webp",
        },
        {
          title: "Keukenhof Gardens, Netherlands",
          description:
            "World’s largest flower garden with millions of tulips — peak bloom season in April.",
          bestFor: ["Festival", "Nature", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646801/keukenhof_hkoc2w.webp",
        },

        {
          month: "April",
          title: "Amalfi Coast, Italy",
          description:
            "Cliffside coastal drives, lemon groves and quiet spring towns — ideal for a scenic road trip and romantic stays before high season.",
          bestFor: ["Road Trip", "Romance", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645845/amalfi_unhr9v.webp",
        },
        {
          month: "April",
          title: "Douro Valley, Portugal",
          description:
            "Winding river roads, vineyard villas and wine tasting tours — a calm April road trip for food and wine lovers.",
          bestFor: ["Road Trip", "Food & Wine", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646380/douro-april_fxdtsl.webp",
        },
        {
          month: "April",
          title: "Pacific Coast Highway, USA",
          description:
            "Early-spring coastal drive with dramatic viewpoints, seaside towns and family stops — milder weather and fewer crowds in April.",
          bestFor: ["Road Trip", "Scenic", "Family"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648168/pch-roadtrip_fyhlct.webp",
        },
        {
          month: "April",
          title: "Norwegian Fjords (cruise)",
          description:
            "Spring cruises return to the fjords — dramatic scenery, waterfalls and shoulder-season calm before the summer crowds arrive.",
          bestFor: ["Cruise", "Hiking", "Nature"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648041/norway-fjords-april_ltms0v.webp",
        },
        {
          month: "April",
          title: "Dalmatian Coast (Croatia) — island cruise",
          description:
            "Off-season island-hopping, medieval towns and quieter harbours — April is perfect for early-season coastal cruises.",
          bestFor: ["Cruise", "Beach", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646343/dalmatian-cruise_a5gphm.webp",
        },
        {
          month: "April",
          title: "Madeira, Portugal",
          description:
            "Steep coastal trails, levada hikes and a growing digital-nomad community — ideal for hiking and remote-work stays in April.",
          bestFor: ["Hiking", "Remote Work", "Wellness"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647222/madeira_jfwodm.webp",
        },
        {
          month: "April",
          title: "Azores (São Miguel)",
          description:
            "Green volcanic scenery, crater-lake hikes and relaxed island life — excellent for hiking and remote-work breakouts in spring.",
          bestFor: ["Hiking", "Remote Work", "Nature"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646192/azores-april_icalj5.webp",
        },
        {
          month: "April",
          title: "Scottish Highlands",
          description:
            "Wild coastal vistas, heritage roads and spring wildflowers — a dramatic hiking-and-road-trip combo with fewer visitors in April.",
          bestFor: ["Hiking", "Road Trip", "Nature"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648425/scotland-highlands_nx24ad.webp",
        },
        {
          month: "April",
          title: "Tenerife, Canary Islands",
          description:
            "Mild winter-to-spring climate, volcanic hikes and family beaches — summer-like weather without high-season crowds.",
          bestFor: ["Summer", "Beach", "Hiking"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648561/tenerife_t6nns8.webp",
        },
        {
          month: "April",
          title: "Corsica, France",
          description:
            "Island trails, coastal drives and refined seaside towns — superb for combined hiking, luxury stays and off-season road trips.",
          bestFor: ["Hiking", "Road Trip", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646313/corsica-april_fj0esr.webp",
        },
        {
          month: "April",
          title: "Okavango Delta, Botswana",
          description:
            "Early dry-season safari with good wildlife concentrations near waterways — excellent game viewing and luxury camps in April/May.",
          bestFor: ["Safari", "Wildlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648072/okavango-april_lzsfih.webp",
        },
        {
          month: "April",
          title: "Kruger National Park, South Africa",
          description:
            "Warm days and comfortable game drives—Kruger is a strong April safari pick with family and guided options.",
          bestFor: ["Safari", "Wildlife", "Family"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646825/kruger_qy4iik.webp",
        },
        {
          month: "April",
          title: "South Luangwa, Zambia",
          description:
            "Rich wildlife viewing in tents and lodges—April marks the start of great safari windows in parts of southern Africa.",
          bestFor: ["Safari", "Wildlife", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648538/south-luangwa_wlpyfi.webp",
        },
        {
          month: "April",
          title: "Golden Circle / Reykjavik, Iceland",
          description:
            "Late-winter landscapes, hot springs and geothermal wellness — a great time for fewer crowds and outdoor spas.",
          bestFor: ["Winter", "Wellness", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646526/iceland-april_ow7o9q.webp",
        },
        {
          month: "April",
          title: "Lapland, Finland",
          description:
            "Final weeks of winter magic, snow activities and aurora possibilities — family-friendly winter adventures into early April.",
          bestFor: ["Winter", "Northern Lights", "Family"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646861/lapland_bbewsr.webp",
        },
        {
          month: "April",
          title: "Maldives",
          description:
            "Clear seas, calm weather and private overwater villas — April is still excellent for honeymooners seeking luxury and privacy.",
          bestFor: ["Honeymoon", "Luxury", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647754/maldives_qsxcgk.webp",
        },
        {
          month: "April",
          title: "Seychelles",
          description:
            "Idyllic private-island resorts, calm beaches and exclusive escapes — a refined honeymoon or luxury beach choice in April.",
          bestFor: ["Honeymoon", "Luxury", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648555/sychelles_jktsv0.webp",
        },
        {
          month: "April",
          title: "Dubai, UAE",
          description:
            "Warm temperatures, high-end hotels and luxury shopping — spring is ideal for sun-and-luxury city breaks before summer heat peaks.",
          bestFor: ["Luxury", "City", "Remote Work"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646385/dubai_geckji.webp",
        },
        {
          month: "April",
          title: "French Riviera (Nice & Cannes)",
          description:
            "Early-season seaside glamour, boutique hotels and coastal drives — a luxury and romantic choice before summer crowds arrive.",
          bestFor: ["Luxury", "Road Trip", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646448/french-riviera_abyncc.webp",
        },
        {
          month: "April",
          title: "Puglia, Italy",
          description:
            "Charming coastal roads, whitewashed towns and seaside villas — quiet April road-trip routes with excellent local food.",
          bestFor: ["Road Trip", "Food & Wine", "Family"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648308/puglia_sueinc.webp",
        },

        {
          title: "Istanbul, Turkey",
          description:
            "Mild weather for markets, Bosphorus cruises and tulip festivals in this cultural crossroad.",
          bestFor: ["Culture", "Shopping", "History"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646755/istanbul_y315cq.webp",
        },
        {
          title: "Madeira, Portugal",
          description:
            "Dramatic coastal cliffs, spring flowers and levada hiking trails — compact nature paradise.",
          bestFor: ["Hiking", "Nature", "Wellness"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647222/madeira_jfwodm.webp",
        },
        {
          title: "Santorini, Greece",
          description:
            "Pre-summer calm, blue domes and luxury villas — ideal for couples before peak crowds.",
          bestFor: ["Romance", "Luxury", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648423/santorini_nkitf1.webp",
        },
        {
          title: "Tuscany, Italy",
          description:
            "Spring landscapes, blossoming hills and vineyard tours — great time for food and wine.",
          bestFor: ["Food & Wine", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648670/tuscany_l4bikm.webp",
        },
        {
          title: "Kyoto, Japan",
          description:
            "Cherry blossoms at their peak, shrines and traditional gardens — magical cultural spring.",
          bestFor: ["Culture", "Festival", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646827/kyoto_ahvfoo.jpg",
        },
        {
          title: "Dubrovnik, Croatia",
          description:
            "Historic city walls, Adriatic views and mild temperatures — quieter before summer rush.",
          bestFor: ["Culture", "Beach", "History"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646402/dubrovnik_arnbdn.webp",
        },
        {
          title: "Seville, Spain",
          description:
            "Semana Santa processions and vibrant spring tapas culture — cultural depth and festivals.",
          bestFor: ["Culture", "Festival", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648512/seville_qnpdl3.webp",
        },
        {
          title: "Rome, Italy",
          description:
            "Eternal city with comfortable spring days for ruins, piazzas and gelato tours.",
          bestFor: ["Culture", "History", "Food & Wine"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648363/rome_quqgh8.webp",
        },
        {
          title: "Azores, Portugal",
          description:
            "Green volcanic islands, whale watching and quiet spring hikes — perfect for nature lovers.",
          bestFor: ["Nature", "Wildlife", "Adventure"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645849/azores_ir7rak.webp",
        },
        {
          title: "Vienna, Austria",
          description:
            "Classical concerts, coffee houses and spring gardens — cultured and refined April trip.",
          bestFor: ["Culture", "Romance", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648687/vienna_rtxovq.webp",
        },
        {
          title: "Berlin, Germany",
          description:
            "Outdoor cafés, street art tours and cultural festivals — modern and historic blend in spring.",
          bestFor: ["Culture", "City", "Nightlife"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646221/berlin-munich-train-scenery_zo0gzk.jpg",
        },
        {
          title: "Funchal, Madeira",
          description:
            "Colorful floats, floral carpets and lively parades — spring flower festival highlight.",
          bestFor: ["Festival", "Culture", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647222/madeira_jfwodm.webp",
        },
        {
          title: "Prague, Czech Republic",
          description:
            "Medieval streets, castle views and Easter markets — springtime charm without crowds.",
          bestFor: ["Culture", "History", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648262/prague_usgcjq.webp",
        },
        {
          title: "Copenhagen, Denmark",
          description:
            "Harbors, bicycles and blossoming parks — stylish Scandinavian spring destination.",
          bestFor: ["Culture", "City", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646308/copenhagen_khzqjy.webp",
        },
        {
          title: "Chefchaouen, Morocco",
          description:
            "Blue-painted mountain town with mild spring weather — photogenic and cultural escape.",
          bestFor: ["Culture", "Adventure", "Photography"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646282/chefchaouen_gpiqtp.webp",
        },
        {
          title: "Seoul, South Korea",
          description:
            "Cherry blossom festivals, temples and vibrant nightlife — spring season buzz.",
          bestFor: ["Festival", "Culture", "Nightlife"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648509/seoul_itax2i.webp",
        },
        {
          title: "Barcelona, Spain",
          description:
            "Gaudí landmarks, tapas culture and beach walks — lively spring Mediterranean city.",
          bestFor: ["Culture", "Food & Wine", "Nightlife"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646206/barcelona_nezo4d.webp",
        },
        {
          title: "Ljubljana, Slovenia",
          description:
            "Fairytale old town, river cafés and blooming parks — perfect underrated spring trip.",
          bestFor: ["Culture", "Romance", "City"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646890/ljubljana_lamejx.jpg",
        },
        {
          title: "Petra, Jordan",
          description:
            "Comfortable April weather to explore ancient Nabatean wonders — one of the world’s best heritage sites.",
          bestFor: ["History", "Culture", "Adventure"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648260/petra_iglrap.webp",
        },
        {
          title: "Lisbon, Portugal",
          description:
            "Tram rides, tiled streets and Atlantic breezes — springtime in Portugal’s capital.",
          bestFor: ["Culture", "Food & Wine", "City"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646890/lisbon-remote_oo66ty.webp",
        },
        {
          title: "Bali, Indonesia",
          description:
            "End of rainy season, green rice terraces and temples — affordable April escape.",
          bestFor: ["Beach", "Wellness", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646202/bali_zmtydi.jpgp",
        },
        {
          title: "Los Angeles, USA",
          description:
            "Sunny weather, Hollywood tours and beaches — April is shoulder season in LA.",
          bestFor: ["City", "Beach", "Shopping"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646921/los-angeles_di2zpp.webp",
        },
        {
          title: "Washington D.C., USA",
          description:
            "Cherry blossom festival along the Tidal Basin — iconic spring in the capital.",
          bestFor: ["Festival", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648696/washington-dc_aprrbn.webp",
        },
        {
          title: "Marrakech, Morocco",
          description:
            "Vibrant souks, gardens and mild weather — springtime magic in North Africa.",
          bestFor: ["Culture", "Shopping", "Food & Wine"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/marrakech_esdxwl.jpg",
        },
        {
          title: "Jerusalem, Israel",
          description:
            "Religious festivals, old city culture and warm spring weather — unique spiritual trip.",
          bestFor: ["Culture", "Festival", "History"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646755/jerusalem_y8gqr1.webp",
        },
        {
          title: "Malta",
          description:
            "Mediterranean fortress towns, beaches and spring sunshine — great value April trip.",
          bestFor: ["Culture", "Beach", "History"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647754/malta_e4d8o6.webp",
        },
        {
          title: "Buenos Aires, Argentina",
          description:
            "Autumn tango, steak culture and vibrant streets — southern hemisphere April city break.",
          bestFor: ["Culture", "Food & Wine", "Nightlife"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646241/buenosaires_eqa9aq.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "May",
      note: "Europe warms up — wine & coastal shoulder season",
      top: [
        {
          title: "Amalfi Coast, Italy",
          description:
            "Lemon groves, coastal drives and cliffside villas — Mediterranean romance at its best.",
          bestFor: ["Romance", "Luxury", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645845/amalfi_unhr9v.webp",
        },
        {
          title: "Provence, France",
          description:
            "Lavender beginnings, vineyards and colorful villages — ideal May countryside escape.",
          bestFor: ["Food & Wine", "Romance", "Nature"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646447/france_kht746.jpg",
        },
        {
          title: "Iceland",
          description:
            "Waterfalls, glaciers and long daylight hours — great time for adventurous road trips.",
          bestFor: ["Adventure", "Road Trip", "Nature"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646706/iceland_dl6rfv.jpg",
        },
        {
          title: "Cinque Terre, Italy",
          description:
            "Colorful seaside villages and cliff trails — perfect for hiking and romance.",
          bestFor: ["Hiking", "Romance", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646295/cinque-terre_srtqgq.jpg",
        },
        {
          title: "Algarve, Portugal",
          description:
            "Golden beaches, golf and seaside towns — family-friendly May sunshine.",
          bestFor: ["Beach", "Family", "Golf"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645847/algarve_gdn50p.webp",
        },
        {
          title: "Santorini, Greece",
          description:
            "Blue domes and sunsets over the caldera — quieter before peak summer crowds.",
          bestFor: ["Romance", "Luxury", "Photography"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648423/santorini_nkitf1.webp",
        },
        {
          title: "Budapest, Hungary",
          description:
            "Thermal baths, Danube cruises and spring festivals — lively city break in May.",
          bestFor: ["Culture", "Festival", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646231/budapest_pw0tda.jpg",
        },
        {
          title: "Croatia (Hvar)",
          description:
            "Island beaches, nightlife and sailing — May is shoulder season luxury.",
          bestFor: ["Beach", "Nightlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646525/hvar_fyeqhw.jpg",
        },
        {
          title: "Scotland Highlands",
          description:
            "Long days, whisky tours and hiking — wild landscapes come alive in May.",
          bestFor: ["Nature", "Hiking", "Road Trip"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648508/scotland_stijst.jpg",
        },
        {
          title: "Dubrovnik, Croatia",
          description:
            "Game of Thrones scenery, Adriatic charm and mild weather — perfect coastal trip.",
          bestFor: ["Culture", "Beach", "History"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646402/dubrovnik_arnbdn.webp",
        },
        {
          title: "Athens, Greece",
          description:
            "Ancient ruins, rooftop bars and Mediterranean cuisine — history and nightlife together.",
          bestFor: ["History", "Culture", "Nightlife"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645847/athens_maxz3b.jpg",
        },
        {
          title: "Vancouver, Canada",
          description:
            "Mountains, sea and festivals — May is perfect for outdoor adventure and city life.",
          bestFor: ["Nature", "City", "Adventure"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648674/vancouver_u0lexw.jpg",
        },
        {
          title: "Maui, Hawaii",
          description:
            "Beaches, waterfalls and scenic drives — quieter before peak summer.",
          bestFor: ["Beach", "Romance", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647791/maui_y0vwzf.webp",
        },
        {
          title: "Barcelona, Spain",
          description:
            "Tapas, Gaudí and lively nightlife — warm Mediterranean in May.",
          bestFor: ["Culture", "Food & Wine", "Nightlife"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646206/barcelona_nezo4d.webp",
        },
        {
          title: "Florence, Italy",
          description:
            "Renaissance art, Tuscan food and warm piazzas — perfect for culture lovers.",
          bestFor: ["Culture", "Food & Wine", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646424/florence_qqixre.jpg",
        },
        {
          title: "Peru (Machu Picchu)",
          description:
            "Dry season starts — trek the Inca Trail with fewer crowds.",
          bestFor: ["Hiking", "Adventure", "History"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647221/machu-picchu_cky3g3.webp",
        },
        {
          title: "Tokyo, Japan",
          description:
            "Warm weather, food culture and spring festivals — a vibrant May city trip.",
          bestFor: ["City", "Food & Wine", "Festival"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648663/tokyo_m0koff.webp",
        },
        {
          title: "Lisbon, Portugal",
          description:
            "Sunny streets, trams and sardine festivals — May is prime cultural season.",
          bestFor: ["Culture", "Festival", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646890/lisbon-june-three_q5fo8u.jpg",
        },
        {
          title: "Marrakech, Morocco",
          description:
            "Vibrant souks, desert escapes and rooftop dining — May is warm and lively.",
          bestFor: ["Culture", "Shopping", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/marrakech_tdrdyj.webp",
        },
        {
          title: "Capri, Italy",
          description:
            "Luxury island, grottos and yachting — elite Mediterranean vibe.",
          bestFor: ["Luxury", "Romance", "Cruise"],
          travelerType: "Luxury",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646260/capri_qulmcp.jpg",
        },
        {
          title: "Bali, Indonesia",
          description:
            "Dry season starts — beaches, temples and wellness retreats in May.",
          bestFor: ["Beach", "Wellness", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645850/bali_vivapm.jpg",
        },
        {
          title: "San Diego, USA",
          description:
            "Beaches, surfing and family attractions — great May destination in California.",
          bestFor: ["Beach", "Family", "Adventure"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648421/san-diego_o1oy8r.jpg",
        },
        {
          title: "Nice, France",
          description:
            "Promenade strolls, beaches and Mediterranean charm — early summer vibe.",
          bestFor: ["Beach", "City", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648032/nice_dttai7.jpg",
        },
        {
          title: "Dubrovnik, Croatia",
          description:
            "Historic town, Adriatic waters and fewer crowds — stunning May destination.",
          bestFor: ["History", "Culture", "Beach"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646402/dubrovnik_arnbdn.webp",
        },
        {
          title: "Crete, Greece",
          description:
            "Mild weather, beaches and Cretan food — great for families and couples alike.",
          bestFor: ["Beach", "Food & Wine", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646328/crete_gtcosn.jpg",
        },
        {
          title: "Kauai, Hawaii",
          description:
            "Dramatic cliffs, waterfalls and tropical hikes — paradise in May.",
          bestFor: ["Adventure", "Nature", "Beach"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646784/kauai_g8h5ab.jpg",
        },
        {
          title: "Tuscany, Italy",
          description:
            "Rolling hills, vineyards and festivals — perfect for spring romance.",
          bestFor: ["Food & Wine", "Romance", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648670/tuscany_l4bikm.webp",
        },
        {
          title: "Mexico City, Mexico",
          description:
            "Food markets, Aztec ruins and culture — vibrant in May.",
          bestFor: ["Culture", "Food & Wine", "History"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647869/mexico-city_pydwt5.webp",
        },
        {
          title: "Vienna, Austria",
          description:
            "Music, coffee houses and spring charm — elegant May escape.",
          bestFor: ["Culture", "Romance", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648687/vienna_rtxovq.webp",
        },
        {
          title: "Sardinia, Italy",
          description:
            "Pristine beaches, Italian cuisine and culture — underrated May island gem.",
          bestFor: ["Beach", "Culture", "Food & Wine"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648424/sardinia_hgeapf.jpg",
        },

        {
          month: "May",
          title: "Zermatt (Matterhorn glacier skiing), Switzerland",
          description:
            "High-altitude glacier runs keep ski options open into late spring — luxury chalets and alpine wellness available in May.",
          bestFor: ["Skiing", "Luxury", "Wellness"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648863/zermatt_z9z0t6.webp",
        },
        {
          month: "May",
          title: "Hintertux Glacier, Austria",
          description:
            "Reliable glacier skiing and training in May — a practical choice for spring ski trips and mountain wellness.",
          bestFor: ["Skiing", "Adventure", "Wellness"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646475/hintertux-may_gvjh5p.jpg",
        },
        {
          month: "May",
          title: "Okavango Delta, Botswana",
          description:
            "Transition into excellent dry-season game viewing — May sees wildlife concentrate near channels for strong safari sightings.",
          bestFor: ["Safari", "Wildlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648072/okavango-april_lzsfih.webp",
        },
        {
          month: "May",
          title: "South Luangwa, Zambia",
          description:
            "Dry-season movement makes May a rewarding time to spot big game and enjoy intimate safari camps.",
          bestFor: ["Safari", "Wildlife", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648534/south-luangwa-may_wufrck.jpg",
        },
        {
          month: "May",
          title: "Galápagos Islands (small-ship cruise)",
          description:
            "Warm seas and active wildlife — May cruise windows offer close encounters with endemic species and snorkeling.",
          bestFor: ["Cruise", "Wildlife", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646447/galapagos-may_nmmaji.jpg",
        },
        {
          month: "May",
          title: "Blue Lagoon / Reykjavik, Iceland",
          description:
            "Thermal spas, geothermal wellness and longer days — May is calm for spa-focused trips and light outdoor adventure.",
          bestFor: ["Wellness", "Nature", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646228/blue-lagoon-may_nr106o.jpg",
        },
        {
          month: "May",
          title: "Madeira (remote-work stay)",
          description:
            "Mild temperatures, good connectivity and nomad-friendly coworking — May is excellent for remote work and hiking days off.",
          bestFor: ["Remote Work", "Hiking", "Wellness"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647234/madeira-may_yggb4e.jpg",
        },
        {
          month: "May",
          title: "Maldives (honeymoon)",
          description:
            "Calmer seas and secluded villas — May shoulder-season offers romance and private resort experiences for honeymooners.",
          bestFor: ["Honeymoon", "Luxury", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647753/maldives-may_iuohdg.jpg",
        },
        {
          month: "May",
          title: "Mauritius",
          description:
            "Warm seas, luxury resorts and honeymoon villas — May brings great beach weather and calmer resorts before peak season.",
          bestFor: ["Honeymoon", "Beach", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647790/mauritius-may_gvbrta.jpg",
        },
        {
          month: "May",
          title: "Milan, Italy (shopping)",
          description:
            "Designer boutiques, spring sales and city sophistication — May is a top time for style-savvy shoppers and city breaks.",
          bestFor: ["Shopping", "City", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647901/milan-may_cyjzen.jpg",
        },
        {
          month: "May",
          title: "Mediterranean — Greek islands cruise",
          description:
            "Peak shoulder-season for Mediterranean sailings — warm weather, island stops and quieter ports in May.",
          bestFor: ["Cruise", "Beach", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647791/med-cruise-may_sjeqw5.jpg",
        },
        {
          month: "May",
          title: "Alaska (early-season cruise)",
          description:
            "Wildlife and glacier viewing ramps up in May — early-season cruises run with good chances for whales and bears.",
          bestFor: ["Cruise", "Wildlife", "Nature"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646152/alaska-cruise-may_rv5da1.jpg",
        },
        {
          month: "May",
          title: "Banff / Lake Louise (weekend wellness)",
          description:
            "Mountain spas, hot springs and late-spring hikes — mix wellness, mild alpine days and nature therapy in May.",
          bestFor: ["Wellness", "Nature", "Hiking"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646204/banff-may_wjc5hg.jpg",
        },
        {
          month: "May",
          title: "Lisbon, Portugal (remote work + city life)",
          description:
            "Sunny spring days, great food and reliable internet — May is ideal for remote workers who want city life and short trips.",
          bestFor: ["Remote Work", "City", "Food & Wine"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646888/lisbon-may_jb4nnh.jpg",
        },
        {
          month: "May",
          title: "Zanzibar, Tanzania (wildlife & beaches)",
          description:
            "Drier days for both safari extensions and relaxing beaches — perfect mix of wildlife day trips and romantic coastal stays.",
          bestFor: ["Wildlife", "Honeymoon", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648800/zanzibar-may_x4bgh4.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "June",
      note: "High season begins — long days and festivals",
      top: [
        {
          title: "Norway Fjords",
          description:
            "Cruising, kayaking and dramatic scenery — enjoy the midnight sun in June.",
          bestFor: ["Nature", "Cruise", "Adventure"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648042/norway-fjords-june_eihodr.jpg",
        },
        {
          title: "French Riviera, France",
          description:
            "Yachting, glamorous beaches and summer nightlife — luxury hotspot in June.",
          bestFor: ["Luxury", "Beach", "Nightlife"],
          travelerType: "Luxury",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646448/french-riviera_abyncc.webp",
        },
        {
          title: "Zermatt, Switzerland",
          description:
            "Summer hiking, glacier views and alpine villages — stunning mountain scenery.",
          bestFor: ["Hiking", "Luxury", "Nature"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648863/zermatt_z9z0t6.webp",
        },
        {
          title: "Mykonos, Greece",
          description:
            "Beach clubs, nightlife and upscale stays — lively June island atmosphere.",
          bestFor: ["Beach", "Nightlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647977/mykonos_dcrxsj.jpg",
        },
        {
          title: "Isle of Skye, Scotland",
          description:
            "Dramatic moors, quiet beaches and long days — nature escape in June.",
          bestFor: ["Nature", "Hiking", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648514/skye_nbmtx2.jpg",
        },
        {
          title: "Barcelona, Spain",
          description:
            "Summer festivals, beaches and Gaudí culture — buzzing Mediterranean city.",
          bestFor: ["Festival", "Nightlife", "Culture"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646206/barcelona_nezo4d.webp",
        },
        {
          title: "Iceland",
          description:
            "24-hour daylight, waterfalls and volcanic adventures — prime summer exploration.",
          bestFor: ["Nature", "Road Trip", "Adventure"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646528/iceland-june-two_dkncyv.jpg",
        },
        {
          title: "Hvar, Croatia",
          description:
            "Luxury yachts, nightlife and Adriatic beaches — stylish June getaway.",
          bestFor: ["Nightlife", "Luxury", "Beach"],
          travelerType: "Luxury",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646523/hvar-june_qpcqvq.jpg",
        },
        {
          title: "Banff, Canada",
          description:
            "National parks, turquoise lakes and mountain hikes — breathtaking in summer.",
          bestFor: ["Nature", "Hiking", "Adventure"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646206/banff_tjdzmc.webp",
        },
        {
          title: "Stockholm, Sweden",
          description:
            "Midsummer festivals, island hopping and design culture — light-filled northern capital.",
          bestFor: ["Festival", "Culture", "City"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648543/stockholm_x9uskj.jpg",
        },
        {
          title: "Santorini, Greece",
          description:
            "Blue domes, luxury hotels and island sunsets — iconic summer romance.",
          bestFor: ["Romance", "Luxury", "Photography"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648421/santorini_sryzrq.jpg",
        },
        {
          title: "Amalfi Coast, Italy",
          description:
            "Positano, cliffs and beaches — summer Mediterranean hotspot.",
          bestFor: ["Romance", "Luxury", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646163/amalfi_flixfc.webp",
        },
        {
          title: "Bali, Indonesia",
          description:
            "Dry season, beaches and wellness retreats — spiritual and adventurous escape.",
          bestFor: ["Wellness", "Beach", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645852/bali-june_cl979b.jpg",
        },
        {
          title: "Dubrovnik, Croatia",
          description:
            "Summer on the Adriatic, beaches and history — coastal charm in June.",
          bestFor: ["History", "Beach", "Luxury"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646402/dubrovnik_arnbdn.webp",
        },
        {
          title: "Hawaii (Oahu)",
          description:
            "Surf, beaches and island adventure — summer paradise in the Pacific.",
          bestFor: ["Adventure", "Beach", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648070/oahu_dcq8t8.jpg",
        },
        {
          title: "Vienna, Austria",
          description:
            "Concerts, cafés and outdoor charm — elegant summer culture.",
          bestFor: ["Culture", "Romance", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648687/vienna_rtxovq.webp",
        },
        {
          title: "Berlin, Germany",
          description:
            "Open-air festivals, nightlife and history — Europe’s summer hub.",
          bestFor: ["Festival", "Nightlife", "Culture"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646222/berlin_cuy0fg.webp",
        },
        {
          title: "Tuscany, Italy",
          description:
            "Summer vineyards, countryside villas and rolling landscapes — ideal for couples.",
          bestFor: ["Food & Wine", "Romance", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648670/tuscany_l4bikm.webp",
        },
        {
          title: "Lisbon, Portugal",
          description:
            "Sardine festival, trams and sunny weather — lively summer atmosphere.",
          bestFor: ["Festival", "Food & Wine", "Culture"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646890/lisbon-june-three_q5fo8u.jpg",
        },
        {
          title: "French Alps (Chamonix)",
          description:
            "Hiking, cable cars and alpine scenery — June is perfect outdoors.",
          bestFor: ["Hiking", "Adventure", "Nature"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646271/chamonix_tiioof.jpg",
        },
        {
          title: "Capri, Italy",
          description:
            "Luxury island escape, grottos and yachting — elite Mediterranean retreat.",
          bestFor: ["Luxury", "Cruise", "Romance"],
          travelerType: "Luxury",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646260/capri_qulmcp.jpg",
        },
        {
          title: "Malta",
          description:
            "Sun-drenched beaches, history and Mediterranean culture — popular June island break.",
          bestFor: ["Beach", "History", "Culture"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647754/malta_e4d8o6.webp",
        },
        {
          title: "Tokyo, Japan",
          description:
            "Cultural festivals, shopping and cuisine — lively June city trip.",
          bestFor: ["Festival", "Culture", "Food & Wine"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648663/tokyo_m0koff.webp",
        },
        {
          title: "New York City, USA",
          description:
            "Summer events, Broadway and rooftop bars — buzzing city in June.",
          bestFor: ["City", "Nightlife", "Shopping"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648069/nyc-june_qk2zu1.jpg",
        },
        {
          title: "Istanbul, Turkey",
          description:
            "Historic sites, Bosphorus cruises and lively bazaars — ideal summer city trip.",
          bestFor: ["Culture", "Shopping", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646755/istanbul_y315cq.webp",
        },
        {
          title: "Reykjavik, Iceland",
          description:
            "Whale watching, hot springs and 24-hour daylight — unique Arctic summer.",
          bestFor: ["Adventure", "Nature", "Wildlife"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648361/reykjavik_b2ij5c.webp",
        },
        {
          title: "Prague, Czech Republic",
          description:
            "Summer festivals, castles and lively old town — magical European trip.",
          bestFor: ["Festival", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648260/prague_bxffue.jpg",
        },
        {
          title: "Los Angeles, USA",
          description:
            "Beaches, theme parks and nightlife — perfect family or group trip.",
          bestFor: ["Beach", "Family", "Nightlife"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646921/los-angeles_di2zpp.webp",
        },
        {
          title: "Marrakech, Morocco",
          description:
            "Desert trips, souks and rooftop dining — hot but atmospheric June.",
          bestFor: ["Culture", "Shopping", "Adventure"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/marrakech_esdxwl.jpg",
        },
        {
          title: "Lake Como, Italy",
          description:
            "Elegant villas, lakeside towns and mountain views — luxury summer escape.",
          bestFor: ["Luxury", "Romance", "Food & Wine"],
          travelerType: "Luxury",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646858/lake-como_l6m6v8.webp",
        },

        {
          month: "June",
          title: "Norwegian Fjords — road trip & cruise",
          description:
            "Long summer days, fjord cruises and scenic drives — June is ideal for road trippers and small-ship fjord cruises.",
          bestFor: ["Road Trip", "Cruise", "Nature"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648041/norway-fjords-april_ltms0v.webp",
        },
        {
          month: "June",
          title: "Alaska (prime cruise season)",
          description:
            "June marks the heart of Alaska cruise season — glaciers, whales and abundant wildlife on small-ship and big-ship itineraries.",
          bestFor: ["Cruise", "Wildlife", "Nature"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646154/alaska-june_etxciz.jpg",
        },
        {
          month: "June",
          title: "Iceland Ring Road (road trip + wellness)",
          description:
            "Mild summer days, geothermal baths and accessible highland roads — perfect for an active road trip with wellness stops.",
          bestFor: ["Road Trip", "Wellness", "Remote Work"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646616/iceland-june_e6yduo.jpg",
        },
        {
          month: "June",
          title: "Zermatt (glacier skiing)",
          description:
            "High-altitude glacier terrain keeps ski access in June—combine summer hiking in lower valleys with glacier skiing experiences.",
          bestFor: ["Skiing", "Adventure", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648801/zermatt-june_vlvwoo.jpg",
        },
        {
          month: "June",
          title: "Masai Mara, Kenya",
          description:
            "Start of the dry-season wildlife buildup — June is excellent for game drives and early migration sightings in East Africa.",
          bestFor: ["Safari", "Wildlife", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/masai-mara-june_rqhfk5.jpg",
        },
        {
          month: "June",
          title: "Kruger National Park, South Africa",
          description:
            "Dry season improves game visibility—June is a top month for safari viewing in many South African reserves.",
          bestFor: ["Safari", "Wildlife", "Luxury"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646825/kruger_qy4iik.webp",
        },
        {
          month: "June",
          title: "Okavango Delta, Botswana",
          description:
            "Peak dry-season conditions bring concentrated wildlife viewing — June is a premier month for Delta safaris.",
          bestFor: ["Safari", "Wildlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648072/okavango-april_lzsfih.webp",
        },
        {
          month: "June",
          title: "Bora Bora, French Polynesia",
          description:
            "Calm lagoons, clear skies and romantic overwater bungalows — June is excellent for honeymooners seeking tropical luxury.",
          bestFor: ["Honeymoon", "Luxury", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646229/bora-bora_h32i0c.jpg",
        },
        {
          month: "June",
          title: "Patagonia (Torres del Paine) — winter for southern latitudes",
          description:
            "June is winter in southern Patagonia — dramatic snowscapes, quieter trekking routes and a different, crisp atmosphere for winter adventurers.",
          bestFor: ["Winter", "Hiking", "Adventure"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648166/patagonia-june_hfmkbv.jpg",
        },
        {
          month: "June",
          title: "Swiss Alps (high alpine wellness & glacier access)",
          description:
            "Alpine wellness retreats, glacier walks and summer hiking begin — combine spa time with glacier-ski or mountaintop hikes.",
          bestFor: ["Wellness", "Hiking", "Skiing"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648549/swiss-alps-summer_ulsqnt.jpg",
        },
        {
          month: "June",
          title: "Iceland (northern highlands wellness & nature)",
          description:
            "Long daylight, geothermal pools and accessible highlands — ideal for wellness breaks, photography and mild adventure in June.",
          bestFor: ["Wellness", "Nature", "Remote Work"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646706/iceland_dl6rfv.jpg",
        },
        {
          month: "June",
          title: "Pacific Coast Highway (California) — road trip",
          description:
            "Sunny coastal drives, surf towns and outdoor stops — June offers excellent family and scenic road-trip weather on the PCH.",
          bestFor: ["Road Trip", "Family", "Nature"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648166/pch-june_brwejh.jpg",
        },
        {
          month: "June",
          title: "Svalbard, Norway (wildlife & polar summer)",
          description:
            "Arctic summer brings seabird colonies, polarscapes and unique wildlife-spotting cruises — remote and unforgettable in June.",
          bestFor: ["Wildlife", "Cruise", "Adventure"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648549/svalbard-june_a71ypb.jpg",
        },
        {
          month: "June",
          title: "Lisbon & Algarve, Portugal (remote work & beach)",
          description:
            "Sunny June days, good connectivity and quick coastal escapes make Lisbon and the Algarve excellent for remote-work breaks.",
          bestFor: ["Remote Work", "Beach", "Food & Wine"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646888/lisbon-june_bahxcz.jpg",
        },
        {
          month: "June",
          title: "Seychelles (luxury & honeymoon)",
          description:
            "Pristine beaches and high-end private resorts — June is a calm, luxurious choice for romance and secluded honeymoon stays.",
          bestFor: ["Honeymoon", "Luxury", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648555/sychelles_jktsv0.webp",
        },
      ],
    },
    {
      id: 7,
      name: "July",
      note: "Peak northern hemisphere summer — nature, festivals & escapes",
      top: [
        {
          title: "Iceland",
          description:
            "Glaciers, waterfalls and festivals under midnight sun — ultimate July adventure.",
          bestFor: ["Nature", "Adventure", "Road Trip"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646706/iceland_dl6rfv.jpg",
        },
        {
          title: "Banff, Canada",
          description:
            "Turquoise lakes, mountain trails and wildlife in Canada’s national parks — July at its best.",
          bestFor: ["Nature", "Hiking", "Wildlife"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646204/banff_dqmow3.jpg",
        },
        {
          title: "Alaska",
          description:
            "Glacier cruises, fjords and wildlife spotting — pristine wilderness for summer explorers.",
          bestFor: ["Cruise", "Wildlife", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645841/alaska_hb3dhl.jpg",
        },
        {
          title: "Santorini, Greece",
          description:
            "Sunsets, whitewashed villages and luxury hotels — peak summer romance on the Aegean.",
          bestFor: ["Romance", "Luxury", "Photography"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648423/santorini_nkitf1.webp",
        },
        {
          title: "Croatia (Split)",
          description:
            "Island hopping, sailing and nightlife — Adriatic summer hotspot.",
          bestFor: ["Sailing", "Nightlife", "Beach"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648536/split_bt50w7.jpg",
        },
        {
          title: "Sardinia, Italy",
          description:
            "Luxury beach clubs, turquoise seas and family resorts — Mediterranean jewel.",
          bestFor: ["Luxury", "Beach", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648424/sardinia_hgeapf.jpg",
        },
        {
          title: "Tanzania (Safari)",
          description:
            "Great Migration crossings, wildlife lodges and savannah landscapes — iconic July safari.",
          bestFor: ["Safari", "Adventure", "Wildlife"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648558/tanzania_wrnm7w.jpg",
        },
        {
          title: "Bordeaux, France",
          description:
            "Vineyards, wine festivals and countryside romance — summer French escape.",
          bestFor: ["Food & Wine", "Festival", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646231/bordeaux_w8yh7i.jpg",
        },
        {
          title: "Ibiza, Spain",
          description:
            "Beach clubs, nightlife and DJs — iconic July party island.",
          bestFor: ["Nightlife", "Beach", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646525/ibiza_f5onqd.jpg",
        },
        {
          title: "Hokkaido, Japan",
          description:
            "Flower fields, cool summer air and seafood — refreshing escape from mainland heat.",
          bestFor: ["Nature", "Food & Wine", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646503/hokkaido-summer_uvajnz.jpg",
        },
        {
          title: "Norwegian Fjords",
          description:
            "Cruises, kayaking and long daylight — July is ideal for fjords.",
          bestFor: ["Cruise", "Nature", "Adventure"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646423/fjords_zk4jbv.jpg",
        },
        {
          title: "Maui, Hawaii",
          description:
            "Surfing, volcanic hikes and tropical beaches — Pacific paradise.",
          bestFor: ["Beach", "Adventure", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647791/maui_y0vwzf.webp",
        },
        {
          title: "Edinburgh, Scotland",
          description:
            "Castle views, festivals and Highland escapes — Scotland in summer.",
          bestFor: ["Festival", "Culture", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646404/edinburgh_my8oyx.jpg",
        },
        {
          title: "Berlin, Germany",
          description:
            "Open-air clubs, culture and history — buzzing July city.",
          bestFor: ["Nightlife", "Culture", "Festival"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646221/berlin-munich-train-scenery_zo0gzk.jpg",
        },
        {
          title: "Swiss Alps",
          description:
            "Hiking, mountain lakes and alpine villages — Switzerland in bloom.",
          bestFor: ["Hiking", "Nature", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648549/swiss-alps-summer_ulsqnt.jpg",
        },
        {
          title: "Amalfi Coast, Italy",
          description:
            "Cliffside towns, luxury resorts and Mediterranean charm — peak season beauty.",
          bestFor: ["Romance", "Luxury", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646163/amalfi_flixfc.webp",
        },
        {
          title: "Greenland",
          description:
            "Icebergs, midnight sun and adventure cruises — untouched Arctic July trip.",
          bestFor: ["Adventure", "Cruise", "Nature"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646469/greenland_u2ycpy.jpg",
        },
        {
          title: "Barcelona, Spain",
          description:
            "Tapas, beaches and Gaudí landmarks — lively July atmosphere.",
          bestFor: ["Culture", "Nightlife", "Beach"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646206/barcelona_nezo4d.webp",
        },
        {
          title: "Yosemite, USA",
          description:
            "Giant waterfalls, granite cliffs and trails — California nature at its finest.",
          bestFor: ["Adventure", "Hiking", "Nature"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648797/yosemite_bieq0y.jpg",
        },
        {
          title: "Dubrovnik, Croatia",
          description: "Old town, beaches and island hopping — Adriatic jewel.",
          bestFor: ["History", "Beach", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646402/dubrovnik_arnbdn.webp",
        },
        {
          title: "French Riviera",
          description:
            "Luxury yachts, glamour and Mediterranean beaches — stylish July hotspot.",
          bestFor: ["Luxury", "Nightlife", "Beach"],
          travelerType: "Luxury",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646448/french-riviera_abyncc.webp",
        },
        {
          title: "Lake Tahoe, USA",
          description:
            "Kayaking, hiking and alpine landscapes — summer outdoor playground.",
          bestFor: ["Nature", "Adventure", "Hiking"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646858/lake-tahoe_jlafwm.jpg",
        },
        {
          title: "Amsterdam, Netherlands",
          description:
            "Canal cruises, festivals and cycling — buzzing European city.",
          bestFor: ["Festival", "Culture", "City"],
          travelerType: "Couples",
          image:
            "/https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646165/amsterdam_d90igy.webp",
        },
        {
          title: "Montenegro (Kotor)",
          description:
            "Bay views, medieval towns and sailing — Adriatic hidden gem.",
          bestFor: ["Sailing", "Culture", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646802/kotor_bwnswg.jpg",
        },
        {
          title: "Patagonia, Chile",
          description:
            "Winter sports in southern hemisphere — snow and glaciers.",
          bestFor: ["Skiing", "Adventure", "Nature"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648165/patagonia_ofiggk.jpg",
        },
        {
          title: "Lisbon, Portugal",
          description:
            "Summer festivals, trams and seafood — vibrant city in July.",
          bestFor: ["Festival", "Food & Wine", "Culture"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646860/lisbon-july_ss8n7i.jpg",
        },
        {
          title: "New York City, USA",
          description:
            "Rooftop bars, Broadway and fireworks — summer at its liveliest.",
          bestFor: ["City", "Nightlife", "Shopping"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648069/nyc-june_qk2zu1.jpg",
        },
        {
          title: "Stockholm, Sweden",
          description:
            "Archipelago cruises, midsummer and design — stylish northern escape.",
          bestFor: ["Festival", "Culture", "Cruise"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648543/stockholm_x9uskj.jpgg",
        },
        {
          title: "Quebec City, Canada",
          description:
            "Old town charm, festivals and river cruises — French flair in North America.",
          bestFor: ["Culture", "Festival", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648308/quebec_ttlkih.jpg",
        },
        {
          title: "Kenya (Masai Mara)",
          description:
            "Wildlife migration, safaris and luxury camps — July safari peak.",
          bestFor: ["Safari", "Wildlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646785/kenya_xiaoeb.jpg",
        },
      ],
    },
    {
      id: 8,
      name: "August",
      note: "Festivals, island escapes and mountain retreats",
      top: [
        {
          title: "Edinburgh, Scotland",
          description:
            "Fringe Festival, castle views and cultural buzz — August hotspot.",
          bestFor: ["Festival", "Culture", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646404/edinburgh_my8oyx.jpg",
        },
        {
          title: "San Sebastian, Spain",
          description:
            "Pintxos, beaches and festivals — food capital of Spain in summer.",
          bestFor: ["Food & Wine", "Beach", "Festival"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648420/san-sebastian_j71mer.jpg",
        },
        {
          title: "Bali, Indonesia",
          description:
            "Dry season, temples and beaches — cultural and wellness haven.",
          bestFor: ["Wellness", "Culture", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646202/bali_zmtydi.jpg",
        },
        {
          title: "Dubrovnik, Croatia",
          description:
            "Summer Adriatic jewel with beaches, festivals and medieval charm.",
          bestFor: ["History", "Beach", "Festival"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646402/dubrovnik_arnbdn.webp",
        },
        {
          title: "Kenya (Masai Mara)",
          description:
            "Great Migration, safaris and luxury lodges — unforgettable August wildlife experience.",
          bestFor: ["Safari", "Wildlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646785/kenya_xiaoeb.jpg",
        },
        {
          title: "Montreal, Canada",
          description:
            "Summer jazz, street festivals and French Canadian culture.",
          bestFor: ["Festival", "Culture", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647938/montreal_ctcats.jpg",
        },
        {
          title: "Ibiza, Spain",
          description:
            "Nightlife, DJs and upscale beaches — party season peak.",
          bestFor: ["Nightlife", "Beach", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646525/ibiza_f5onqd.jpg",
        },
        {
          title: "Loire Valley, France",
          description:
            "Châteaux, vineyards and river landscapes — elegant French August.",
          bestFor: ["Romance", "Food & Wine", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646919/loire-valley_yrswvi.jpg",
        },
        {
          title: "Sicily, Italy",
          description:
            "Beaches, volcano hikes and Mediterranean culture — diverse island trip.",
          bestFor: ["Beach", "Adventure", "Culture"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648511/sicily_gcebkm.jpg",
        },
        {
          title: "Mykonos, Greece",
          description:
            "Beach clubs, parties and sunsets — iconic August nightlife island.",
          bestFor: ["Nightlife", "Luxury", "Beach"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647977/mykonos_dcrxsj.jpg",
        },
        {
          title: "Peru (Cusco & Machu Picchu)",
          description:
            "Dry season for hikes and ruins — bucket-list adventure.",
          bestFor: ["Adventure", "History", "Hiking"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647221/machu-picchu_cky3g3.webp",
        },
        {
          title: "Iceland (Highlands)",
          description:
            "Accessible only in summer — surreal landscapes and hiking.",
          bestFor: ["Adventure", "Nature", "Road Trip"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646706/iceland_dl6rfv.jpg",
        },
        {
          title: "Zanzibar, Tanzania",
          description:
            "Tropical beaches, spice tours and Swahili culture — exotic August island.",
          bestFor: ["Beach", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648800/zanzibar-may_x4bgh4.jpg",
        },
        {
          title: "Lake Bled, Slovenia",
          description:
            "Charming lakeside town, hikes and castles — picture-perfect summer.",
          bestFor: ["Romance", "Hiking", "Nature"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646829/lake-bled_dco23h.jpg",
        },
        {
          title: "Rio de Janeiro, Brazil",
          description:
            "Winter sun, beaches and samba — tropical August city trip.",
          bestFor: ["Beach", "Culture", "Nightlife"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648361/rio_cykjzo.webp",
        },
        {
          title: "Azores, Portugal",
          description:
            "Whale watching, volcanic hikes and island lakes — Atlantic gem.",
          bestFor: ["Nature", "Adventure", "Wellness"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645849/azores_ir7rak.webp",
        },
        {
          title: "Tokyo, Japan",
          description:
            "Summer festivals, neon nights and shopping — vibrant August city.",
          bestFor: ["Festival", "Shopping", "Culture"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648663/tokyo_m0koff.webp",
        },
        {
          title: "Swiss Alps (Zermatt)",
          description:
            "Summer hiking, glaciers and alpine beauty — August outdoors.",
          bestFor: ["Hiking", "Luxury", "Nature"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648862/zermatt_rqjjyg.jpg",
        },
        {
          title: "Mongolia (Naadam Festival)",
          description:
            "Nomadic culture, horse racing and wrestling — unique August event.",
          bestFor: ["Festival", "Adventure", "Culture"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647904/mongolia_icestk.jpg",
        },
        {
          title: "Crete, Greece",
          description:
            "Beaches, cuisine and history — largest Greek island in summer.",
          bestFor: ["Beach", "Food & Wine", "History"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646328/crete_gtcosn.jpg",
        },
      ],
    },
    {
      id: 9,
      name: "September",
      note: "Shoulder season, harvests and quieter beaches",
      top: [
        {
          title: "Tuscany, Italy",
          description:
            "Harvest, vineyards and countryside romance — September at its finest.",
          bestFor: ["Food & Wine", "Romance", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648670/tuscany_l4bikm.webp",
        },
        {
          title: "Bordeaux, France",
          description:
            "Wine harvest, festivals and gourmet dining — ideal autumn start.",
          bestFor: ["Food & Wine", "Festival", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646231/bordeaux_w8yh7i.jpg",
        },
        {
          title: "Santorini, Greece",
          description:
            "Calmer seas, warm sun and romantic escapes — quieter September paradise.",
          bestFor: ["Romance", "Luxury", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648423/santorini_nkitf1.webp",
        },
        {
          title: "Croatia (Dalmatian Coast)",
          description:
            "Warm Adriatic, sailing and fewer crowds — shoulder season jewel.",
          bestFor: ["Sailing", "Culture", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646342/dalmatian-coast_jruuue.jpg",
        },
        {
          title: "Madeira, Portugal",
          description:
            "Hiking, gardens and late-summer sun — lush Atlantic island.",
          bestFor: ["Hiking", "Wellness", "Nature"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647222/madeira_jfwodm.webp",
        },
        {
          title: "Munich, Germany",
          description:
            "Oktoberfest, beer tents and Bavarian culture — lively autumn festival.",
          bestFor: ["Festival", "Culture", "Food & Wine"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647941/munich_tgub3m.jpg",
        },
        {
          title: "Crete, Greece",
          description:
            "Late-season beaches, cuisine and history — quieter Greek escape.",
          bestFor: ["Beach", "Food & Wine", "History"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646328/crete_gtcosn.jpg",
        },
        {
          title: "Portugal (Douro Valley)",
          description:
            "Wine harvests, cruises and countryside romance — September delight.",
          bestFor: ["Food & Wine", "Cruise", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646380/douro-valley_jfdul5.jpg",
        },
        {
          title: "Morocco (Atlas Foothills)",
          description:
            "Mild hiking weather, cultural towns and mountain views — early autumn trip.",
          bestFor: ["Adventure", "Culture", "Hiking"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647939/morocco-atlas_hh1fqi.jpg",
        },
        {
          title: "Japan (Hokkaido)",
          description:
            "Autumn colors, seafood festivals and cool weather — serene northern escape.",
          bestFor: ["Food & Wine", "Nature", "Festival"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646480/hokkaido-autumn-oct_jw36x1.jpg",
        },
        {
          title: "New York City, USA",
          description:
            "Fashion Week, Broadway and parks — vibrant September city break.",
          bestFor: ["Shopping", "Culture", "Nightlife"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648069/nyc-june_qk2zu1.jpg",
        },
        {
          title: "Istanbul, Turkey",
          description:
            "Markets, mosques and Bosphorus cruises — mild autumn days.",
          bestFor: ["Culture", "History", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646755/istanbul_y315cq.webp",
        },
        {
          title: "South Africa (Cape Winelands)",
          description:
            "Spring vineyards, flowers and Cape cuisine — September beauty.",
          bestFor: ["Food & Wine", "Nature", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646255/cape-winelands_s8ugh2.jpg",
        },
        {
          title: "Sicily, Italy",
          description:
            "Harvests, beaches and culture — Mediterranean island in autumn.",
          bestFor: ["Culture", "Beach", "Food & Wine"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648511/sicily_gcebkm.jpg",
        },
        {
          title: "Vancouver, Canada",
          description:
            "Mild climate, food festivals and nature nearby — west coast gem.",
          bestFor: ["Food & Wine", "Nature", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648674/vancouver-september_y2bzfs.jpg",
        },
        {
          title: "Athens, Greece",
          description:
            "Historic ruins, mild temperatures and lively nightlife — autumn city trip.",
          bestFor: ["History", "Culture", "Nightlife"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645847/athens_maxz3b.jpg",
        },
        {
          title: "Andalusia, Spain",
          description:
            "Flamenco, tapas and Moorish palaces — cultural September trip.",
          bestFor: ["Culture", "Food & Wine", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646170/andalusia_hk1vxa.jpg",
        },
        {
          title: "Slovenia",
          description:
            "Alpine hikes, caves and lakes — affordable European September gem.",
          bestFor: ["Adventure", "Nature", "Hiking"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648516/slovenia_lgthf9.jpg",
        },
        {
          title: "Jordan (Petra)",
          description:
            "Comfortable desert weather for exploring ruins — unforgettable autumn trip.",
          bestFor: ["History", "Adventure", "Culture"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648227/petra_stsc1m.jpg",
        },
        {
          title: "Budapest, Hungary",
          description:
            "Thermal baths, river cruises and culture — autumn charm.",
          bestFor: ["Culture", "Cruise", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646231/budapest_pw0tda.jpg",
        },
        {
          title: "Amalfi Coast, Italy",
          description:
            "Cliffside romance, beaches and late-summer charm — quieter now.",
          bestFor: ["Romance", "Luxury", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645845/amalfi_unhr9v.webp",
        },
        {
          title: "Chile (Atacama Desert)",
          description:
            "Stargazing, salt flats and unique landscapes — surreal September adventure.",
          bestFor: ["Adventure", "Nature", "Photography"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645845/atacama_js4zeu.jpg",
        },
        {
          title: "Seville, Spain",
          description:
            "Historic streets, flamenco and mild temperatures — cultural autumn trip.",
          bestFor: ["Culture", "Food & Wine", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648512/seville_qnpdl3.webp",
        },
        {
          title: "Dubrovnik, Croatia",
          description:
            "Quieter beaches, medieval walls and Adriatic charm — ideal September.",
          bestFor: ["History", "Beach", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646402/dubrovnik_arnbdn.webp",
        },
        {
          title: "Prague, Czech Republic",
          description:
            "Golden autumn, castles and beer festivals — romantic city trip.",
          bestFor: ["Festival", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648260/prague_bxffue.jpg",
        },
      ],
    },
    {
      id: 10,
      name: "October",
      note: "Autumn colours, truffle season & quieter cities",
      top: [
        {
          title: "Kyoto, Japan",
          description:
            "Maple foliage, temples and cultural festivals — magical autumn season.",
          bestFor: ["Culture", "Nature", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646828/kyoto_sklj9y.webp",
        },
        {
          title: "Tuscany, Italy",
          description:
            "Truffle hunts, vineyard festivals and rustic cuisine — fall indulgence.",
          bestFor: ["Food & Wine", "Festival", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648670/tuscany_l4bikm.webp",
        },
        {
          title: "New England, USA",
          description:
            "Scenic drives, fall foliage and cozy inns — iconic October trip.",
          bestFor: ["Nature", "Road Trip", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647977/new-england_tfbiye.jpg",
        },
        {
          title: "Istanbul, Turkey",
          description:
            "Mild weather, bazaars and historic sites — perfect autumn city break.",
          bestFor: ["Culture", "History", "Shopping"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646755/istanbul_y315cq.webp",
        },
        {
          title: "Munich, Germany",
          description:
            "Oktoberfest, beer tents and Bavarian traditions — lively festival scene.",
          bestFor: ["Festival", "Culture", "Food & Wine"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647940/munich-old-town-luxury_x5phq1.jpg",
        },
        {
          title: "Jordan (Petra & Wadi Rum)",
          description:
            "Comfortable desert weather for ruins and treks — iconic October trip.",
          bestFor: ["Adventure", "History", "Culture"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648227/petra_stsc1m.jpg",
        },
        {
          title: "Seville, Spain",
          description:
            "Tapas, flamenco and warm autumn evenings — cultural Andalusian trip.",
          bestFor: ["Culture", "Food & Wine", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648512/seville_qnpdl3.webp",
        },
        {
          title: "Lisbon, Portugal",
          description:
            "Sunny days, festivals and seafood — lively shoulder-season escape.",
          bestFor: ["Festival", "Food & Wine", "City"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646888/lisbon-may_jb4nnh.jpg",
        },
        {
          title: "Cape Town, South Africa",
          description:
            "Spring blooms, vineyards and ocean drives — October outdoor beauty.",
          bestFor: ["Nature", "Food & Wine", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646257/capetown_zb4nhs.webp",
        },
        {
          title: "Vietnam (Hoi An)",
          description:
            "Lantern festival, riverside dining and beaches — autumn charm.",
          bestFor: ["Festival", "Culture", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646476/hoi-an_bzkwkg.jpg",
        },
        {
          title: "Marrakech, Morocco",
          description:
            "Souks, gardens and mild desert climate — exotic autumn city.",
          bestFor: ["Culture", "Shopping", "Adventure"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/marrakech_tdrdyj.webp",
        },
        {
          title: "Paris, France",
          description:
            "Autumn walks, art museums and wine festivals — romantic fall vibe.",
          bestFor: ["Culture", "Romance", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648120/paris-tower_bwhktn.webp",
        },
        {
          title: "Prague, Czech Republic",
          description:
            "Castles, beer halls and golden fall leaves — fairy-tale autumn.",
          bestFor: ["Culture", "Festival", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648262/prague_usgcjq.webp",
        },
        {
          title: "Buenos Aires, Argentina",
          description:
            "Spring weather, tango and vibrant nightlife — October city buzz.",
          bestFor: ["Culture", "Nightlife", "Food & Wine"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646242/buenos-aires_zvlnvn.webp",
        },
        {
          title: "Santorini, Greece",
          description:
            "Fewer crowds, sunsets and luxury stays — serene autumn escape.",
          bestFor: ["Romance", "Luxury", "Beach"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648421/santorini_sryzrq.jpg",
        },
        {
          title: "Mexico City, Mexico",
          description:
            "Food festivals, art museums and lively plazas — autumn urban vibe.",
          bestFor: ["Food & Wine", "Culture", "Festival"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647869/mexico-city_pydwt5.webp",
        },
        {
          title: "Edinburgh, Scotland",
          description:
            "Autumn colors, castles and whisky tastings — cultural Scottish trip.",
          bestFor: ["History", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646404/edinburgh_my8oyx.jpg",
        },
        {
          title: "Florence, Italy",
          description:
            "Renaissance art, Tuscan cuisine and harvest season — perfect October.",
          bestFor: ["Culture", "Food & Wine", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646424/florence_qqixre.jpg",
        },
        {
          title: "Canada (Quebec)",
          description:
            "Fall foliage, French charm and seasonal festivals — October delight.",
          bestFor: ["Festival", "Nature", "Culture"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648310/quebec-oct_mpq0mr.jpg",
        },
        {
          title: "Seoul, South Korea",
          description:
            "Autumn foliage, palaces and lively city districts — cultural escape.",
          bestFor: ["Festival", "Culture", "Shopping"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648509/seoul_itax2i.webp",
        },
        {
          title: "Patagonia, Chile",
          description:
            "Springtime treks, glaciers and wildlife — October adventure paradise.",
          bestFor: ["Adventure", "Nature", "Wildlife"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648165/patagonia_ofiggk.jpg",
        },
        {
          title: "Rome, Italy",
          description:
            "Mild weather, piazzas and cultural life — fall in the Eternal City.",
          bestFor: ["Culture", "History", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648363/rome_quqgh8.webp",
        },
        {
          title: "Vienna, Austria",
          description:
            "Classical concerts, coffee houses and fall charm — elegant October trip.",
          bestFor: ["Culture", "Romance", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648687/vienna_rtxovq.webp",
        },
        {
          title: "Hokkaido, Japan",
          description:
            "Autumn leaves, seafood festivals and cooler air — northern escape.",
          bestFor: ["Festival", "Food & Wine", "Nature"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646503/hokkaido-autumn_w26sd6.jpg",
        },
        {
          title: "Madrid, Spain",
          description:
            "Museums, tapas and autumn festivals — lively city in October.",
          bestFor: ["Culture", "Food & Wine", "Festival"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647221/madrid_hqrtim.webp",
        },
        {
          title: "Cusco, Peru",
          description:
            "Andean culture, ruins and mild climate — perfect hiking season.",
          bestFor: ["Adventure", "Culture", "History"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646341/cusco_nroqfn.jpg",
        },
        {
          title: "Cambodia (Siem Reap)",
          description:
            "Angkor temples, festivals and cultural depth — autumn visit highlight.",
          bestFor: ["History", "Culture", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645847/angkor_nowd4b.jpg",
        },
        {
          title: "Iceland",
          description:
            "Northern lights, fewer crowds and crisp air — October magic.",
          bestFor: ["Adventure", "Nature", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646526/iceland-april_ow7o9q.webp",
        },
        {
          title: "Morocco (Chefchaouen)",
          description:
            "Blue city, mountains and cooler weather — autumn photogenic trip.",
          bestFor: ["Culture", "Adventure", "Photography"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646282/chefchaouen_gpiqtp.webp",
        },
        {
          title: "Los Angeles, USA",
          description:
            "Mild weather, beaches and Halloween events — fun autumn city break.",
          bestFor: ["Beach", "Festival", "City"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646921/los-angeles_di2zpp.webp",
        },
        {
          title: "Kyoto, Japan (Autumn)",
          description:
            "Peak maple-leaf season, temple strolls and refined kaiseki dining — perfect for culture and romance.",
          bestFor: ["Culture", "Nature", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646827/kyoto-oct_heg1vc.jpg",
        },
        {
          title: "Tuscany, Italy (Truffle & Fall)",
          description:
            "Truffle hunts, winery dinners and golden hills — a food-lover’s autumn escape.",
          bestFor: ["Food & Wine", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648670/tuscany_l4bikm.webp",
        },
        {
          title: "New England, USA (Leaf Season)",
          description:
            "Classic fall drives, cosy inns and farmers’ markets — the ultimate road-trip for leaf-peeping.",
          bestFor: ["Road Trip", "Nature", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647977/new-england_tfbiye.jpg",
        },
        {
          title: "Munich, Germany (Oktoberfest vibe)",
          description:
            "Autumn Bavarian culture, beer halls and lively local festivals — energetic city break.",
          bestFor: ["Festival", "Culture", "Food & Wine"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647940/munich-old-town-luxury_x5phq1.jpg",
        },
        {
          title: "Istanbul, Turkey",
          description:
            "Mild weather for bazaars, Bosphorus cruises and historic sites — excellent year-round city break.",
          bestFor: ["City", "Culture", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646755/istanbul_y315cq.webp",
        },
        {
          title: "Lisbon, Portugal",
          description:
            "Comfortable days, café culture and strong remote-work infrastructure for slow city stays.",
          bestFor: ["City", "Remote Work", "Food & Wine"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646889/lisbon_batgam.webp",
        },
        {
          title: "Amalfi Coast, Italy (Shoulder)",
          description:
            "Quieter coastal drives, lemon groves and romantic boutique hotels off-peak.",
          bestFor: ["Romance", "Luxury", "Road Trip"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645845/amalfi_unhr9v.webp",
        },
        {
          title: "Petra & Wadi Rum, Jordan",
          description:
            "Comfortable desert temps for trekking, red-sand camps and ancient Petra exploration.",
          bestFor: ["Adventure", "Culture", "History"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648227/petra_stsc1m.jpg",
        },
        {
          title: "Marrakesh, Morocco",
          description:
            "Warm days for souks, riads and rooftop cafés — great for shopping and culture.",
          bestFor: ["Shopping", "Culture", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/marrakech_esdxwl.jpg",
        },
        {
          title: "Douro Valley, Portugal",
          description:
            "River cruises and vineyard dinners during mellow autumn weather — ideal for wine lovers.",
          bestFor: ["Food & Wine", "Luxury", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646380/douro-valley_jfdul5.jpg",
        },
        {
          title: "Norway Fjords (Shoulder Cruise)",
          description:
            "Fjord cruises with autumn colours, fewer crowds and dramatic coastal scenery.",
          bestFor: ["Cruise", "Nature", "Road Trip"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648070/norway-fjords_xhffdt.webp",
        },
        {
          title: "Azores, Portugal",
          description:
            "Green islands for hiking, whale-watching and peaceful remote-work stays.",
          bestFor: ["Hiking", "Nature", "Remote Work"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645849/azores_ir7rak.webp",
        },
        {
          title: "Sicily, Italy",
          description:
            "Rich food, ancient sites and coastal towns with pleasant shoulder-season weather.",
          bestFor: ["Food & Wine", "Beach", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648511/sicily_gcebkm.jpg",
        },
        {
          title: "Iceland (Northern Lights)",
          description:
            "Aurora season begins; warm geothermal pools and dramatic landscapes for short adventure trips.",
          bestFor: ["Nature", "Adventure", "Winter"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646528/iceland-june-two_dkncyv.jpg",
        },
        {
          title: "Lake Bled, Slovenia",
          description:
            "Fairytale lake, castle views and gentle hikes — romantic and compact getaway.",
          bestFor: ["Nature", "Romance", "Hiking"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646829/lake-bled_dco23h.jpg",
        },
        {
          title: "Isle of Skye, Scotland",
          description:
            "Dramatic coastlines, moorland hikes and whisky trails — rugged outdoor escape.",
          bestFor: ["Nature", "Hiking", "Road Trip"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648514/skye_nbmtx2.jpg",
        },
        {
          title: "Cape Winelands, South Africa",
          description:
            "Springtime (southern hemisphere) vineyards, coastal routes and luxury stays near Cape Town.",
          bestFor: ["Food & Wine", "Nature", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646255/cape-winelands_s8ugh2.jpg",
        },
        {
          title: "Hokkaido, Japan (Early Autumn)",
          description:
            "Cooler seas, flower fields and coastal scenery with early fall colours.",
          bestFor: ["Nature", "Food & Wine", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646480/hokkaido-autumn-oct_jw36x1.jpg",
        },
        {
          title: "Crete, Greece (Late Season)",
          description:
            "Warm seas, local tavernas and archaeological sites — quiet beaches and culture.",
          bestFor: ["Beach", "Family", "Culture"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646328/crete_gtcosn.jpg",
        },
        {
          title: "Dalmatian Coast, Croatia",
          description:
            "Island hopping and coastal towns with gentle autumn sea temperatures — great for sailing.",
          bestFor: ["Sailing", "Beach", "Culture"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646342/dalmatia_jaqv6i.jpg",
        },
        {
          month: "October",
          title: "Swiss Alps, Switzerland",
          description:
            "Early skiing starts at higher resorts, with alpine lodges and glacier views.",
          bestFor: ["Skiing", "Winter", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648549/swiss-alps-summer_ulsqnt.jpg",
        },
        {
          month: "October",
          title: "Bali, Indonesia (Late Season)",
          description:
            "Tropical warmth, wellness retreats and private villas ideal for honeymoons.",
          bestFor: ["Honeymoon", "Wellness", "Summer"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645852/bali-june_cl979b.jpg",
        },
        {
          month: "October",
          title: "Rocky Mountains, USA",
          description:
            "Scenic fall road trips, wildlife viewing and early snow on peaks.",
          bestFor: ["Road Trip", "Nature", "Adventure"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648361/rockies-oct_ix7ar2.jpg",
        },
        {
          month: "October",
          title: "Victoria Falls, Zambia/Zimbabwe",
          description:
            "Great safari weather with dramatic falls — adventure and romance combined.",
          bestFor: ["Safari", "Adventure", "Honeymoon"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648683/victoria-falls_jaq7rs.jpg",
        },
        {
          month: "October",
          title: "Santorini, Greece (Late Honeymoon)",
          description:
            "Quieter island sunsets, boutique stays and honeymoon-perfect luxury escapes.",
          bestFor: ["Honeymoon", "Romance", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648420/santorini-oct_tqmiuk.jpg",
        },
      ],
    },
    {
      id: 11,
      name: "November",
      note: "Warm escapes and early winter festivals",
      top: [
        {
          title: "Marrakech, Morocco",
          description:
            "Markets, gardens and cooler desert climate — great November city.",
          bestFor: ["Culture", "Shopping", "Adventure"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/marrakech_tdrdyj.webp",
        },
        {
          title: "Canary Islands, Spain",
          description:
            "Sunny beaches, volcano hikes and reliable warmth — European escape.",
          bestFor: ["Beach", "Nature", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646242/canary-islands_eevcto.webp",
        },
        {
          title: "Egypt (Luxor & Aswan)",
          description:
            "Ancient temples, Nile cruises and mild weather — November ideal.",
          bestFor: ["History", "Culture", "Cruise"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646403/egypt-luxor_mgygkh.webp",
        },
        {
          title: "Phuket, Thailand",
          description:
            "Dry season, beaches and nightlife — start of tropical season.",
          bestFor: ["Beach", "Nightlife", "Romance"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648647/thailand-phuket_st9eg1.webp",
        },
        {
          title: "Mexico (Oaxaca)",
          description:
            "Day of the Dead, markets and cultural depth — unique festival trip.",
          bestFor: ["Festival", "Culture", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648072/oaxaca_f3hedg.jpg",
        },
        {
          title: "Dubai, UAE",
          description:
            "Events, shopping and luxury resorts — cooler desert season.",
          bestFor: ["Luxury", "City", "Shopping"],
          travelerType: "Luxury",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646382/dubai_j8xryu.jpg",
        },
        {
          title: "Buenos Aires, Argentina",
          description:
            "Spring, tango and vibrant nightlife — South American November vibe.",
          bestFor: ["Culture", "Nightlife", "Food & Wine"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646242/buenos-aires_zvlnvn.webp",
        },
        {
          title: "Cape Town, South Africa",
          description:
            "Spring flowers, vineyards and ocean drives — outdoor paradise.",
          bestFor: ["Nature", "Food & Wine", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646255/capetown_ujsuxq.jpg",
        },
        {
          title: "Maldives",
          description: "Turquoise waters, villas and diving — tropical luxury.",
          bestFor: ["Beach", "Luxury", "Wellness"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647753/maldives-may_iuohdg.jpg",
        },
        {
          title: "New Zealand (North Island)",
          description:
            "Spring gardens, road trips and coastlines — November charm.",
          bestFor: ["Road Trip", "Nature", "Adventure"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647980/new-zealand_cgowbc.webp",
        },
        {
          title: "Havana, Cuba",
          description:
            "Retro cars, music and culture — Caribbean November vibe.",
          bestFor: ["Culture", "Music", "Nightlife"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646474/havana_srhaad.jpg",
        },
        {
          title: "Reykjavik, Iceland",
          description:
            "Northern lights, thermal baths and crisp air — winter wonderland.",
          bestFor: ["Nature", "Wellness", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648310/reykjavik_znlsp6.jpg",
        },
        {
          title: "Goa, India",
          description:
            "Beaches, yoga retreats and nightlife — vibrant tropical destination.",
          bestFor: ["Beach", "Nightlife", "Wellness"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646470/goa_w1w2gu.jpg",
        },
        {
          title: "Vietnam (Hanoi)",
          description: "Markets, history and street food — November city buzz.",
          bestFor: ["Culture", "Food & Wine", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646477/hanoi_utx96g.jpg",
        },
        {
          title: "Canberra, Australia",
          description:
            "Spring festivals, gardens and museums — cultural November trip.",
          bestFor: ["Festival", "Culture", "Nature"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646243/canberr_sngxlh.jpg",
        },
        {
          title: "Morocco (Essaouira)",
          description:
            "Coastal medina, seafood and art — relaxed November escape.",
          bestFor: ["Beach", "Culture", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646403/essaouira_mdyjdd.jpg",
        },
        {
          title: "Nepal (Kathmandu)",
          description:
            "Clear skies, trekking and Himalayan views — peak hiking month.",
          bestFor: ["Adventure", "Hiking", "Culture"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646783/Kathmandu_rjxu1k.webp",
        },
        {
          title: "Sri Lanka (South Coast)",
          description: "Golden beaches, tea and temples — November warmth.",
          bestFor: ["Beach", "Culture", "Relaxation"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648535/srilanka_fa3yzj.jpg",
        },
        {
          title: "Seychelles",
          description:
            "Private islands, diving and beaches — tropical luxury retreat.",
          bestFor: ["Beach", "Luxury", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648555/sychelles_jktsv0.webp",
        },
        {
          title: "Madrid, Spain",
          description:
            "Autumn culture, tapas and nightlife — November city break.",
          bestFor: ["Culture", "Food & Wine", "Nightlife"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647221/madrid_hqrtim.webp",
        },
        {
          title: "Johannesburg, South Africa",
          description: "Spring, safaris and culture — gateway to adventure.",
          bestFor: ["Safari", "Culture", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646769/johannesburg_x2ysdo.jpg",
        },
        {
          title: "Chile (Patagonia)",
          description: "Spring treks, wildlife and glaciers — November wonder.",
          bestFor: ["Adventure", "Nature", "Wildlife"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648165/patagonia_ofiggk.jpg",
        },
        {
          title: "Bangkok, Thailand",
          description: "Temples, markets and nightlife — vibrant tropical hub.",
          bestFor: ["Culture", "Shopping", "Nightlife"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648634/thailand-bangkok_bxlt3j.webp",
        },
        {
          title: "Sydney, Australia",
          description: "Spring events, beaches and harbor — lively November.",
          bestFor: ["Festival", "City", "Beach"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648555/sydney_rky2hw.jpg",
        },
        {
          title: "Hawaii (Oahu)",
          description:
            "Surfing, beaches and aloha culture — warm November trip.",
          bestFor: ["Beach", "Adventure", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648070/oahu_dcq8t8.jpg",
        },
        {
          title: "Morocco (Fes)",
          description:
            "Medina alleys, souks and heritage — cultural November city.",
          bestFor: ["Culture", "Shopping", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646423/fes_dwag0p.jpg",
        },
        {
          title: "Thailand (Chiang Mai)",
          description:
            "Loy Krathong festival, lanterns and temples — magical cultural trip.",
          bestFor: ["Festival", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648623/thailand-chiang-mai_b7o8cd.webp",
        },
        {
          title: "Los Angeles, USA",
          description: "Beaches, shopping and Hollywood — fun autumn escape.",
          bestFor: ["Beach", "Shopping", "Nightlife"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646921/los-angeles_di2zpp.webp",
        },
        {
          title: "Mexico (Cancun)",
          description:
            "Resorts, nightlife and beaches — warm November paradise.",
          bestFor: ["Beach", "Nightlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646244/cancun_a7lmrp.webp",
        },
        {
          month: "November",
          title: "Banff, Canada",
          description:
            "Snow begins; wellness spas and ski slopes prepare for the winter season.",
          bestFor: ["Skiing", "Wellness", "Winter"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646206/banff_tjdzmc.webp",
        },
        {
          month: "November",
          title: "Maldives (Honeymoon Resorts)",
          description:
            "Calm waters and luxury villas — top romantic destination in November.",
          bestFor: ["Honeymoon", "Beach", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647753/maldives-luxury-resorts_y8m3er.webp",
        },
        {
          month: "November",
          title: "Garden Route, South Africa",
          description:
            "Sunny spring road trips with wildlife stops and coastal scenery.",
          bestFor: ["Road Trip", "Safari", "Summer"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646474/garden-route-nov_tpgqbb.jpg",
        },
        {
          month: "November",
          title: "Kerala, India",
          description:
            "Backwater cruises, Ayurveda wellness stays and tropical warmth — rejuvenating retreat.",
          bestFor: ["Wellness", "Summer", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646800/kerala-nov_tjbxr3.jpg",
        },
        {
          month: "November",
          title: "Serengeti, Tanzania",
          description:
            "Classic safari season, luxury lodges and prime wildlife viewing.",
          bestFor: ["Safari", "Wildlife", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648509/serengeti_ointks.jpg",
        },

        {
          month: "November",
          title: "Marrakesh, Morocco",
          description:
            "Mild days for riads, markets and rooftop dining — perfect for culture and shopping.",
          bestFor: ["Culture", "Shopping", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/marrakech_esdxwl.jpg",
        },
        {
          month: "November",
          title: "Canary Islands, Spain",
          description:
            "Reliable warmth for beaches, coastal walks and family escapes without summer crowds.",
          bestFor: ["Beach", "Nature", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646242/canary-islands_eevcto.webp",
        },
        {
          month: "November",
          title: "Egypt (Hurghada & Nile Cruises)",
          description:
            "Dry season for Red Sea diving and comfortable Nile river cruises.",
          bestFor: ["Beach", "Cruise", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646404/egypt-nov_sktf5g.jpg",
        },
        {
          month: "November",
          title: "Phuket, Thailand (Dry Season)",
          description:
            "Start of the dry season — island hopping, beaches and lively night markets.",
          bestFor: ["Beach", "Relaxation", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648647/thailand-phuket_st9eg1.webp",
        },
        {
          month: "November",
          title: "Oaxaca, Mexico (Day of the Dead)",
          description:
            "Cultural festivals, parades and world-class cuisine in a vibrant autumn setting.",
          bestFor: ["Festival", "Culture", "Food & Wine"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648072/oaxaca_f3hedg.jpg",
        },
        {
          month: "November",
          title: "Dubai, UAE",
          description:
            "Cooler weather, luxury hotels and major events make it a premier November city escape.",
          bestFor: ["Luxury", "City", "Family"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646385/dubai_geckji.webp",
        },
        {
          month: "November",
          title: "Cape Town, South Africa",
          description:
            "Springtime blossoms, vineyards and coastal drives — great for outdoor dining and safaris nearby.",
          bestFor: ["Nature", "Food & Wine", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646255/capetown_ujsuxq.jpg",
        },
        {
          month: "November",
          title: "Buenos Aires, Argentina",
          description:
            "Spring in the city — tango, cultural life and excellent dining options.",
          bestFor: ["Culture", "Nightlife", "Food & Wine"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646242/buenos-aires_zvlnvn.webp",
        },
        {
          month: "November",
          title: "New Zealand (North Island)",
          description:
            "Spring gardens, long coastal drives and remote-work friendly cafés.",
          bestFor: ["Nature", "Road Trip", "Remote Work"],
          travelerType: "Remote Work",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647980/new-zealand_cgowbc.webp",
        },
        {
          month: "November",
          title: "Maldives (Shoulder Season)",
          description:
            "Quieter resorts, calm seas and excellent conditions for diving and romance.",
          bestFor: ["Beach", "Luxury", "Relaxation"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647754/maldives_qsxcgk.webp",
        },
        {
          month: "November",
          title: "Sydney, Australia (Spring)",
          description:
            "Events, harbour life and beaches — good for culture and outdoor activities.",
          bestFor: ["Festival", "City", "Beach"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646379/sydney-bali-flight_znasyz.webp",
        },
        {
          month: "November",
          title: "Hawaii (Oahu)",
          description:
            "Surfing, beaches and family-friendly resorts — warm Pacific escape.",
          bestFor: ["Beach", "Family", "Adventure"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648070/oahu_dcq8t8.jpg",
        },
        {
          month: "November",
          title: "Chiang Mai, Thailand (Festivals)",
          description:
            "Lantern festivals and temple ceremonies make for a magical cultural visit.",
          bestFor: ["Festival", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648623/thailand-chiang-mai_b7o8cd.webp",
        },
        {
          month: "November",
          title: "Fes, Morocco",
          description:
            "Historic medina, artisan markets and heritage architecture for curious travellers.",
          bestFor: ["Culture", "Shopping", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646423/fes_dwag0p.jpg",
        },
        {
          month: "November",
          title: "Machu Picchu, Peru (Shoulder)",
          description:
            "Cooler, clearer trekking weather for Inca Trail and ancient mountain scenery.",
          bestFor: ["Adventure", "Hiking", "Culture"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647219/machu-picchu_a3oz9v.jpg",
        },
        {
          month: "November",
          title: "Serengeti, Tanzania (Safari)",
          description:
            "Prime safari opportunities with great wildlife viewing as dry season approaches.",
          bestFor: ["Safari", "Wildlife", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648511/serengeti_pul2fk.webp",
        },
        {
          month: "November",
          title: "Masai Mara, Kenya (Late Season)",
          description:
            "Outstanding safari lodges and big-game viewing in comfortable weather.",
          bestFor: ["Safari", "Wildlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647791/masai-mara_mhqbki.webp",
        },
        {
          month: "November",
          title: "Belize (Barrier Reef)",
          description:
            "Diving, reef exploration and jungle lodges — excellent for marine and wildlife lovers.",
          bestFor: ["Wildlife", "Adventure", "Beach"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646216/belize_wibk9p.jpg",
        },
        {
          month: "November",
          title: "Sri Lanka (South Coast)",
          description:
            "Golden beaches, tea country and cultural sites — warm and varied November options.",
          bestFor: ["Beach", "Culture", "Relaxation"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648539/srilanka_qdsfqv.webp",
        },
      ],
    },
    {
      id: 12,
      name: "December",
      note: "Holiday markets, winter sports and warm escapes",
      top: [
        {
          title: "Vienna, Austria",
          description:
            "Christmas markets, classical concerts and snowy charm — festive December.",
          bestFor: ["Festival", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648687/vienna_rtxovq.webp",
        },
        {
          title: "Strasbourg, France",
          description:
            "Famous Christmas markets, lights and Alsace charm — holiday gem.",
          bestFor: ["Festival", "Family", "Culture"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648547/strasbourg_ec2u5f.jpg",
        },
        {
          title: "Lapland, Finland",
          description:
            "Northern lights, reindeer and Santa — magical Arctic holiday.",
          bestFor: ["Family", "Adventure", "Nature"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646858/lapland_unetxq.jpg",
        },
        {
          title: "New York City, USA",
          description:
            "Broadway, shopping and holiday lights — festive metropolis.",
          bestFor: ["City", "Shopping", "Festival"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648069/nyc-june_qk2zu1.jpg",
        },
        {
          title: "Dubai, UAE",
          description:
            "New Year’s Eve, luxury resorts and warm sun — glamorous December.",
          bestFor: ["Luxury", "Events", "City"],
          travelerType: "Luxury",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646385/dubai_geckji.webp",
        },
        {
          title: "Maldives",
          description:
            "Dry season, overwater villas and diving — perfect December luxury.",
          bestFor: ["Beach", "Luxury", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768645849/ayada-maldives-dining_nprh5j.jpg",
        },
        {
          title: "Barbados, Caribbean",
          description:
            "Tropical beaches, culture and luxury resorts — holiday island escape.",
          bestFor: ["Beach", "Luxury", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646207/barbados_fcttml.jpg",
        },
        {
          title: "Zermatt, Switzerland",
          description:
            "Skiing, chalets and alpine scenery — iconic winter sports trip.",
          bestFor: ["Skiing", "Luxury", "Adventure"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648863/zermatt_z9z0t6.webp",
        },
        {
          title: "Tokyo, Japan",
          description:
            "Illuminations, shopping and food — December urban adventure.",
          bestFor: ["Shopping", "Culture", "Festival"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646359/la-tokyo-flight_kflvyv.webp",
        },
        {
          title: "Sydney, Australia",
          description:
            "Beaches, fireworks and summer vibes — iconic New Year celebration.",
          bestFor: ["Festival", "Beach", "Events"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648555/sydney_rky2hw.jpg",
        },
        {
          title: "Quebec City, Canada",
          description:
            "Snowy streets, winter carnival and cozy inns — festive holiday city.",
          bestFor: ["Festival", "Culture", "Winter"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648308/quebec_ttlkih.jpg",
        },
        {
          title: "London, UK",
          description:
            "Christmas lights, theater and markets — festive British capital.",
          bestFor: ["Festival", "Shopping", "Culture"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646920/london_t3augk.jpg",
        },
        {
          title: "Bali, Indonesia",
          description:
            "Dry season, beaches and spiritual retreats — tropical holiday escape.",
          bestFor: ["Beach", "Wellness", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646202/bali_zmtydi.jpg",
        },
        {
          title: "Cancun, Mexico",
          description:
            "Resorts, nightlife and beaches — sunny holiday party spot.",
          bestFor: ["Beach", "Nightlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646244/cancun_a7lmrp.webp",
        },
        {
          title: "Salzburg, Austria",
          description:
            "Christmas markets, concerts and snowy Alps — festive cultural gem.",
          bestFor: ["Festival", "Music", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648363/salzburg_gsx3k6.jpg",
        },
        {
          title: "South Africa (Kruger)",
          description:
            "Safari, wildlife and luxury lodges — December African adventure.",
          bestFor: ["Safari", "Wildlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646825/kruger_qy4iik.webp",
        },
        {
          title: "Paris, France",
          description:
            "Christmas lights, patisseries and romance — holiday in Paris.",
          bestFor: ["Romance", "Festival", "Shopping"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648120/paris-tower_bwhktn.webp",
        },
        {
          title: "Hawaii (Maui)",
          description:
            "Beaches, whales and aloha culture — warm December paradise.",
          bestFor: ["Beach", "Nature", "Family"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647791/maui_y0vwzf.webp",
        },
        {
          title: "Costa Rica",
          description:
            "Rainforests, beaches and eco-lodges — December adventure trip.",
          bestFor: ["Adventure", "Nature", "Wellness"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646321/costa-rica_wuom08.jpg",
        },
        {
          title: "Berlin, Germany",
          description:
            "Christmas markets, nightlife and culture — holiday city escape.",
          bestFor: ["Festival", "Nightlife", "Culture"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646222/berlin_cuy0fg.webp",
        },
        {
          title: "Hong Kong",
          description:
            "Festive lights, shopping and dim sum — December Asian hub.",
          bestFor: ["Shopping", "Food & Wine", "City"],
          travelerType: "Solo",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646504/hong-kong_d7rler.jpgg",
        },
        {
          title: "Marrakech, Morocco",
          description:
            "Souks, gardens and warm winter sun — exotic December trip.",
          bestFor: ["Culture", "Shopping", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647755/marrakech_tdrdyj.webp",
        },
        {
          title: "Rome, Italy",
          description:
            "Christmas traditions, Vatican and piazzas — holiday Eternal City.",
          bestFor: ["Culture", "Festival", "History"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646382/toronto-rome-flight_knccwh.webp",
        },
        {
          title: "Phuket, Thailand",
          description:
            "Sunny beaches, nightlife and tropical fun — festive Thai escape.",
          bestFor: ["Beach", "Nightlife", "Romance"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648647/thailand-phuket_st9eg1.webp",
        },
        {
          title: "Reykjavik, Iceland",
          description:
            "Northern lights, hot springs and snow — December wonderland.",
          bestFor: ["Adventure", "Nature", "Wellness"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648361/reykjavik_b2ij5c.webp",
        },
        {
          title: "Dubai, UAE",
          description:
            "Events, luxury and fireworks — December desert glamour.",
          bestFor: ["Luxury", "Events", "Shopping"],
          travelerType: "Luxury",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646382/dubai_j8xryu.jpg",
        },
        {
          title: "Prague, Czech Republic",
          description:
            "Snowy castles, markets and romance — winter fairy-tale.",
          bestFor: ["Romance", "Festival", "Culture"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648262/prague_usgcjq.webp",
        },
        {
          title: "Tahiti, French Polynesia",
          description: "Beaches, diving and luxury — holiday island dream.",
          bestFor: ["Beach", "Luxury", "Wellness"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648556/tahiti_stwzuo.jpg",
        },
        {
          title: "Chicago, USA",
          description:
            "Christmas markets, jazz and snowy streets — festive city break.",
          bestFor: ["Festival", "Music", "City"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646292/chicago_dw3btc.jpg",
        },
        {
          month: "December",
          title: "Whistler, Canada",
          description:
            "World-class skiing, après-ski nightlife and luxury chalets in peak winter.",
          bestFor: ["Skiing", "Winter", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648697/whistler_hf0kzu.webp",
        },
        {
          month: "December",
          title: "Mauritius",
          description:
            "Warm beaches, luxury stays and honeymoon-perfect romance in the Indian Ocean.",
          bestFor: ["Honeymoon", "Summer", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768647794/mauritius_inzszl.webp",
        },
        {
          month: "December",
          title: "Swiss Alps Wellness Spas",
          description:
            "Snowy landscapes with luxury spas and hot springs — winter wellness escape.",
          bestFor: ["Wellness", "Winter", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648549/swiss-alps-summer_ulsqnt.jpg",
        },
        {
          month: "December",
          title: "Patagonia, Chile",
          description:
            "Southern hemisphere summer trekking, glaciers and dramatic landscapes.",
          bestFor: ["Summer", "Adventure", "Road Trip"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648167/patagonia_pddckz.webp",
        },
        {
          month: "December",
          title: "Kruger National Park, South Africa",
          description:
            "Great safari lodges, wildlife drives and sunny summer weather.",
          bestFor: ["Safari", "Wildlife", "Summer"],
          travelerType: "Families",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646825/kruger_qy4iik.webp",
        },

        {
          title: "Bangkok, Thailand",
          description:
            "Festivals, nightlife and temples — December tropical energy.",
          bestFor: ["Nightlife", "Festival", "Culture"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648634/thailand-bangkok_bxlt3j.webp",
        },
        {
          month: "December",
          title: "Vienna, Austria (Christmas Markets)",
          description:
            "Iconic markets, classical concerts and festive café culture — classic European December trip.",
          bestFor: ["Festival", "Culture", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648687/vienna_rtxovq.webp",
        },
        {
          month: "December",
          title: "Strasbourg, France (Christmas)",
          description:
            "Alsace charm, illuminated streets and world-famous markets — perfect family holiday vibe.",
          bestFor: ["Festival", "Family", "Culture"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648547/strasbourg_ec2u5f.jpg",
        },
        {
          month: "December",
          title: "Lapland, Finland (Northern Lights & Santa)",
          description:
            "Reindeer, aurora hunts and family winter experiences in the Arctic.",
          bestFor: ["Family", "Adventure", "Nature"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646861/lapland_bbewsr.webp",
        },
        {
          month: "December",
          title: "New York City, USA (Holiday Season)",
          description:
            "Broadway shows, holiday lights and world-class shopping make for an iconic December visit.",
          bestFor: ["City", "Festival", "Shopping"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648069/nyc-june_qk2zu1.jpg",
        },
        {
          month: "December",
          title: "Dubai, UAE (NYE & Sun)",
          description:
            "Spectacular New Year events, warm weather and luxury hotels for festive celebrations.",
          bestFor: ["Luxury", "Events", "City"],
          travelerType: "Luxury",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646382/dubai_j8xryu.jpg",
        },
        {
          month: "December",
          title: "Maldives",
          description:
            "Peak dry season, overwater villas and calm seas — premium honeymoon choice.",
          bestFor: ["Beach", "Luxury", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646214/baros-maldives-water-villa_koflnd.webp",
        },
        {
          month: "December",
          title: "Barbados (Caribbean)",
          description:
            "Warm holiday islands, coral beaches and upscale resorts for family or luxury escapes.",
          bestFor: ["Beach", "Family", "Luxury"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646207/barbados_fcttml.jpg",
        },
        {
          month: "December",
          title: "Zermatt, Switzerland (Ski)",
          description:
            "Skiing, chalets and alpine luxury near the Matterhorn — classic winter sports holiday.",
          bestFor: ["Skiing", "Luxury", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648801/zermatt-june_vlvwoo.jpg",
        },
        {
          month: "December",
          title: "Koh Samui, Thailand",
          description:
            "Dry-season islands with boutique resorts and wellness retreats — warm escape in December.",
          bestFor: ["Beach", "Wellness", "Luxury"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648639/thailand-koh-samui_vbnfl0.jpg",
        },
        {
          month: "December",
          title: "Seychelles",
          description:
            "Private islands, calm seas and high-end resorts — secluded holiday luxury.",
          bestFor: ["Beach", "Luxury", "Romance"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648555/sychelles_jktsv0.webp",
        },
        {
          month: "December",
          title: "Aspen, USA (Ski Season)",
          description:
            "Premier North American skiing, high-end chalets and lively après-ski.",
          bestFor: ["Skiing", "Luxury", "Winter"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646179/aspen_msg8ty.jpg",
        },
        {
          month: "December",
          title: "St. Moritz, Switzerland",
          description:
            "Iconic winter resort with skiing, designer shops and alpine luxury experiences.",
          bestFor: ["Skiing", "Luxury", "Winter"],
          travelerType: "Luxury",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648537/st-moritz-dec_gpxp1e.jpg",
        },
        {
          month: "December",
          title: "Tromsø, Norway (Aurora)",
          description:
            "Northern lights viewing, snowy excursions and Arctic culture.",
          bestFor: ["Nature", "Adventure", "Winter"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648664/tromso-dec_ahk9hw.jpg",
        },
        {
          month: "December",
          title: "Niseko, Japan (Ski)",
          description:
            "Exceptional powder skiing and winter onsens — excellent early-winter snow conditions.",
          bestFor: ["Skiing", "Adventure", "Winter"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648034/niseko-dec_hlunzn.jpg",
        },
        {
          month: "December",
          title: "Costa Rica (Pacific Coast)",
          description:
            "Dry season wildlife, surf and tropical nature for adventurous families and couples.",
          bestFor: ["Wildlife", "Adventure", "Nature"],
          travelerType: "Adventure",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646321/costa-rica_wuom08.jpg",
        },
        {
          month: "December",
          title: "Canary Islands (Winter Sun)",
          description:
            "Mild winter sunshine, coastal hiking and family resorts for a sun break without long haul.",
          bestFor: ["Beach", "Family", "Nature"],
          travelerType: "Family",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646242/canary-islands_eevcto.webp",
        },
        {
          month: "December",
          title: "Cancún, Mexico",
          description:
            "Resorts, beaches and lively nightlife — popular December getaways for sun seekers.",
          bestFor: ["Beach", "Nightlife", "Luxury"],
          travelerType: "Groups",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646244/cancun_a7lmrp.webp",
        },
        {
          month: "December",
          title: "Iceland (Blue Lagoon & Aurora)",
          description:
            "Combine thermal-spa wellness and aurora hunting for an active-relaxing winter trip.",
          bestFor: ["Wellness", "Nature", "Adventure"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768646526/iceland-april_ow7o9q.webp",
        },
        {
          month: "December",
          title: "Transylvania, Romania (Festive & Historic)",
          description:
            "Historic towns, winter castle ambience and local traditions for a unique holiday experience.",
          bestFor: ["History", "Culture", "Winter"],
          travelerType: "Couples",
          image:
            "https://res.cloudinary.com/dxqnpsj8k/image/upload/v1768648665/transylvania_hlchjf.jpg",
        },
      ],
    },
  ];

  // ===== Helpers & initial state =====
  const monthsEl = document.getElementById("months");
  const experiencesEl = document.getElementById("experiences");
  const resultsGrid = document.getElementById("resultsGrid");
  const searchInput = document.getElementById("search");
  const partySelect = document.getElementById("party");
  const numTravInput = document.getElementById("numTrav");
  const resetBtn = document.getElementById("resetFilters");
  const monthNote = document.getElementById("month-note");
  const itemListJsonLdEl = document.getElementById("itemListJsonLd");

  // default month = current month (1-12), fallback to 9 (September) for SEO pre-render match
  const now = new Date();
  let selectedMonthId = (now && now.getMonth && now.getMonth() + 1) || 9;
  if (!MONTHS_DATA.find((m) => m.id === selectedMonthId)) selectedMonthId = 9;

  let selectedExperiences = [];
  let searchText = "";
  let partyType = "any";
  let numTravelers = Number(numTravInput.value || 2);

  // Utility: create button element for month or experience
  function createBtn(text, classes = []) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = text;
    b.className = classes.join(" ");
    return b;
  }

  // Render month buttons
  function renderMonthButtons() {
    monthsEl.innerHTML = "";
    MONTHS_DATA.forEach((m) => {
      const btn = createBtn(m.name, ["month-btn"]);
      btn.setAttribute("data-month-id", m.id);
      btn.setAttribute(
        "aria-pressed",
        m.id === selectedMonthId ? "true" : "false",
      );
      if (m.id === selectedMonthId) btn.classList.add("active");
      btn.addEventListener("click", () => {
        selectedMonthId = m.id;
        // update month UI
        updateUI();
      });
      monthsEl.appendChild(btn);
    });
  }

  // Render experience buttons
  function renderExperienceButtons() {
    experiencesEl.innerHTML = "";
    EXPERIENCES.forEach((exp) => {
      const b = createBtn(exp, ["exp-btn"]);
      b.setAttribute("data-exp", exp);
      if (selectedExperiences.includes(exp)) b.classList.add("active");
      b.addEventListener("click", () => {
        if (selectedExperiences.includes(exp)) {
          selectedExperiences = selectedExperiences.filter((x) => x !== exp);
        } else {
          selectedExperiences.push(exp);
        }
        updateUI();
      });
      experiencesEl.appendChild(b);
    });
  }

  // Filter logic (copy of React version's logic)
  function filterPlacesForCurrentMonth() {
    const monthObj = MONTHS_DATA.find((m) => m.id === selectedMonthId);
    if (!monthObj) return [];
    const q = searchText.trim().toLowerCase();
    return monthObj.top.filter((place) => {
      if (q) {
        const inText = [
          place.title,
          place.description,
          (place.bestFor || []).join(" "),
        ]
          .join(" ")
          .toLowerCase();
        if (!inText.includes(q)) return false;
      }
      // experiences (OR logic)
      if (selectedExperiences.length) {
        const matches = selectedExperiences.some((e) =>
          (place.bestFor || [])
            .map((b) => b.toLowerCase())
            .includes(e.toLowerCase()),
        );
        if (!matches) return false;
      }
      // party type logic
      if (partyType !== "any") {
        if (partyType === "family" && !(place.bestFor || []).includes("Family"))
          return false;
        if (
          partyType === "solo" &&
          !["Adventure", "Nature", "Culture", "Remote Work"].some((t) =>
            (place.bestFor || []).includes(t),
          )
        )
          return false;
        if (
          partyType === "couple" &&
          !["Romance", "Luxury", "Beach"].some((t) =>
            (place.bestFor || []).includes(t),
          )
        )
          return false;
        // group left permissive (no strict filtering)
      }
      // numTravelers is optional — left for future improvements
      return true;
    });
  }

  // Render cards grid from array of place objects
  function renderCards(places) {
    resultsGrid.innerHTML = "";
    if (!places || places.length === 0) {
      const empty = document.createElement("div");
      empty.className = "card";
      empty.style.textAlign = "center";
      empty.style.padding = "20px";
      empty.innerHTML =
        '<p style="color:var(--muted)">No results found. Try clearing filters or broaden your search.</p>';
      resultsGrid.appendChild(empty);
      return;
    }
    places.forEach((place) => {
      const art = document.createElement("article");
      art.className = "card";
      // image
      const img = document.createElement("img");
      img.loading = "lazy";
      img.alt = place.title + " - " + place.description;
      // NOTE: replace these unsplash queries with your CDN images in production
      img.src = `${place.image}?w=400&h=250&fit=crop`;
      art.appendChild(img);
      // body
      const body = document.createElement("div");
      body.className = "card-body";
      const h3 = document.createElement("h3");
      h3.textContent = place.title;
      const p = document.createElement("p");
      p.textContent = place.description;
      const tags = document.createElement("div");
      tags.className = "tags";
      (place.bestFor || []).forEach((b) => {
        const s = document.createElement("span");
        s.className = "tag";
        s.textContent = b;
        tags.appendChild(s);
      });
      const footer = document.createElement("div");
      footer.className = "card-footer";
      const link = document.createElement("a");
      link.className = "link";
      link.textContent = "Explore details";
      link.href = `${VIATOR_BASE_URL}?text=${encodeURIComponent(
        place.title,
      )}&${VIATOR_PARAMS}`;
      link.target = "_blank";
      link.rel = "sponsored noopener";

      const bestForText = document.createElement("div");
      bestForText.style.fontSize = "12px";
      bestForText.style.color = "#94a3b8";
      bestForText.textContent =
        "Best for: " +
        (place.bestFor ? place.bestFor.slice(0, 2).join(", ") : "—");
      footer.appendChild(link);
      footer.appendChild(bestForText);

      body.appendChild(h3);
      body.appendChild(p);
      body.appendChild(tags);
      body.appendChild(footer);
      art.appendChild(body);
      resultsGrid.appendChild(art);
    });
  }

  // Update ItemList JSON-LD dynamically for current month
  // Update ItemList + FAQ JSON-LD dynamically for current month
  function updateItemListJsonLd() {
    const month = MONTHS_DATA.find((m) => m.id === selectedMonthId);
    if (!month) return;

    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Top ${month.name} travel picks - Where should I travel this next?`,
      itemListElement: month.top.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: `https://paradize.life/destinations/${encodeURIComponent(p.slug)}`,
        sameAs: `${VIATOR_BASE_URL}?text=${encodeURIComponent(
          p.title,
        )}&${VIATOR_PARAMS}`,
      })),
    };

    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I choose the best month to travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on climate and events: head south for warm winter escapes, check our month filters for festivals, or choose summer destinations for long sunny days.",
          },
        },
        {
          "@type": "Question",
          name: "Can I filter destinations by experience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Use the experience filters to find beaches, culture, wellness, wildlife, skiing and more — tailored to your style of travel.",
          },
        },
        {
          "@type": "Question",
          name: "Are the recommendations family-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many destinations are tagged 'Family' — simply choose 'Family' in the traveler type filter to highlight kid-friendly and group-friendly spots.",
          },
        },
        {
          "@type": "Question",
          name: "Do these links include affiliate offers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. 'Explore details' links take you to our affiliate partners such as Viator, where you can book tours and experiences. This supports Paradize at no extra cost.",
          },
        },
      ],
    };

    // Combine both into one array
    const combined = [itemList, faq];

    // Inject or replace script
    if (itemListJsonLdEl) {
      itemListJsonLdEl.textContent = JSON.stringify(combined, null, 2);
    } else {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = "itemListJsonLd";
      s.textContent = JSON.stringify(combined, null, 2);
      document.head.appendChild(s);
    }
  }

  // Update header month note and active states
  function updateMonthNote() {
    const month = MONTHS_DATA.find((m) => m.id === selectedMonthId);
    if (month) {
      monthNote.innerHTML = `<strong>${month.name}</strong> — <span>${month.note}</span>`;
    }
  }

  // Main update method
  function updateUI() {
    // update month buttons active state
    Array.from(document.querySelectorAll(".month-btn")).forEach((btn) => {
      const mid = Number(btn.getAttribute("data-month-id"));
      if (mid === selectedMonthId) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    });
    // update experience active states
    Array.from(document.querySelectorAll(".exp-btn")).forEach((btn) => {
      const e = btn.getAttribute("data-exp");
      if (selectedExperiences.includes(e)) btn.classList.add("active");
      else btn.classList.remove("active");
    });

    // compute filters
    const places = filterPlacesForCurrentMonth();
    renderCards(places);
    updateItemListJsonLd();
    updateMonthNote();
  }

  // Event handlers
  searchInput.addEventListener("input", (e) => {
    searchText = e.target.value;
    updateUI();
  });

  partySelect.addEventListener("change", (e) => {
    partyType = e.target.value;
    updateUI();
  });

  numTravInput.addEventListener("change", (e) => {
    numTravelers = Number(e.target.value || 1);
    // currently not used in filtering but kept for future
  });

  resetBtn.addEventListener("click", () => {
    selectedExperiences = [];
    searchText = "";
    searchInput.value = "";
    partyType = "any";
    partySelect.value = "any";
    numTravelers = 2;
    numTravInput.value = 2;
    updateUI();
  });

  // Initial render
  renderMonthButtons();
  renderExperienceButtons();
  updateUI();

  // Fill current year
  document.getElementById("year").textContent = new Date().getFullYear();
})();

// Sidebar toggle (mobile)
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("leftSidebar");
  const btn = document.getElementById("sidebarToggle");

  if (btn && sidebar) {
    btn.addEventListener("click", function () {
      const open = sidebar.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // close when clicking outside on mobile
    document.addEventListener("click", function (e) {
      if (window.innerWidth < 980 && sidebar.classList.contains("open")) {
        if (!sidebar.contains(e.target) && !btn.contains(e.target)) {
          sidebar.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
        }
      }
    });
  }

  // viator banner link to always open a search on load:
  const viatorBanner = document.getElementById("viatorBannerLink");
  if (viatorBanner) {
    viatorBanner.href = `${VIATOR_BASE_URL}?text=&${VIATOR_PARAMS}`; // empty search -> viator homepage with PID
    viatorBanner.target = "_blank";
    viatorBanner.rel = "sponsored noopener noreferrer";
  }
});

// tour.js
(function () {
  // ✅ Only activate this script on the "where-to-visit-next.html" page
  const isWhereNextPage = window.location.pathname.includes(
    "/travellers/where-next",
  );

  if (!isWhereNextPage) {
    console.log("where-next.js skipped: not on /travellers/where-next");
    return; // ❌ Skip running on other pages (no tour guide, no UI)
  }
  const STORAGE_KEY = "paradize_tour_hide";

  const steps = [
    {
      title: "Welcome!",
      text: "This quick guide shows you how to use the page. You can skip at any time.",
    },
    {
      title: "Pick a month",
      text: "Click on a month to load curated destinations.",
      selector: ".months",
    },
    {
      title: "Search keywords",
      text: "Type a city, keyword, or experience here.",
      selector: ".search-input",
    },
    {
      title: "Filter by experience",
      text: "Tap one or more experiences (Beach, Culture, Wellness, etc.) to refine.",
      selector: ".experience-list",
    },
    {
      title: "Traveler type",
      text: "Choose whether you’re traveling solo, as a couple, with family, or in a group.",
      selector: ".filters",
    },
    {
      title: "See results",
      text: "Scroll through the cards and click 'Explore details' for more info.",
      selector: ".grid",
    },
    {
      title: "That’s it!",
      text: "Enjoy exploring! You can restart this guide anytime with the ? button.",
    },
  ];

  let overlay,
    card,
    index = 0;

  function init() {
    overlay = document.createElement("div");
    overlay.className = "tour-overlay";
    overlay.style.display = "none";
    document.body.appendChild(overlay);

    createHelpButton();

    // 🔹 Only auto-start if user hasn’t opted out
    if (!localStorage.getItem(STORAGE_KEY)) {
      startTour();
    }
  }

  function startTour() {
    index = 0;
    overlay.style.display = "block";
    renderStep();
    document.addEventListener("keydown", keyHandler);
  }

  function endTour() {
    overlay.style.display = "none";
    if (card) card.remove();
    document.removeEventListener("keydown", keyHandler);

    // 🔹 Clear highlights
    document.querySelectorAll(".tour-highlight").forEach((el) => {
      el.classList.remove("tour-highlight");
    });
  }

  function renderStep() {
    if (card) card.remove();

    const step = steps[index];
    card = document.createElement("div");
    card.className = "tour-card";

    // Content
    const h3 = document.createElement("h3");
    h3.textContent = step.title;
    card.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = step.text;
    card.appendChild(p);

    // Controls
    const controls = document.createElement("div");
    controls.className = "tour-controls";

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "‹ Prev";
    prevBtn.className = "tour-btn ghost";
    prevBtn.disabled = index === 0;
    prevBtn.onclick = () => {
      index--;
      renderStep();
    };

    const nextBtn = document.createElement("button");
    nextBtn.textContent = index === steps.length - 1 ? "Finish" : "Next ›";
    nextBtn.className = "tour-btn primary";
    nextBtn.onclick = () => {
      if (index === steps.length - 1) {
        if (document.getElementById("dont-show-again")?.checked) {
          localStorage.setItem(STORAGE_KEY, "1"); // Remember choice
        }
        endTour();
      } else {
        index++;
        renderStep();
      }
    };

    const skipBtn = document.createElement("button");
    skipBtn.textContent = "Skip";
    skipBtn.className = "tour-btn ghost";
    skipBtn.onclick = () => {
      if (document.getElementById("dont-show-again")?.checked) {
        localStorage.setItem(STORAGE_KEY, "1");
      }
      endTour();
    };

    controls.append(prevBtn, nextBtn, skipBtn);
    card.appendChild(controls);

    // 🔹 Add "Don’t show again" checkbox on first and last step
    if (index === 0 || index === steps.length - 1) {
      const optOut = document.createElement("label");
      optOut.className = "tour-optout";
      optOut.innerHTML = `
        <input type="checkbox" id="dont-show-again" />
        Don’t show this guide again
      `;
      card.appendChild(optOut);
    }

    document.body.appendChild(card);

    positionCard(step);
  }

  // function positionCard(step) {
  //   // 🔹 Remove old highlights
  //   document.querySelectorAll(".tour-highlight").forEach((el) => {
  //     el.classList.remove("tour-highlight");
  //   });

  //   card.style.top = "";
  //   card.style.left = "";
  //   card.style.transform = "";
  //   card.style.position = "absolute";
  //   card.style.removeProperty("--arrow-dir");

  //   // Remove old arrow
  //   card.style.setProperty("--arrow-dir", "none");

  //   if (step.selector) {
  //     const el = document.querySelector(step.selector);
  //     if (el) {
  //       // 🔹 Add highlight glow
  //       el.classList.add("tour-highlight");

  //       const rect = el.getBoundingClientRect();
  //       const above = rect.top > window.innerHeight / 2;

  //       if (above) {
  //         // Place above element
  //         card.style.top = `${
  //           window.scrollY + rect.top - card.offsetHeight - 16
  //         }px`;
  //         card.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
  //         card.style.transform = "translateX(-50%)";
  //         card.setAttribute("data-arrow", "down");
  //       } else {
  //         // Place below element
  //         card.style.top = `${window.scrollY + rect.bottom + 16}px`;
  //         card.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
  //         card.style.transform = "translateX(-50%)";
  //         card.setAttribute("data-arrow", "up");
  //       }

  //       // 🔹 Scroll screen so element is visible
  //       el.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //         inline: "center",
  //       });

  //       // 🔹 Also scroll screen so tour card is visible
  //       setTimeout(() => {
  //         card.scrollIntoView({
  //           behavior: "smooth",
  //           block: "nearest",
  //           inline: "nearest",
  //         });
  //       }, 400); // slight delay so it runs after element scroll
  //     } else {
  //       centerCard();
  //       // Ensure card is visible even if centered
  //       card.scrollIntoView({ behavior: "smooth", block: "center" });
  //     }
  //   } else {
  //     centerCard();
  //     // Ensure card is visible
  //     card.scrollIntoView({ behavior: "smooth", block: "center" });
  //   }
  // }

  function positionCard(step) {
    // 🔹 Remove old highlights
    document.querySelectorAll(".tour-highlight").forEach((el) => {
      el.classList.remove("tour-highlight");
    });

    card.style.top = "";
    card.style.left = "";
    card.style.transform = "";
    card.style.position = "absolute";
    card.style.removeProperty("--arrow-dir");

    // Remove old arrow
    card.style.setProperty("--arrow-dir", "none");

    if (step.selector) {
      const el = document.querySelector(step.selector);
      if (el) {
        el.classList.add("tour-highlight");

        const rect = el.getBoundingClientRect();
        const above = rect.top > window.innerHeight / 2;

        if (above) {
          card.style.top = `${
            window.scrollY + rect.top - card.offsetHeight - 16
          }px`;
          card.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
          card.style.transform = "translateX(-50%)";
          card.setAttribute("data-arrow", "down");
        } else {
          card.style.top = `${window.scrollY + rect.bottom + 16}px`;
          card.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
          card.style.transform = "translateX(-50%)";
          card.setAttribute("data-arrow", "up");
        }

        // 🔹 Spotlight effect around element
        const padding = 12; // extra space around element
        const spotlightX = rect.left - padding;
        const spotlightY = rect.top - padding;
        const spotlightW = rect.width + padding * 2;
        const spotlightH = rect.height + padding * 2;

        overlay.classList.add("spotlight");
        overlay.style.clipPath = `polygon(
        0 0,
        100% 0,
        100% 100%,
        0 100%,
        0 0,
        ${spotlightX}px ${spotlightY}px,
        ${spotlightX + spotlightW}px ${spotlightY}px,
        ${spotlightX + spotlightW}px ${spotlightY + spotlightH}px,
        ${spotlightX}px ${spotlightY + spotlightH}px,
        ${spotlightX}px ${spotlightY}px
      )`;

        // 🔹 Scroll element and card into view
        el.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        setTimeout(() => {
          card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 400);
      } else {
        centerCard();
        overlay.style.clipPath = "none"; // no spotlight
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      centerCard();
      overlay.style.clipPath = "none"; // no spotlight
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function centerCard() {
    card.style.position = "fixed";
    card.style.top = "50%";
    card.style.left = "50%";
    card.style.transform = "translate(-50%, -50%)";
  }

  function keyHandler(e) {
    if (e.key === "Escape") endTour();
    if (e.key === "ArrowRight" && index < steps.length - 1) {
      index++;
      renderStep();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      index--;
      renderStep();
    }
  }

  function createHelpButton() {
    const btn = document.createElement("button");
    btn.className = "tour-help-btn";
    btn.textContent = "?";
    btn.title = "Restart guide";
    btn.onclick = () => startTour();
    document.body.appendChild(btn);
  }

  document.addEventListener("DOMContentLoaded", init);
})();

// --------------------------
// Europe Destinations Sidebar & TOC Script
// --------------------------
(function () {
  const toc = document.getElementById("tocLinks");
  const sections = Array.from(document.querySelectorAll("section.dest"));
  if (!toc || sections.length === 0) return; // Prevent errors if not on the Europe page

  // Generate dynamic TOC links
  function makeToc() {
    toc.innerHTML = "";
    sections.forEach((s) => {
      const id = s.id;
      const titleEl = s.querySelector("h2");
      if (!titleEl) return;
      const title = titleEl.innerText.replace(/ —.*$/, "");
      const a = document.createElement("a");
      a.href = "#" + id;
      a.dataset.target = id;
      a.textContent = title;
      toc.appendChild(a);
    });
  }
  makeToc();

  // Filter functionality
  const filters = Array.from(document.querySelectorAll(".filter"));
  function getActiveFilters() {
    const state = {};
    filters.forEach((f) => {
      const key = f.dataset.key;
      state[key] = state[key] || [];
      if (f.checked) state[key].push(f.value);
    });
    return state;
  }

  function applyFilters() {
    const active = getActiveFilters();
    sections.forEach((s) => {
      const region = s.dataset.region;
      const type = s.dataset.type;
      const showRegion =
        active.region.length === 0 || active.region.includes(region);
      const showType = active.type.length === 0 || active.type.includes(type);
      s.style.display = showRegion && showType ? "" : "none";
    });
    // Update TOC links visibility
    Array.from(toc.querySelectorAll("a")).forEach((a) => {
      const target = document.getElementById(a.dataset.target);
      a.style.display = target && target.style.display !== "none" ? "" : "none";
    });
  }

  filters.forEach((f) => f.addEventListener("change", applyFilters));
  applyFilters();

  // Highlight active TOC link on scroll
  function highlightToc() {
    const links = Array.from(toc.querySelectorAll("a"));
    let activeSet = false;
    for (let s of sections) {
      if (s.style.display === "none") continue;
      const rect = s.getBoundingClientRect();
      if (rect.top <= 160 && rect.bottom > 160) {
        const link = toc.querySelector(`a[data-target="${s.id}"]`);
        links.forEach((l) => l.classList.remove("active"));
        if (link) {
          link.classList.add("active");
          activeSet = true;
        }
        break;
      }
    }
    if (!activeSet && location.hash) {
      const target = location.hash.replace("#", "");
      const link = toc.querySelector(`a[data-target="${target}"]`);
      links.forEach((l) => l.classList.remove("active"));
      if (link) link.classList.add("active");
    }
  }
  document.addEventListener("scroll", highlightToc, { passive: true });
  window.addEventListener("hashchange", highlightToc);
  highlightToc();

  // Smooth scroll for TOC clicks
  toc.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const id = e.target.dataset.target;
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "#" + id);
    }
  });

  // Accessibility (keyboard highlight)
  toc.querySelectorAll("a").forEach((a) => {
    a.addEventListener("focus", () => a.classList.add("active"));
    a.addEventListener("blur", () => a.classList.remove("active"));
  });

  // Ensure hash visibility after page load
  window.addEventListener("load", () => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const elem = document.getElementById(id);
      if (elem) {
        if (elem.style.display === "none") {
          document
            .querySelectorAll(".filter")
            .forEach((f) => (f.checked = true));
          applyFilters();
        }
        setTimeout(
          () => elem.scrollIntoView({ behavior: "smooth", block: "start" }),
          300,
        );
      }
    }
  });
})();
