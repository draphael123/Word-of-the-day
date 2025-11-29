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
    }
];
