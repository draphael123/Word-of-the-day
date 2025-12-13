// Word database - collection of interesting and fun words
const wordsDatabase = [
    {
        word: "Serendipity",
        pronunciation: "ser-ən-ˈdi-pə-tē",
        definition: "The occurrence and development of events by chance in a happy or beneficial way.",
        example: "Finding that rare book in the library was pure serendipity.",
        etymology: "Coined by Horace Walpole in 1754, from the Persian fairy tale 'The Three Princes of Serendip' (Serendip being the old name for Sri Lanka), whose heroes were always making discoveries by accident.",
        partOfSpeech: "noun"
    },
    {
        word: "Ephemeral",
        pronunciation: "i-ˈfe-mə-rəl",
        definition: "Lasting for a very short time; transient.",
        example: "The beauty of cherry blossoms is ephemeral, lasting only a few weeks each spring.",
        etymology: "From Greek 'ephemeros' meaning 'lasting only a day', from 'epi-' (upon) + 'hemera' (day).",
        partOfSpeech: "adjective"
    },
    {
        word: "Mellifluous",
        pronunciation: "me-ˈli-flə-wəs",
        definition: "Having a sweet, musical, pleasant sound; flowing like honey.",
        example: "The singer's mellifluous voice captivated the entire audience.",
        etymology: "From Latin 'mellifluus', from 'mel' (honey) + 'fluere' (to flow).",
        partOfSpeech: "adjective"
    },
    {
        word: "Petrichor",
        pronunciation: "ˈpe-trə-ˌkȯr",
        definition: "The pleasant earthy smell that accompanies the first rain after a period of warm, dry weather.",
        example: "After weeks of drought, the petrichor filled the air as the rain began to fall.",
        etymology: "Coined in 1964 by Australian researchers, from Greek 'petra' (stone) + 'ichor' (the fluid that flows in the veins of the gods in Greek mythology).",
        partOfSpeech: "noun"
    },
    {
        word: "Quixotic",
        pronunciation: "kwik-ˈsä-tik",
        definition: "Extremely idealistic; unrealistic and impractical.",
        example: "His quixotic quest to save every stray cat in the city was admirable but exhausting.",
        etymology: "From Don Quixote, the hero of Miguel de Cervantes' novel, who was known for his chivalrous but impractical adventures.",
        partOfSpeech: "adjective"
    },
    {
        word: "Luminous",
        pronunciation: "ˈlü-mə-nəs",
        definition: "Full of or shedding light; bright or shining, especially in the dark.",
        example: "The luminous moon cast an ethereal glow over the quiet lake.",
        etymology: "From Latin 'luminosus', from 'lumen' (light).",
        partOfSpeech: "adjective"
    },
    {
        word: "Resilient",
        pronunciation: "ri-ˈzil-yənt",
        definition: "Able to withstand or recover quickly from difficult conditions; springing back into shape.",
        example: "Despite facing numerous setbacks, she remained resilient and never gave up on her dreams.",
        etymology: "From Latin 'resilire' meaning 'to leap back, rebound', from 're-' (back) + 'salire' (to jump).",
        partOfSpeech: "adjective"
    },
    {
        word: "Eloquent",
        pronunciation: "ˈe-lə-kwənt",
        definition: "Fluent or persuasive in speaking or writing; clearly expressing or indicating something.",
        example: "Her eloquent speech moved the entire audience to tears.",
        etymology: "From Latin 'eloquens', from 'eloqui' meaning 'to speak out', from 'e-' (out) + 'loqui' (to speak).",
        partOfSpeech: "adjective"
    },
    {
        word: "Ineffable",
        pronunciation: "i-ˈne-fə-bəl",
        definition: "Too great or extreme to be expressed or described in words.",
        example: "The ineffable beauty of the sunset left them speechless.",
        etymology: "From Latin 'ineffabilis', from 'in-' (not) + 'effabilis' (speakable), from 'effari' (to speak out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Wanderlust",
        pronunciation: "ˈwän-dər-ˌləst",
        definition: "A strong desire to travel and explore the world.",
        example: "Her wanderlust led her to visit over fifty countries before turning thirty.",
        etymology: "From German 'Wanderlust', from 'wandern' (to hike, wander) + 'Lust' (desire, pleasure).",
        partOfSpeech: "noun"
    },
    {
        word: "Ubiquitous",
        pronunciation: "yü-ˈbi-kwə-təs",
        definition: "Present, appearing, or found everywhere.",
        example: "Smartphones have become ubiquitous in modern society.",
        etymology: "From Latin 'ubique' meaning 'everywhere', from 'ubi' (where).",
        partOfSpeech: "adjective"
    },
    {
        word: "Panacea",
        pronunciation: "pa-nə-ˈsē-ə",
        definition: "A solution or remedy for all difficulties or diseases; a cure-all.",
        example: "While exercise is beneficial, it's not a panacea for all health problems.",
        etymology: "From Greek 'panakeia', from 'pan-' (all) + 'akos' (remedy). In Greek mythology, Panacea was the goddess of universal remedy.",
        partOfSpeech: "noun"
    },
    {
        word: "Quintessential",
        pronunciation: "kwin-tə-ˈsen(t)-shəl",
        definition: "Representing the most perfect example of a quality or class.",
        example: "The small café was the quintessential Parisian bistro, complete with red awnings and outdoor seating.",
        etymology: "From 'quintessence' (the fifth and highest element in ancient and medieval philosophy), from Latin 'quinta essentia' (fifth essence).",
        partOfSpeech: "adjective"
    },
    {
        word: "Halcyon",
        pronunciation: "ˈhal-sē-ən",
        definition: "Denoting a period of time in the past that was idyllically happy and peaceful.",
        example: "She often reminisced about the halcyon days of her childhood summers.",
        etymology: "From Greek 'halkyon', referring to a mythical bird (the kingfisher) that was said to calm the waves. The phrase 'halcyon days' originally referred to a calm period in winter.",
        partOfSpeech: "adjective"
    },
    {
        word: "Perspicacious",
        pronunciation: "pər-spə-ˈkā-shəs",
        definition: "Having keen mental perception and understanding; discerning.",
        example: "The perspicacious detective noticed details that others had overlooked.",
        etymology: "From Latin 'perspicax' meaning 'sharp-sighted', from 'perspicere' (to look through, examine).",
        partOfSpeech: "adjective"
    },
    {
        word: "Ebullient",
        pronunciation: "i-ˈbu̇l-yənt",
        definition: "Cheerful and full of energy; bubbling with enthusiasm.",
        example: "Her ebullient personality made her the life of every party.",
        etymology: "From Latin 'ebullire' meaning 'to bubble out', from 'e-' (out) + 'bullire' (to boil).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sonder",
        pronunciation: "ˈsän-dər",
        definition: "The realization that each random passerby is living a life as vivid and complex as your own.",
        example: "Standing in the crowded train station, she experienced a moment of sonder, wondering about the stories of all the people around her.",
        etymology: "A neologism coined by John Koenig in his 'Dictionary of Obscure Sorrows' project.",
        partOfSpeech: "noun"
    },
    {
        word: "Vellichor",
        pronunciation: "ˈve-lə-ˌkȯr",
        definition: "The strange wistfulness of used bookstores.",
        example: "Walking through the dusty aisles, she felt a sense of vellichor, imagining all the hands that had held these books before.",
        etymology: "A neologism from 'vellum' (fine parchment) + 'ichor' (the ethereal fluid).",
        partOfSpeech: "noun"
    },
    {
        word: "Saudade",
        pronunciation: "sau-ˈdä-də",
        definition: "A deep emotional state of nostalgic or profound melancholic longing for something or someone that one cares for and loves.",
        example: "The old photograph filled him with saudade for the summers he spent at his grandmother's house.",
        etymology: "A Portuguese word with no direct English translation, derived from Latin 'solitas' (solitude).",
        partOfSpeech: "noun"
    },
    {
        word: "Zenith",
        pronunciation: "ˈzē-nəth",
        definition: "The time at which something is most powerful or successful; the highest point.",
        example: "The company reached its zenith in the early 2000s before facing financial difficulties.",
        etymology: "From Old French 'cenith', from Arabic 'samt' (path, way), specifically 'samt ar-ra's' (path over the head).",
        partOfSpeech: "noun"
    },
    {
        word: "Aplomb",
        pronunciation: "ə-ˈpläm",
        definition: "Self-confidence or assurance, especially when in a demanding situation.",
        example: "She handled the difficult interview questions with remarkable aplomb.",
        etymology: "From French 'aplomb' (perpendicularity, steadiness), from 'à plomb' (according to the plummet, straight up and down).",
        partOfSpeech: "noun"
    },
    {
        word: "Resplendent",
        pronunciation: "ri-ˈsplen-dənt",
        definition: "Attractive and impressive through being richly colorful or sumptuous.",
        example: "The bride looked resplendent in her white gown as she walked down the aisle.",
        etymology: "From Latin 'resplendere' meaning 'to shine out', from 're-' (intensive) + 'splendere' (to shine).",
        partOfSpeech: "adjective"
    },
    {
        word: "Ethereal",
        pronunciation: "i-ˈthir-ē-əl",
        definition: "Extremely delicate and light in a way that seems too perfect for this world.",
        example: "The ethereal music seemed to float through the air like a gentle breeze.",
        etymology: "From Latin 'aetherius', from Greek 'aitherios' (of the upper air), from 'aither' (upper air, ether).",
        partOfSpeech: "adjective"
    },
    {
        word: "Pulchritudinous",
        pronunciation: "pəl-krə-ˈtü-də-nəs",
        definition: "Having great physical beauty and appeal.",
        example: "The pulchritudinous landscape took their breath away.",
        etymology: "From Latin 'pulchritudo' (beauty), from 'pulcher' (beautiful).",
        partOfSpeech: "adjective"
    },
    {
        word: "Defenestration",
        pronunciation: "dē-ˌfe-nə-ˈstrā-shən",
        definition: "The act of throwing someone or something out of a window.",
        example: "The historical defenestration of Prague involved throwing officials out of windows.",
        etymology: "From Latin 'de-' (out of) + 'fenestra' (window). The word gained fame from the 'Defenestration of Prague' events in history.",
        partOfSpeech: "noun"
    },
    {
        word: "Susurrus",
        pronunciation: "sə-ˈsər-əs",
        definition: "A whispering or rustling sound.",
        example: "The susurrus of leaves in the autumn breeze was the only sound in the quiet forest.",
        etymology: "From Latin 'susurrus' (whisper, murmur), imitative of the sound.",
        partOfSpeech: "noun"
    },
    {
        word: "Limerence",
        pronunciation: "ˈli-mə-rən(t)s",
        definition: "The state of being infatuated or obsessed with another person, typically experienced involuntarily and characterized by a strong desire for reciprocation of one's feelings.",
        example: "During the early stages of their relationship, she experienced intense limerence, thinking about him constantly.",
        etymology: "Coined by psychologist Dorothy Tennov in 1977, from Latin 'limer' (to be mad, to rave).",
        partOfSpeech: "noun"
    },
    {
        word: "Sesquipedalian",
        pronunciation: "se-skwi-pə-ˈdāl-yən",
        definition: "Given to using long words; characterized by long words; long.",
        example: "His sesquipedalian speech made it difficult for the audience to follow his argument.",
        etymology: "From Latin 'sesquipedalis' (a foot and a half long), from 'sesqui-' (one and a half) + 'pes' (foot).",
        partOfSpeech: "adjective"
    },
    {
        word: "Solitude",
        pronunciation: "ˈsä-lə-ˌtüd",
        definition: "The state or situation of being alone; seclusion.",
        example: "She found peace in the solitude of the mountain cabin.",
        etymology: "From Latin 'solitudo', from 'solus' (alone).",
        partOfSpeech: "noun"
    },
    {
        word: "Vicarious",
        pronunciation: "vī-ˈker-ē-əs",
        definition: "Experienced in the imagination through the feelings or actions of another person.",
        example: "She felt a vicarious thrill watching her daughter perform on stage.",
        etymology: "From Latin 'vicarius' (substitute), from 'vicis' (change, alternation).",
        partOfSpeech: "adjective"
    },
    // ═══════════════════════════════════════════════════════════════
    // NEW WORDS - Expanding the collection
    // ═══════════════════════════════════════════════════════════════
    {
        word: "Apricity",
        pronunciation: "ə-ˈpri-sə-tē",
        definition: "The warmth of the sun in winter.",
        example: "She sat on the park bench, enjoying the apricity on her face despite the cold air.",
        etymology: "From Latin 'apricus' meaning 'warmed by the sun', from 'aperire' (to open).",
        partOfSpeech: "noun"
    },
    {
        word: "Numinous",
        pronunciation: "ˈnü-mə-nəs",
        definition: "Having a strong religious or spiritual quality; indicating or suggesting the presence of a divinity.",
        example: "The ancient temple had a numinous atmosphere that made visitors speak in whispers.",
        etymology: "From Latin 'numen' meaning 'divine power, deity'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Phosphenes",
        pronunciation: "ˈfäs-fēnz",
        definition: "The luminous floating shapes you see when you close your eyes and press your hands against them.",
        example: "As a child, he would create phosphenes by pressing his palms against his closed eyes.",
        etymology: "From Greek 'phos' (light) + 'phainein' (to show).",
        partOfSpeech: "noun"
    },
    {
        word: "Crepuscular",
        pronunciation: "kri-ˈpəs-kyə-lər",
        definition: "Of, resembling, or relating to twilight; active during twilight.",
        example: "Deer are crepuscular animals, most active during dawn and dusk.",
        etymology: "From Latin 'crepusculum' meaning 'twilight, dusk'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Psithurism",
        pronunciation: "ˈsi-thə-ri-zəm",
        definition: "The sound of wind whispering through the trees.",
        example: "She fell asleep to the gentle psithurism outside her window.",
        etymology: "From Greek 'psithuros' meaning 'whispering'.",
        partOfSpeech: "noun"
    },
    {
        word: "Hiraeth",
        pronunciation: "ˈhir-ˌīth",
        definition: "A homesickness for a home you cannot return to, or that never was.",
        example: "Looking at old photos of her grandmother's house, she felt a deep hiraeth for those summers long past.",
        etymology: "A Welsh word with no direct English translation, combining longing, nostalgia, and grief.",
        partOfSpeech: "noun"
    },
    {
        word: "Eudaimonia",
        pronunciation: "yü-dī-ˈmō-nē-ə",
        definition: "A state of happiness and well-being; human flourishing.",
        example: "The philosopher argued that eudaimonia comes not from pleasure but from living virtuously.",
        etymology: "From Greek 'eu' (good) + 'daimon' (spirit), literally meaning 'having a good guiding spirit'.",
        partOfSpeech: "noun"
    },
    {
        word: "Lacuna",
        pronunciation: "lə-ˈkü-nə",
        definition: "An unfilled space or gap; a missing portion in a book or manuscript.",
        example: "There was a significant lacuna in the historical records from that period.",
        etymology: "From Latin 'lacuna' meaning 'pool, pit, gap', from 'lacus' (lake).",
        partOfSpeech: "noun"
    },
    {
        word: "Syzygy",
        pronunciation: "ˈsi-zə-jē",
        definition: "The alignment of three celestial bodies in a straight line, especially the sun, earth, and moon.",
        example: "A solar eclipse occurs during syzygy when the moon passes between the earth and sun.",
        etymology: "From Greek 'suzugia' meaning 'yoked together', from 'sun' (together) + 'zugon' (yoke).",
        partOfSpeech: "noun"
    },
    {
        word: "Scintilla",
        pronunciation: "sin-ˈti-lə",
        definition: "A tiny trace or spark of a specified quality or feeling.",
        example: "There wasn't a scintilla of evidence to support the accusation.",
        etymology: "From Latin 'scintilla' meaning 'spark'.",
        partOfSpeech: "noun"
    },
    {
        word: "Sibilant",
        pronunciation: "ˈsi-bə-lənt",
        definition: "Making or characterized by a hissing sound.",
        example: "The sibilant whisper of the snake made them freeze in their tracks.",
        etymology: "From Latin 'sibilare' meaning 'to hiss'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Gossamer",
        pronunciation: "ˈgä-sə-mər",
        definition: "Something delicate, light, and translucent; a fine filmy substance of cobwebs.",
        example: "Her gossamer dress floated in the breeze like a cloud.",
        etymology: "From Middle English 'gossomer', possibly from 'goose summer' (a warm period in autumn when geese were eaten and cobwebs are prevalent).",
        partOfSpeech: "noun"
    },
    {
        word: "Palimpsest",
        pronunciation: "ˈpa-ləmp-ˌsest",
        definition: "A manuscript or piece of writing material on which the original writing has been effaced to make room for later writing; something reused or altered but still bearing visible traces of its earlier form.",
        example: "The city was a palimpsest of architectural styles from different eras.",
        etymology: "From Greek 'palimpsestos' meaning 'scraped again', from 'palin' (again) + 'psen' (to scrape).",
        partOfSpeech: "noun"
    },
    {
        word: "Liminal",
        pronunciation: "ˈli-mə-nəl",
        definition: "Occupying a position at, or on both sides of, a boundary or threshold.",
        example: "Airports are liminal spaces, neither here nor there, suspended between departures and arrivals.",
        etymology: "From Latin 'limen' meaning 'threshold'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Ineffable",
        pronunciation: "in-ˈe-fə-bəl",
        definition: "Too great or extreme to be expressed in words; not to be uttered.",
        example: "The ineffable joy of holding her newborn baby brought tears to her eyes.",
        etymology: "From Latin 'ineffabilis', from 'in-' (not) + 'effabilis' (utterable).",
        partOfSpeech: "adjective"
    },
    {
        word: "Redolent",
        pronunciation: "ˈre-də-lənt",
        definition: "Strongly reminiscent or suggestive of; fragrant or sweet-smelling.",
        example: "The kitchen was redolent of freshly baked bread and cinnamon.",
        etymology: "From Latin 'redolere' meaning 'to emit a scent', from 're-' (intensive) + 'olere' (to smell).",
        partOfSpeech: "adjective"
    },
    {
        word: "Oblivion",
        pronunciation: "ə-ˈbli-vē-ən",
        definition: "The state of being unaware or unconscious of what is happening; the state of being forgotten.",
        example: "Many once-famous artists have faded into oblivion.",
        etymology: "From Latin 'oblivio' meaning 'forgetfulness', from 'oblivisci' (to forget).",
        partOfSpeech: "noun"
    },
    {
        word: "Ephemera",
        pronunciation: "i-ˈfe-mə-rə",
        definition: "Things that exist or are used for only a short time; transitory items, especially collectible ones.",
        example: "The museum's collection included Victorian ephemera like postcards, tickets, and advertisements.",
        etymology: "From Greek 'ephemera' (things lasting only a day), from 'ephemeros' (lasting a day).",
        partOfSpeech: "noun"
    },
    {
        word: "Melancholy",
        pronunciation: "ˈme-lən-ˌkä-lē",
        definition: "A feeling of pensive sadness, typically with no obvious cause.",
        example: "A sense of melancholy washed over him as he looked at his childhood home.",
        etymology: "From Greek 'melankholiā', from 'melas' (black) + 'kholē' (bile), referring to the medieval theory of four humors.",
        partOfSpeech: "noun"
    },
    {
        word: "Ineffable",
        pronunciation: "in-ˈe-fə-bəl",
        definition: "Incapable of being expressed in words; indescribable.",
        example: "There was something ineffable about the way the light hit the ocean at sunset.",
        etymology: "From Latin 'ineffabilis', from 'in-' (not) + 'effari' (to speak out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Verdant",
        pronunciation: "ˈvər-dənt",
        definition: "Green with grass or other rich vegetation.",
        example: "The verdant hills of Ireland stretched endlessly before them.",
        etymology: "From Latin 'viridis' (green), from 'virere' (to be green).",
        partOfSpeech: "adjective"
    },
    {
        word: "Cacophony",
        pronunciation: "kə-ˈkä-fə-nē",
        definition: "A harsh, discordant mixture of sounds.",
        example: "The cacophony of car horns and shouting vendors filled the busy street.",
        etymology: "From Greek 'kakophonia', from 'kakos' (bad) + 'phone' (sound).",
        partOfSpeech: "noun"
    },
    {
        word: "Sonorous",
        pronunciation: "ˈsä-nə-rəs",
        definition: "Having a full, deep, and rich sound; imposingly grand.",
        example: "The sonorous tones of the church bells echoed through the valley.",
        etymology: "From Latin 'sonorus', from 'sonor' (sound).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sempiternal",
        pronunciation: "ˌsem-pə-ˈtər-nəl",
        definition: "Eternal and unchanging; everlasting.",
        example: "The sempiternal stars continued their ancient dance across the night sky.",
        etymology: "From Latin 'sempiternus', from 'semper' (always) + 'aeternus' (eternal).",
        partOfSpeech: "adjective"
    },
    {
        word: "Aquiver",
        pronunciation: "ə-ˈkwi-vər",
        definition: "Quivering; trembling with excitement or emotion.",
        example: "The whole crowd was aquiver with anticipation as the curtain rose.",
        etymology: "From 'a-' (in a state of) + 'quiver' (to tremble).",
        partOfSpeech: "adjective"
    },
    {
        word: "Bucolic",
        pronunciation: "byü-ˈkä-lik",
        definition: "Relating to the pleasant aspects of the countryside and country life.",
        example: "They dreamed of leaving the city for a bucolic life on a small farm.",
        etymology: "From Greek 'boukolikos' meaning 'rustic', from 'boukolos' (herdsman).",
        partOfSpeech: "adjective"
    },
    {
        word: "Cynosure",
        pronunciation: "ˈsī-nə-ˌshu̇r",
        definition: "A person or thing that is the center of attention or admiration.",
        example: "With her stunning dress and confident smile, she was the cynosure of the gala.",
        etymology: "From Greek 'Kynosoura' (Ursa Minor constellation), literally 'dog's tail', used by navigators as a guide.",
        partOfSpeech: "noun"
    },
    {
        word: "Denouement",
        pronunciation: "ˌdā-nü-ˈmäⁿ",
        definition: "The final outcome of a situation; the resolution of a narrative.",
        example: "The movie's denouement tied up all the loose ends satisfyingly.",
        etymology: "From French 'dénouer' meaning 'to untie', from 'de-' (un-) + 'nouer' (to tie).",
        partOfSpeech: "noun"
    },
    {
        word: "Effervescent",
        pronunciation: "ˌe-fər-ˈve-sənt",
        definition: "Giving off bubbles; vivacious and enthusiastic.",
        example: "Her effervescent personality made everyone around her smile.",
        etymology: "From Latin 'effervescere' meaning 'to boil up', from 'ex-' (out) + 'fervescere' (to begin to boil).",
        partOfSpeech: "adjective"
    },
    {
        word: "Felicity",
        pronunciation: "fə-ˈli-sə-tē",
        definition: "Intense happiness; the ability to find appropriate expression for one's thoughts.",
        example: "She expressed her thoughts with remarkable felicity and grace.",
        etymology: "From Latin 'felicitas' meaning 'happiness', from 'felix' (happy, fortunate).",
        partOfSpeech: "noun"
    },
    {
        word: "Gambol",
        pronunciation: "ˈgam-bəl",
        definition: "To run or jump about playfully.",
        example: "The lambs gamboled in the spring meadow.",
        etymology: "From French 'gambade' meaning 'a horse's leap', from Italian 'gamba' (leg).",
        partOfSpeech: "verb"
    },
    {
        word: "Harbinger",
        pronunciation: "ˈhär-bən-jər",
        definition: "A person or thing that announces or signals the approach of another; a forerunner.",
        example: "The robin is often seen as a harbinger of spring.",
        etymology: "From Middle English 'herbergere' meaning 'one who provides lodging', originally one who went ahead to arrange accommodation.",
        partOfSpeech: "noun"
    },
    {
        word: "Incandescent",
        pronunciation: "ˌin-kən-ˈde-sənt",
        definition: "Emitting light as a result of being heated; extremely bright; passionate.",
        example: "She was incandescent with rage when she discovered the betrayal.",
        etymology: "From Latin 'incandescere' meaning 'to glow', from 'in-' (into) + 'candere' (to shine).",
        partOfSpeech: "adjective"
    },
    {
        word: "Juxtapose",
        pronunciation: "ˈjək-stə-ˌpōz",
        definition: "To place or deal with close together for contrasting effect.",
        example: "The artist liked to juxtapose modern elements with classical imagery.",
        etymology: "From Latin 'juxta' (near) + French 'poser' (to place).",
        partOfSpeech: "verb"
    },
    {
        word: "Kismet",
        pronunciation: "ˈkiz-ˌmet",
        definition: "Destiny; fate.",
        example: "Meeting her at that exact moment felt like kismet.",
        etymology: "From Turkish 'kısmet', from Arabic 'qisma' meaning 'portion, lot'.",
        partOfSpeech: "noun"
    },
    {
        word: "Labyrinthine",
        pronunciation: "ˌla-bə-ˈrin-thən",
        definition: "Like a labyrinth; irregular and twisting; intricate and confusing.",
        example: "The labyrinthine streets of the old city were easy to get lost in.",
        etymology: "From Greek 'labyrinthos' meaning 'maze', from the mythical Labyrinth of Crete.",
        partOfSpeech: "adjective"
    },
    {
        word: "Maelstrom",
        pronunciation: "ˈmāl-strəm",
        definition: "A powerful whirlpool; a situation of confused movement or violent turmoil.",
        example: "She found herself caught in a maelstrom of emotions after the news.",
        etymology: "From Dutch 'maalstroom', from 'malen' (to grind) + 'stroom' (stream).",
        partOfSpeech: "noun"
    },
    {
        word: "Nadir",
        pronunciation: "ˈnā-dər",
        definition: "The lowest point; the point of greatest adversity or despair.",
        example: "After losing his job and his home, he had reached the nadir of his life.",
        etymology: "From Arabic 'nazir' meaning 'opposite to', specifically the point opposite the zenith.",
        partOfSpeech: "noun"
    },
    {
        word: "Opulent",
        pronunciation: "ˈä-pyə-lənt",
        definition: "Ostentatiously rich and luxurious; lavish.",
        example: "The opulent ballroom was decorated with crystal chandeliers and gold leaf.",
        etymology: "From Latin 'opulentus' meaning 'wealthy', from 'ops' (power, resources).",
        partOfSpeech: "adjective"
    },
    {
        word: "Pernicious",
        pronunciation: "pər-ˈni-shəs",
        definition: "Having a harmful effect, especially in a gradual or subtle way.",
        example: "The pernicious influence of misinformation on public opinion is concerning.",
        etymology: "From Latin 'perniciosus' meaning 'destructive', from 'pernicies' (destruction).",
        partOfSpeech: "adjective"
    },
    {
        word: "Querulous",
        pronunciation: "ˈkwer-ə-ləs",
        definition: "Complaining in a petulant or whining manner.",
        example: "The querulous child refused to be satisfied with any of the options offered.",
        etymology: "From Latin 'querulus' meaning 'full of complaints', from 'queri' (to complain).",
        partOfSpeech: "adjective"
    },
    {
        word: "Redamancy",
        pronunciation: "rə-ˈda-mən-sē",
        definition: "The act of loving the one who loves you; a love returned in full.",
        example: "Their relationship was built on pure redamancy—each loving the other completely.",
        etymology: "From Latin 'redamare' meaning 'to love in return', from 're-' (back) + 'amare' (to love).",
        partOfSpeech: "noun"
    },
    {
        word: "Schadenfreude",
        pronunciation: "ˈshä-dən-ˌfrȯi-də",
        definition: "Pleasure derived from another person's misfortune.",
        example: "He felt a guilty schadenfreude when his rival's project failed.",
        etymology: "From German 'Schaden' (damage) + 'Freude' (joy).",
        partOfSpeech: "noun"
    },
    {
        word: "Talisman",
        pronunciation: "ˈta-ləs-mən",
        definition: "An object thought to have magic powers and to bring good luck.",
        example: "She always carried her grandmother's ring as a talisman.",
        etymology: "From Arabic 'tilsam', from Greek 'telesma' meaning 'religious rite, consecrated object'.",
        partOfSpeech: "noun"
    },
    {
        word: "Umbra",
        pronunciation: "ˈəm-brə",
        definition: "Shadow; the fully shaded inner region of a shadow cast by an opaque object.",
        example: "During the eclipse, the moon passed through Earth's umbra.",
        etymology: "From Latin 'umbra' meaning 'shadow'.",
        partOfSpeech: "noun"
    },
    {
        word: "Vertiginous",
        pronunciation: "vər-ˈti-jə-nəs",
        definition: "Causing vertigo; extremely high or steep; whirling.",
        example: "The vertiginous climb up the mountain path made her grip the railing tightly.",
        etymology: "From Latin 'vertiginosus', from 'vertigo' (dizziness).",
        partOfSpeech: "adjective"
    },
    {
        word: "Wistful",
        pronunciation: "ˈwist-fəl",
        definition: "Having or showing a feeling of vague or regretful longing.",
        example: "She gave a wistful sigh as she looked at photos from her youth.",
        etymology: "Perhaps from obsolete 'wistly' meaning 'intently', influenced by 'wishful'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Xenial",
        pronunciation: "ˈzē-nē-əl",
        definition: "Relating to hospitality or relations between host and guest.",
        example: "The xenial traditions of the village welcomed all travelers warmly.",
        etymology: "From Greek 'xenios' meaning 'hospitable', from 'xenos' (stranger, guest).",
        partOfSpeech: "adjective"
    },
    {
        word: "Yugen",
        pronunciation: "yü-ˈgen",
        definition: "A profound awareness of the universe that triggers emotional responses too deep for words.",
        example: "Watching the mist roll over the mountains at dawn, he experienced a sense of yugen.",
        etymology: "A Japanese aesthetic concept, from 'yu' (faint, dim) + 'gen' (mystery, profundity).",
        partOfSpeech: "noun"
    },
    {
        word: "Zeitgeist",
        pronunciation: "ˈtsīt-ˌgīst",
        definition: "The defining spirit or mood of a particular period of history.",
        example: "The rebellious music of the 1960s captured the zeitgeist of that era.",
        etymology: "From German 'Zeit' (time) + 'Geist' (spirit).",
        partOfSpeech: "noun"
    },
    {
        word: "Abscond",
        pronunciation: "ab-ˈskänd",
        definition: "To leave hurriedly and secretly, typically to escape from custody or avoid detection.",
        example: "The treasurer absconded with the company's funds.",
        etymology: "From Latin 'abscondere' meaning 'to hide away', from 'ab-' (away) + 'condere' (to store).",
        partOfSpeech: "verb"
    },
    {
        word: "Beguile",
        pronunciation: "bi-ˈgīl",
        definition: "To charm or enchant, sometimes in a deceptive way; to pass time pleasantly.",
        example: "She beguiled the afternoon away with a fascinating novel.",
        etymology: "From Middle English 'bigilen', from 'be-' (thoroughly) + 'gilen' (to deceive).",
        partOfSpeech: "verb"
    },
    {
        word: "Chimera",
        pronunciation: "kī-ˈmir-ə",
        definition: "A thing that is hoped or wished for but is illusory or impossible to achieve; a mythical creature.",
        example: "The idea of a perfectly fair society remains a beautiful chimera.",
        etymology: "From Greek 'Khimaira', a fire-breathing monster with a lion's head, goat's body, and serpent's tail.",
        partOfSpeech: "noun"
    },
    {
        word: "Dulcet",
        pronunciation: "ˈdəl-sət",
        definition: "Sweet and soothing, especially of sound.",
        example: "The dulcet tones of the harp filled the concert hall.",
        etymology: "From Latin 'dulcis' meaning 'sweet'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Enigmatic",
        pronunciation: "ˌe-nig-ˈma-tik",
        definition: "Difficult to interpret or understand; mysterious.",
        example: "The Mona Lisa's enigmatic smile has puzzled viewers for centuries.",
        etymology: "From Greek 'ainigma' meaning 'riddle', from 'ainissesthai' (to speak in riddles).",
        partOfSpeech: "adjective"
    },
    {
        word: "Furtive",
        pronunciation: "ˈfər-tiv",
        definition: "Attempting to avoid notice or attention, typically because of guilt; secretive.",
        example: "He cast a furtive glance over his shoulder before entering the building.",
        etymology: "From Latin 'furtivus' meaning 'stolen', from 'fur' (thief).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gregarious",
        pronunciation: "gri-ˈger-ē-əs",
        definition: "Fond of company; sociable.",
        example: "His gregarious nature made him the perfect host for large parties.",
        etymology: "From Latin 'gregarius' meaning 'of a flock', from 'grex' (flock).",
        partOfSpeech: "adjective"
    },
    {
        word: "Hubris",
        pronunciation: "ˈhyü-brəs",
        definition: "Excessive pride or self-confidence; arrogance.",
        example: "His hubris led him to believe he could never fail.",
        etymology: "From Greek 'hybris' meaning 'wanton violence, insolence, outrage'.",
        partOfSpeech: "noun"
    },
    {
        word: "Iridescent",
        pronunciation: "ˌir-ə-ˈde-sənt",
        definition: "Showing luminous colors that seem to change when seen from different angles.",
        example: "The soap bubble displayed iridescent colors as it floated through the air.",
        etymology: "From Latin 'iris' meaning 'rainbow'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Jejune",
        pronunciation: "ji-ˈjün",
        definition: "Naive, simplistic, and superficial; dull and uninteresting.",
        example: "The critic dismissed the novel as jejune and lacking depth.",
        etymology: "From Latin 'jejunus' meaning 'fasting, barren, meager'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Kalon",
        pronunciation: "ˈka-ˌlän",
        definition: "Beauty that is more than skin-deep; the ideal of physical and moral beauty.",
        example: "The Greeks pursued kalon in all aspects of life, from art to character.",
        etymology: "From Greek 'kalon' meaning 'beautiful, noble'.",
        partOfSpeech: "noun"
    },
    {
        word: "Languorous",
        pronunciation: "ˈlaŋ-gə-rəs",
        definition: "Characterized by tiredness or inactivity; relaxed and peaceful.",
        example: "They spent a languorous afternoon by the pool, too relaxed to move.",
        etymology: "From Latin 'languor' meaning 'faintness, weariness'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Mercurial",
        pronunciation: "mər-ˈkyu̇r-ē-əl",
        definition: "Subject to sudden or unpredictable changes of mood or mind.",
        example: "Her mercurial temperament made her a fascinating but challenging friend.",
        etymology: "From Latin 'Mercurialis' relating to the god Mercury, known for his speed and unpredictability.",
        partOfSpeech: "adjective"
    },
    {
        word: "Nebulous",
        pronunciation: "ˈne-byə-ləs",
        definition: "In the form of a cloud or haze; vague or ill-defined.",
        example: "His plans for the future remained nebulous at best.",
        etymology: "From Latin 'nebulosus' meaning 'cloudy', from 'nebula' (cloud).",
        partOfSpeech: "adjective"
    },
    {
        word: "Obfuscate",
        pronunciation: "ˈäb-fə-ˌskāt",
        definition: "To render obscure, unclear, or unintelligible; to confuse.",
        example: "The politician tried to obfuscate the issue with technical jargon.",
        etymology: "From Latin 'obfuscare' meaning 'to darken', from 'ob-' (over) + 'fuscare' (to make dark).",
        partOfSpeech: "verb"
    },
    {
        word: "Penumbra",
        pronunciation: "pə-ˈnəm-brə",
        definition: "The partially shaded outer region of a shadow; any area of uncertainty or ambiguity.",
        example: "The legal case fell into a penumbra of constitutional rights.",
        etymology: "From Latin 'paene' (almost) + 'umbra' (shadow).",
        partOfSpeech: "noun"
    },
    {
        word: "Quiescent",
        pronunciation: "kwē-ˈe-sənt",
        definition: "In a state of inactivity or dormancy; quiet and still.",
        example: "The volcano had been quiescent for decades before the sudden eruption.",
        etymology: "From Latin 'quiescere' meaning 'to rest, be still'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Reverie",
        pronunciation: "ˈre-və-rē",
        definition: "A state of being pleasantly lost in one's thoughts; a daydream.",
        example: "She was lost in a reverie, staring out the window at the falling snow.",
        etymology: "From French 'rêverie', from 'rêver' (to dream).",
        partOfSpeech: "noun"
    },
    {
        word: "Seraphic",
        pronunciation: "sə-ˈra-fik",
        definition: "Characteristic of or resembling a seraph; angelic and beautiful.",
        example: "The child had a seraphic face that made everyone smile.",
        etymology: "From Hebrew 'seraphim' meaning 'burning ones', referring to celestial beings.",
        partOfSpeech: "adjective"
    },
    {
        word: "Tenebrous",
        pronunciation: "ˈte-nə-brəs",
        definition: "Dark, shadowy, or obscure.",
        example: "They ventured into the tenebrous depths of the ancient forest.",
        etymology: "From Latin 'tenebrosus' meaning 'dark', from 'tenebrae' (darkness).",
        partOfSpeech: "adjective"
    },
    {
        word: "Ullage",
        pronunciation: "ˈə-lij",
        definition: "The amount by which a container falls short of being full.",
        example: "The wine bottle had significant ullage, suggesting it had been stored improperly.",
        etymology: "From Old French 'ouillage' meaning 'filling of a cask', from 'ouiller' (to fill up).",
        partOfSpeech: "noun"
    },
    {
        word: "Vestigial",
        pronunciation: "ve-ˈsti-jē-əl",
        definition: "Forming a very small remnant of something that was once much larger or more noticeable.",
        example: "The vestigial tail in some humans is a reminder of our evolutionary past.",
        etymology: "From Latin 'vestigium' meaning 'footprint, trace'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Weltschmerz",
        pronunciation: "ˈvelt-ˌshmerts",
        definition: "A feeling of melancholy and world-weariness; sadness over the evils of the world.",
        example: "Reading too much news gave her a profound sense of weltschmerz.",
        etymology: "From German 'Welt' (world) + 'Schmerz' (pain).",
        partOfSpeech: "noun"
    },
    {
        word: "Xeric",
        pronunciation: "ˈzir-ik",
        definition: "Characterized by or adapted to an extremely dry environment.",
        example: "Cacti are xeric plants that have evolved to survive in desert conditions.",
        etymology: "From Greek 'xeros' meaning 'dry'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Yonder",
        pronunciation: "ˈyän-dər",
        definition: "At some distance in the direction indicated; over there.",
        example: "The old farmhouse lies yonder, just beyond the hill.",
        etymology: "From Old English 'geond' meaning 'throughout, over there'.",
        partOfSpeech: "adverb"
    },
    {
        word: "Zephyr",
        pronunciation: "ˈze-fər",
        definition: "A soft, gentle breeze; the west wind.",
        example: "A cool zephyr rustled the leaves on that warm summer evening.",
        etymology: "From Greek 'Zephyros', the god of the west wind.",
        partOfSpeech: "noun"
    },
    {
        word: "Ataraxia",
        pronunciation: "ˌa-tə-ˈrak-sē-ə",
        definition: "A state of serene calmness; freedom from emotional disturbance or anxiety.",
        example: "Through meditation, she achieved a state of ataraxia that nothing could disturb.",
        etymology: "From Greek 'ataraxia' meaning 'impassiveness', from 'a-' (without) + 'tarassein' (to disturb).",
        partOfSpeech: "noun"
    },
    {
        word: "Benevolent",
        pronunciation: "bə-ˈne-və-lənt",
        definition: "Well-meaning and kindly; serving a charitable purpose.",
        example: "The benevolent stranger paid for everyone's coffee that morning.",
        etymology: "From Latin 'benevolens' meaning 'wishing well', from 'bene' (well) + 'velle' (to wish).",
        partOfSpeech: "adjective"
    },
    {
        word: "Concatenate",
        pronunciation: "kän-ˈka-tə-ˌnāt",
        definition: "To link things together in a chain or series.",
        example: "The events concatenated in ways no one could have predicted.",
        etymology: "From Latin 'concatenare' meaning 'to link together', from 'con-' (together) + 'catena' (chain).",
        partOfSpeech: "verb"
    },
    {
        word: "Diaphanous",
        pronunciation: "dī-ˈa-fə-nəs",
        definition: "Light, delicate, and translucent.",
        example: "She wore a diaphanous scarf that floated in the breeze.",
        etymology: "From Greek 'diaphanes' meaning 'transparent', from 'dia-' (through) + 'phainein' (to show).",
        partOfSpeech: "adjective"
    },
    {
        word: "Equanimity",
        pronunciation: "ˌē-kwə-ˈni-mə-tē",
        definition: "Mental calmness, composure, and evenness of temper, especially in difficult situations.",
        example: "She faced the crisis with remarkable equanimity.",
        etymology: "From Latin 'aequanimitas' meaning 'evenness of mind', from 'aequus' (equal) + 'animus' (mind).",
        partOfSpeech: "noun"
    },
    {
        word: "Fugacious",
        pronunciation: "fyü-ˈgā-shəs",
        definition: "Tending to disappear; fleeting.",
        example: "Youth is fugacious, so treasure each moment.",
        etymology: "From Latin 'fugax' meaning 'apt to flee', from 'fugere' (to flee).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gallimaufry",
        pronunciation: "ˌga-lə-ˈmȯ-frē",
        definition: "A confused jumble or medley of things.",
        example: "The antique shop was a gallimaufry of furniture, artwork, and curiosities.",
        etymology: "From French 'galimafrée' meaning 'a hash of various meats'.",
        partOfSpeech: "noun"
    },
    {
        word: "Hypnagogic",
        pronunciation: "ˌhip-nə-ˈgä-jik",
        definition: "Relating to the state immediately before falling asleep.",
        example: "In the hypnagogic state, she often experienced vivid, dreamlike imagery.",
        etymology: "From Greek 'hypnos' (sleep) + 'agogos' (leading).",
        partOfSpeech: "adjective"
    },
    {
        word: "Insouciant",
        pronunciation: "in-ˈsü-sē-ənt",
        definition: "Showing a casual lack of concern; carefree and nonchalant.",
        example: "With an insouciant shrug, he dismissed the criticism.",
        etymology: "From French 'insouciant', from 'in-' (not) + 'soucier' (to care).",
        partOfSpeech: "adjective"
    },
    {
        word: "Jocund",
        pronunciation: "ˈjä-kənd",
        definition: "Cheerful and lighthearted.",
        example: "The jocund host kept everyone entertained with stories and jokes.",
        etymology: "From Latin 'jocundus' meaning 'pleasant, agreeable', from 'jocus' (joke).",
        partOfSpeech: "adjective"
    },
    {
        word: "Komorebi",
        pronunciation: "kō-mō-ˈre-bē",
        definition: "Sunlight filtering through leaves.",
        example: "Walking through the forest, they admired the beautiful komorebi dancing on the path.",
        etymology: "A Japanese word, from 'ko' (tree) + 'more' (leak through) + 'bi' (sun, light).",
        partOfSpeech: "noun"
    },
    {
        word: "Loquacious",
        pronunciation: "lō-ˈkwā-shəs",
        definition: "Tending to talk a great deal; talkative.",
        example: "The loquacious tour guide shared every detail of the castle's history.",
        etymology: "From Latin 'loquax' meaning 'talkative', from 'loqui' (to speak).",
        partOfSpeech: "adjective"
    },
    {
        word: "Munificent",
        pronunciation: "myü-ˈni-fə-sənt",
        definition: "Larger or more generous than usual or necessary.",
        example: "The munificent donation transformed the struggling charity.",
        etymology: "From Latin 'munificus' meaning 'bountiful', from 'munus' (gift) + 'facere' (to make).",
        partOfSpeech: "adjective"
    },
    {
        word: "Nefarious",
        pronunciation: "nə-ˈfer-ē-əs",
        definition: "Wicked, villainous, or criminal.",
        example: "The detective uncovered the nefarious plot just in time.",
        etymology: "From Latin 'nefarius' meaning 'wicked', from 'nefas' (crime, wrong).",
        partOfSpeech: "adjective"
    },
    {
        word: "Oscillate",
        pronunciation: "ˈä-sə-ˌlāt",
        definition: "To move or swing back and forth at a regular speed; to waver between extremes.",
        example: "Her mood seemed to oscillate between excitement and anxiety.",
        etymology: "From Latin 'oscillare' meaning 'to swing', from 'oscillum' (a small mask of Bacchus hung in vineyards).",
        partOfSpeech: "verb"
    },
    {
        word: "Plethora",
        pronunciation: "ˈple-thə-rə",
        definition: "A large or excessive amount of something.",
        example: "The buffet offered a plethora of dessert options.",
        etymology: "From Greek 'plethora' meaning 'fullness', from 'plethein' (to be full).",
        partOfSpeech: "noun"
    },
    {
        word: "Quintessence",
        pronunciation: "kwin-ˈte-sən(t)s",
        definition: "The most perfect embodiment of something; the purest essence.",
        example: "This painting is the quintessence of Renaissance art.",
        etymology: "From Latin 'quinta essentia' meaning 'fifth essence', referring to the fifth element beyond earth, water, fire, and air.",
        partOfSpeech: "noun"
    },
    {
        word: "Raconteur",
        pronunciation: "ˌra-ˌkän-ˈtər",
        definition: "A person who tells anecdotes in a skillful and amusing way.",
        example: "Her grandfather was a natural raconteur whose stories kept the family entertained for hours.",
        etymology: "From French 'raconter' meaning 'to tell, relate'.",
        partOfSpeech: "noun"
    },
    {
        word: "Somnolent",
        pronunciation: "ˈsäm-nə-lənt",
        definition: "Sleepy; drowsy; inducing drowsiness.",
        example: "The somnolent atmosphere of the warm afternoon made everyone yawn.",
        etymology: "From Latin 'somnolentus' meaning 'sleepy', from 'somnus' (sleep).",
        partOfSpeech: "adjective"
    },
    {
        word: "Taciturn",
        pronunciation: "ˈta-sə-ˌtərn",
        definition: "Reserved or uncommunicative in speech; saying little.",
        example: "The taciturn stranger sat alone at the bar, nursing his drink in silence.",
        etymology: "From Latin 'taciturnus' meaning 'silent', from 'tacere' (to be silent).",
        partOfSpeech: "adjective"
    },
    {
        word: "Unctuous",
        pronunciation: "ˈəŋk-chə-wəs",
        definition: "Excessively flattering or ingratiating; oily.",
        example: "His unctuous manner made everyone suspicious of his motives.",
        etymology: "From Latin 'unctuosus' meaning 'oily', from 'unguere' (to anoint).",
        partOfSpeech: "adjective"
    },
    {
        word: "Verisimilitude",
        pronunciation: "ˌver-ə-sə-ˈmi-lə-ˌtüd",
        definition: "The appearance of being true or real.",
        example: "The film's verisimilitude made the fictional events feel completely believable.",
        etymology: "From Latin 'verisimilitudo' meaning 'likeness to truth', from 'verus' (true) + 'similis' (similar).",
        partOfSpeech: "noun"
    },
    {
        word: "Wunderkind",
        pronunciation: "ˈvu̇n-dər-ˌkint",
        definition: "A person who achieves great success when relatively young; a child prodigy.",
        example: "The young composer was hailed as a wunderkind after her first symphony.",
        etymology: "From German 'Wunder' (wonder) + 'Kind' (child).",
        partOfSpeech: "noun"
    }
];
