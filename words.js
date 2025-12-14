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
    {
        word: "Jubilant",
        pronunciation: "ˈjü-bə-lənt",
        definition: "Feeling or expressing great happiness and triumph.",
        example: "The team was jubilant after winning the championship game.",
        etymology: "From Latin 'jubilare' meaning 'to shout for joy'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Radiant",
        pronunciation: "ˈrā-dē-ənt",
        definition: "Sending out light; shining or glowing brightly; having a glowing quality.",
        example: "Her radiant smile lit up the entire room.",
        etymology: "From Latin 'radiare' meaning 'to emit rays', from 'radius' (ray).",
        partOfSpeech: "adjective"
    },
    {
        word: "Blissful",
        pronunciation: "ˈblis-fəl",
        definition: "Extremely happy; full of joy.",
        example: "They spent a blissful week on the tropical island.",
        etymology: "From Old English 'bliss' (joy, happiness) + '-ful'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Vivacious",
        pronunciation: "və-ˈvā-shəs",
        definition: "Attractively lively and animated; full of energy.",
        example: "She was a vivacious host who kept everyone entertained.",
        etymology: "From Latin 'vivax' meaning 'long-lived, vigorous', from 'vivere' (to live).",
        partOfSpeech: "adjective"
    },
    {
        word: "Euphoric",
        pronunciation: "yu̇-ˈfȯr-ik",
        definition: "Characterized by or feeling intense excitement and happiness.",
        example: "She felt euphoric after receiving the good news.",
        etymology: "From Greek 'euphoria' meaning 'power of enduring easily', from 'eu-' (well) + 'pherein' (to bear).",
        partOfSpeech: "adjective"
    },
    {
        word: "Exuberant",
        pronunciation: "ig-ˈzü-bə-rənt",
        definition: "Filled with or characterized by a lively energy and excitement.",
        example: "The exuberant crowd cheered as the band took the stage.",
        etymology: "From Latin 'exuberare' meaning 'to be abundant', from 'ex-' (thoroughly) + 'uber' (fertile).",
        partOfSpeech: "adjective"
    },
    {
        word: "Blithe",
        pronunciation: "ˈblīth",
        definition: "Showing a casual and cheerful indifference considered to be callous or improper.",
        example: "She maintained a blithe attitude despite the chaos around her.",
        etymology: "From Old English 'blīthe' meaning 'happy, gentle, kind'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Jovial",
        pronunciation: "ˈjō-vē-əl",
        definition: "Cheerful and friendly.",
        example: "His jovial nature made him popular at social gatherings.",
        etymology: "From Latin 'Jovialis' meaning 'of Jupiter', referring to the planet's astrological influence of good humor.",
        partOfSpeech: "adjective"
    },
    {
        word: "Effervescent",
        pronunciation: "e-fər-ˈve-sənt",
        definition: "Bubbling and lively; vivacious and enthusiastic.",
        example: "Her effervescent personality made every conversation enjoyable.",
        etymology: "From Latin 'effervescere' meaning 'to boil up', from 'ex-' (out) + 'fervescere' (to begin to boil).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sanguine",
        pronunciation: "ˈsaŋ-gwən",
        definition: "Optimistic or positive, especially in an apparently bad or difficult situation.",
        example: "Despite the challenges, she remained sanguine about the project's success.",
        etymology: "From Latin 'sanguineus' meaning 'bloody', from the medieval belief that a sanguine temperament was caused by an abundance of blood.",
        partOfSpeech: "adjective"
    },
    {
        word: "Buoyant",
        pronunciation: "ˈbȯi-ənt",
        definition: "Cheerful and optimistic; able to float or rise to the surface.",
        example: "Her buoyant spirits helped lift everyone's mood.",
        etymology: "From French 'bouyant', present participle of 'bouyer' (to float), from Latin 'boia' (a fetter).",
        partOfSpeech: "adjective"
    },
    {
        word: "Merry",
        pronunciation: "ˈmer-ē",
        definition: "Cheerful and lively; full of fun.",
        example: "They had a merry celebration with music and dancing.",
        etymology: "From Old English 'meriġe' meaning 'pleasing, agreeable, pleasant, sweet'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Jaunty",
        pronunciation: "ˈjȯn-tē",
        definition: "Having or expressing a lively, cheerful, and self-confident manner.",
        example: "He walked with a jaunty step, whistling a cheerful tune.",
        etymology: "From French 'gentil' meaning 'noble, gentle', from Latin 'gentilis' (of the same clan).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sprightly",
        pronunciation: "ˈsprīt-lē",
        definition: "Lively, full of energy.",
        example: "The sprightly dance music got everyone on their feet.",
        etymology: "From 'spright' (spirit) + '-ly', from Middle English 'sprit' meaning 'spirit'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Felicitous",
        pronunciation: "fə-ˈli-sə-təs",
        definition: "Well chosen or suited to the circumstances; pleasing and fortunate.",
        example: "She made a felicitous choice of words that perfectly captured the moment.",
        etymology: "From Latin 'felicitas' meaning 'happiness, good fortune', from 'felix' (happy).",
        partOfSpeech: "adjective"
    },
    {
        word: "Genial",
        pronunciation: "ˈjēn-yəl",
        definition: "Friendly and cheerful.",
        example: "The genial host made everyone feel welcome at the party.",
        etymology: "From Latin 'genialis' meaning 'festive, jovial, genial', from 'genius' (guardian spirit).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gleeful",
        pronunciation: "ˈglē-fəl",
        definition: "Exuberantly or triumphantly joyful.",
        example: "The children were gleeful when they saw the pile of presents.",
        etymology: "From Middle English 'gleeful', from 'glee' (mirth, joy) + '-ful'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Elated",
        pronunciation: "i-ˈlā-təd",
        definition: "Ecstatically happy.",
        example: "She was elated to hear that she had been accepted to her dream university.",
        etymology: "From Latin 'elatus' (raised up), past participle of 'efferre' (to carry out, raise up).",
        partOfSpeech: "adjective"
    },
    {
        word: "Cherubic",
        pronunciation: "chə-ˈrü-bik",
        definition: "Having the innocence and plump prettiness of a cherub; angelic.",
        example: "The baby's cherubic face made everyone smile.",
        etymology: "From 'cherub' + '-ic', from Hebrew 'kerub' meaning 'angel'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Beatific",
        pronunciation: "bē-ə-ˈti-fik",
        definition: "Feeling or expressing blissful happiness.",
        example: "A beatific smile spread across her face as she watched the sunset.",
        etymology: "From Latin 'beatus' (blessed) + '-fic' (making), from 'beatificus'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Ecstatic",
        pronunciation: "ik-ˈsta-tik",
        definition: "Feeling or expressing overwhelming happiness or joyful excitement.",
        example: "They were ecstatic about their engagement announcement.",
        etymology: "From Greek 'ekstatikos' meaning 'entrancing', from 'ekstasis' (standing outside oneself).",
        partOfSpeech: "adjective"
    },
    {
        word: "Mirthful",
        pronunciation: "ˈmərth-fəl",
        definition: "Full of mirth; merry or amusing.",
        example: "The mirthful laughter of children echoed through the park.",
        etymology: "From Middle English 'merthe' (mirth) + '-ful', from Old English 'myrgth' (joy, pleasure).",
        partOfSpeech: "adjective"
    },
    {
        word: "Zestful",
        pronunciation: "ˈzest-fəl",
        definition: "Characterized by great enthusiasm and energy.",
        example: "She approached every challenge with a zestful attitude.",
        etymology: "From 'zest' (enthusiasm, energy) + '-ful', originally from French 'zeste' (orange or lemon peel used for flavoring).",
        partOfSpeech: "adjective"
    },
    {
        word: "Peppy",
        pronunciation: "ˈpe-pē",
        definition: "Full of energy and high spirits; lively.",
        example: "The peppy cheerleaders energized the crowd.",
        etymology: "From 'pep' (energy, spirit) + '-y', of uncertain origin, possibly imitative.",
        partOfSpeech: "adjective"
    },
    {
        word: "Upbeat",
        pronunciation: "ˈəp-ˌbēt",
        definition: "Cheerful; optimistic.",
        example: "Despite the rain, she maintained an upbeat mood.",
        etymology: "From musical term meaning 'unaccented beat', used metaphorically to mean positive.",
        partOfSpeech: "adjective"
    },
    {
        word: "Thrilled",
        pronunciation: "ˈthrild",
        definition: "Feeling or showing great excitement and pleasure.",
        example: "He was thrilled to receive the award.",
        etymology: "From 'thrill' (to cause to feel a sudden wave of emotion) + '-ed', from Old English 'thyrelian' (to pierce).",
        partOfSpeech: "adjective"
    },
    {
        word: "Jocund",
        pronunciation: "ˈjä-kənd",
        definition: "Cheerful and lighthearted.",
        example: "His jocund nature brought joy to all who knew him.",
        etymology: "From Latin 'jocundus' meaning 'pleasant, agreeable', from 'jocus' (joke).",
        partOfSpeech: "adjective"
    },
    {
        word: "Mirth",
        pronunciation: "ˈmərth",
        definition: "Amusement, especially as expressed in laughter.",
        example: "The comedy show was filled with mirth and laughter.",
        etymology: "From Middle English 'merthe', from Old English 'myrgth' (joy, pleasure), related to 'merry'.",
        partOfSpeech: "noun"
    },
    {
        word: "Jubilation",
        pronunciation: "jü-bə-ˈlā-shən",
        definition: "A feeling of great happiness and triumph.",
        example: "There was jubilation in the streets after the team's victory.",
        etymology: "From Latin 'jubilatio' meaning 'a shouting for joy', from 'jubilare' (to shout).",
        partOfSpeech: "noun"
    },
    {
        word: "Bliss",
        pronunciation: "ˈblis",
        definition: "Perfect happiness; great joy.",
        example: "She found bliss in the simple pleasures of life.",
        etymology: "From Old English 'blis' meaning 'bliss, merriment, happiness, grace, favor'.",
        partOfSpeech: "noun"
    },
    {
        word: "Rapture",
        pronunciation: "ˈrap-chər",
        definition: "A feeling of intense pleasure or joy.",
        example: "She listened to the music with complete rapture.",
        etymology: "From Latin 'raptura' meaning 'seizure, kidnapping', from 'rapere' (to seize).",
        partOfSpeech: "noun"
    },
    {
        word: "Delight",
        pronunciation: "di-ˈlīt",
        definition: "Great pleasure.",
        example: "The children squealed with delight when they saw the puppies.",
        etymology: "From Old French 'delitier' (to please), from Latin 'delectare' (to delight).",
        partOfSpeech: "noun"
    },
    {
        word: "Euphoria",
        pronunciation: "yu̇-ˈfȯr-ē-ə",
        definition: "A feeling or state of intense excitement and happiness.",
        example: "She was filled with euphoria after completing the marathon.",
        etymology: "From Greek 'euphoria' meaning 'power of enduring easily', from 'eu-' (well) + 'pherein' (to bear).",
        partOfSpeech: "noun"
    },
    {
        word: "Exultation",
        pronunciation: "eg-ˌzəl-ˈtā-shən",
        definition: "A feeling of triumphant elation or jubilation; rejoicing.",
        example: "There was great exultation when the news of peace was announced.",
        etymology: "From Latin 'exsultare' meaning 'to leap up', from 'ex-' (out) + 'salire' (to leap).",
        partOfSpeech: "noun"
    },
    {
        word: "Glee",
        pronunciation: "ˈglē",
        definition: "Great delight, especially from one's own good fortune or another's misfortune.",
        example: "The students shouted with glee when school was cancelled.",
        etymology: "From Old English 'glēo' meaning 'mirth, joy, music'.",
        partOfSpeech: "noun"
    },
    {
        word: "Elation",
        pronunciation: "i-ˈlā-shən",
        definition: "Great happiness and exhilaration.",
        example: "Her elation was evident as she announced her promotion.",
        etymology: "From Latin 'elatio' meaning 'carrying away', from 'efferre' (to carry out).",
        partOfSpeech: "noun"
    },
    {
        word: "Exhilaration",
        pronunciation: "ig-ˌzi-lə-ˈrā-shən",
        definition: "A feeling of excitement, happiness, or elation.",
        example: "The exhilaration of skydiving was unlike anything she had experienced.",
        etymology: "From Latin 'exhilarare' meaning 'to make cheerful', from 'ex-' (thoroughly) + 'hilaris' (cheerful).",
        partOfSpeech: "noun"
    },
    {
        word: "Joy",
        pronunciation: "ˈjȯi",
        definition: "A feeling of great pleasure and happiness.",
        example: "The birth of their first child brought them immeasurable joy.",
        etymology: "From Old French 'joie', from Latin 'gaudia', plural of 'gaudium' (joy).",
        partOfSpeech: "noun"
    },
    {
        word: "Cheer",
        pronunciation: "ˈchir",
        definition: "Shout for joy or in praise or encouragement.",
        example: "The crowd erupted in cheer when the home team scored.",
        etymology: "From Old French 'chiere' meaning 'face, countenance', later used to mean 'mood, cheer'.",
        partOfSpeech: "noun"
    },
    {
        word: "Gaiety",
        pronunciation: "ˈgā-ə-tē",
        definition: "The state or quality of being lighthearted or cheerful.",
        example: "The festival was filled with gaiety and celebration.",
        etymology: "From French 'gaieté', from 'gai' (cheerful, merry), of uncertain origin.",
        partOfSpeech: "noun"
    },
    {
        word: "Jollity",
        pronunciation: "ˈjä-lə-tē",
        definition: "Lively and cheerful activity or celebration.",
        example: "The wedding reception was full of jollity and laughter.",
        etymology: "From Middle English 'jolite', from Old French 'joliveté' (gaiety), from 'joli' (pretty, merry).",
        partOfSpeech: "noun"
    },
    {
        word: "Merriment",
        pronunciation: "ˈmer-i-mənt",
        definition: "Cheerful and jovial celebration or fun.",
        example: "The party was filled with merriment and good humor.",
        etymology: "From 'merry' + '-ment', from Old English 'meriġe' (pleasant).",
        partOfSpeech: "noun"
    },
    {
        word: "Festivity",
        pronunciation: "fe-ˈsti-və-tē",
        definition: "The celebration of something in a joyful and exuberant way.",
        example: "The streets were alive with festivity during the holiday season.",
        etymology: "From Latin 'festivitas', from 'festivus' (festive), from 'festum' (feast).",
        partOfSpeech: "noun"
    },
    {
        word: "Revelry",
        pronunciation: "ˈre-vəl-rē",
        definition: "Lively and noisy festivities, especially when these involve drinking a large amount of alcohol.",
        example: "The revelry continued late into the night.",
        etymology: "From Old French 'reveler' (to rebel, make merry), from Latin 'rebellare'.",
        partOfSpeech: "noun"
    },
    {
        word: "Celebration",
        pronunciation: "se-lə-ˈbrā-shən",
        definition: "The action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
        example: "The celebration of their anniversary lasted all weekend.",
        etymology: "From Latin 'celebrare' meaning 'to honor, celebrate', from 'celeber' (frequented, honored).",
        partOfSpeech: "noun"
    },
    {
        word: "Felicity",
        pronunciation: "fə-ˈli-sə-tē",
        definition: "Intense happiness.",
        example: "She spoke of her marriage with great felicity.",
        etymology: "From Latin 'felicitas' meaning 'happiness, good fortune', from 'felix' (happy, fortunate).",
        partOfSpeech: "noun"
    },
    {
        word: "Exuberance",
        pronunciation: "ig-ˈzü-bə-rən(t)s",
        definition: "The quality of being full of energy, excitement, and cheerfulness; ebullience.",
        example: "The children's exuberance was contagious.",
        etymology: "From Latin 'exuberantia' meaning 'abundance', from 'exuberare' (to be abundant).",
        partOfSpeech: "noun"
    },
    {
        word: "Vivacity",
        pronunciation: "və-ˈva-sə-tē",
        definition: "The quality of being attractively lively and animated.",
        example: "Her vivacity made her a natural performer.",
        etymology: "From Latin 'vivacitas', from 'vivax' (long-lived, vigorous), from 'vivere' (to live).",
        partOfSpeech: "noun"
    },
    {
        word: "Zest",
        pronunciation: "ˈzest",
        definition: "Great enthusiasm and energy.",
        example: "She approached her new job with zest and determination.",
        etymology: "From French 'zeste' meaning 'orange or lemon peel used for flavoring', later used metaphorically for enthusiasm.",
        partOfSpeech: "noun"
    },
    {
        word: "Panache",
        pronunciation: "pə-ˈnash",
        definition: "Flamboyant confidence of style or manner.",
        example: "She performed with great panache and style.",
        etymology: "From French 'panache' meaning 'plume of feathers', from Italian 'pennacchio', from Latin 'pinnaculum' (small wing).",
        partOfSpeech: "noun"
    },
    {
        word: "Brio",
        pronunciation: "ˈbrē-ō",
        definition: "Vigour or vivacity of style or performance.",
        example: "The orchestra played with great brio.",
        etymology: "From Italian 'brio' meaning 'vivacity, fire', from Spanish 'brío' (dash, vigor).",
        partOfSpeech: "noun"
    },
    {
        word: "Verve",
        pronunciation: "ˈvərv",
        definition: "Vigour and spirit or enthusiasm.",
        example: "The dancer performed with remarkable verve.",
        etymology: "From French 'verve' meaning 'fancy, caprice, enthusiasm', from Latin 'verba' (words).",
        partOfSpeech: "noun"
    },
    {
        word: "Élan",
        pronunciation: "ā-ˈläⁿ",
        definition: "Energy, style, and enthusiasm.",
        example: "She attacked the project with élan and creativity.",
        etymology: "From French 'élan' meaning 'momentum, rush', from 'élancer' (to dart).",
        partOfSpeech: "noun"
    },
    {
        word: "Flair",
        pronunciation: "ˈfler",
        definition: "Stylish and original way of doing things.",
        example: "She decorated her home with flair and originality.",
        etymology: "From French 'flair' meaning 'sense of smell', from Latin 'fragrare' (to smell).",
        partOfSpeech: "noun"
    },
    {
        word: "Gusto",
        pronunciation: "ˈgə-(ˌ)stō",
        definition: "Enjoyment and vigor in doing something; zest.",
        example: "He ate the meal with gusto.",
        etymology: "From Italian 'gusto' meaning 'taste', from Latin 'gustus' (taste).",
        partOfSpeech: "noun"
    },
    {
        word: "Dynamism",
        pronunciation: "ˈdī-nə-ˌmi-zəm",
        definition: "The quality of being characterized by vigorous activity and progress.",
        example: "The city's dynamism attracted young professionals from around the world.",
        etymology: "From Greek 'dynamis' meaning 'power, force' + '-ism'.",
        partOfSpeech: "noun"
    },
    {
        word: "Vitality",
        pronunciation: "vī-ˈta-lə-tē",
        definition: "The state of being strong and active; energy.",
        example: "Her vitality seemed to increase with age.",
        etymology: "From Latin 'vitalitas', from 'vitalis' (of life), from 'vita' (life).",
        partOfSpeech: "noun"
    },
    {
        word: "Vigor",
        pronunciation: "ˈvi-gər",
        definition: "Physical strength and good health.",
        example: "He pursued his goals with vigor and determination.",
        etymology: "From Latin 'vigor' meaning 'force, energy', from 'vigere' (to be lively).",
        partOfSpeech: "noun"
    },
    {
        word: "Sparkle",
        pronunciation: "ˈspär-kəl",
        definition: "Shine brightly with flashes of light; be vivacious and witty.",
        example: "Her eyes sparkled with excitement.",
        etymology: "From Middle English 'sparklen', frequentative of 'sparken' (to spark).",
        partOfSpeech: "verb"
    },
    {
        word: "Radiate",
        pronunciation: "ˈrā-dē-ˌāt",
        definition: "Emit (energy, especially light or heat) in the form of rays or waves.",
        example: "She radiated confidence and warmth.",
        etymology: "From Latin 'radiare' meaning 'to emit rays', from 'radius' (ray, spoke).",
        partOfSpeech: "verb"
    },
    {
        word: "Gleam",
        pronunciation: "ˈglēm",
        definition: "Shine brightly, especially with reflected light.",
        example: "The polished floor gleamed in the sunlight.",
        etymology: "From Middle English 'gleme', from Old English 'glæm' (brightness, splendor).",
        partOfSpeech: "verb"
    },
    {
        word: "Glow",
        pronunciation: "ˈglō",
        definition: "Give out steady light without flame.",
        example: "The fireflies glowed in the dark garden.",
        etymology: "From Old English 'glōwan' meaning 'to glow, shine'.",
        partOfSpeech: "verb"
    },
    {
        word: "Shimmer",
        pronunciation: "ˈshi-mər",
        definition: "Shine with a soft tremulous light.",
        example: "The lake shimmered in the moonlight.",
        etymology: "From Middle English 'schimeren', from Old English 'scimerian' (to glitter).",
        partOfSpeech: "verb"
    },
    {
        word: "Glisten",
        pronunciation: "ˈgli-sən",
        definition: "Shine with a sparkling light.",
        example: "The dewdrops glistened on the grass.",
        etymology: "From Old English 'glisnian' meaning 'to glitter, shine'.",
        partOfSpeech: "verb"
    },
    {
        word: "Twinkle",
        pronunciation: "ˈtwiŋ-kəl",
        definition: "Shine with a gleam that changes constantly from bright to faint.",
        example: "The stars twinkled in the clear night sky.",
        etymology: "From Middle English 'twinklen', frequentative of 'twinken' (to wink, blink).",
        partOfSpeech: "verb"
    },
    {
        word: "Glimmer",
        pronunciation: "ˈgli-mər",
        definition: "Shine faintly with a wavering light.",
        example: "A light glimmered in the distance.",
        etymology: "From Middle English 'glimeren', from Old English 'glæm' (brightness).",
        partOfSpeech: "verb"
    },
    {
        word: "Beam",
        pronunciation: "ˈbēm",
        definition: "Transmit (a radio signal or broadcast) in a specified direction; smile radiantly.",
        example: "She beamed with pride as her son graduated.",
        etymology: "From Old English 'bēam' meaning 'tree, post, ray of light'.",
        partOfSpeech: "verb"
    },
    {
        word: "Illuminate",
        pronunciation: "i-ˈlü-mə-ˌnāt",
        definition: "Light up; make something visible or bright by shining light on it.",
        example: "The candles illuminated the room with a warm glow.",
        etymology: "From Latin 'illuminare' meaning 'to light up', from 'in-' (in) + 'lumen' (light).",
        partOfSpeech: "verb"
    },
    {
        word: "Brighten",
        pronunciation: "ˈbrī-tᵊn",
        definition: "Make or become more light; make or become happier and more cheerful.",
        example: "Her smile brightened the entire room.",
        etymology: "From Old English 'beorht' (bright) + '-en' (to make).",
        partOfSpeech: "verb"
    },
    {
        word: "Enliven",
        pronunciation: "in-ˈlī-vən",
        definition: "Make (something) more entertaining, interesting, or appealing.",
        example: "The music enlivened the party atmosphere.",
        etymology: "From 'en-' (make) + 'liven' (to make alive), from 'live' + '-en'.",
        partOfSpeech: "verb"
    },
    {
        word: "Energize",
        pronunciation: "ˈe-nər-ˌjīz",
        definition: "Give vitality and enthusiasm to.",
        example: "The pep talk energized the team before the game.",
        etymology: "From 'energy' + '-ize', from Greek 'energeia' (activity).",
        partOfSpeech: "verb"
    },
    {
        word: "Invigorate",
        pronunciation: "in-ˈvi-gə-ˌrāt",
        definition: "Give strength or energy to.",
        example: "The brisk walk invigorated her after a long day.",
        etymology: "From Latin 'invigorare' meaning 'to invigorate', from 'in-' (in) + 'vigor' (strength).",
        partOfSpeech: "verb"
    },
    {
        word: "Enthuse",
        pronunciation: "in-ˈthüz",
        definition: "Make (someone) interested and eagerly appreciative.",
        example: "She enthused about her new hobby to anyone who would listen.",
        etymology: "Back-formation from 'enthusiasm', from Greek 'enthousiasmos' (divine inspiration).",
        partOfSpeech: "verb"
    },
    {
        word: "Excite",
        pronunciation: "ik-ˈsīt",
        definition: "Cause (someone) to feel very enthusiastic and eager.",
        example: "The prospect of traveling excited her greatly.",
        etymology: "From Latin 'excitare' meaning 'to rouse, call out', from 'ex-' (out) + 'citare' (to summon).",
        partOfSpeech: "verb"
    },
    {
        word: "Thrill",
        pronunciation: "ˈthril",
        definition: "Cause (someone) to have a sudden feeling of excitement and pleasure.",
        example: "The roller coaster ride thrilled the children.",
        etymology: "From Old English 'thyrelian' meaning 'to pierce', later used metaphorically for intense emotion.",
        partOfSpeech: "verb"
    },
    {
        word: "Enchant",
        pronunciation: "in-ˈchant",
        definition: "Fill (someone) with great delight; charm.",
        example: "The beautiful melody enchanted the audience.",
        etymology: "From Old French 'enchanter', from Latin 'incantare' (to enchant, cast a spell).",
        partOfSpeech: "verb"
    },
    {
        word: "Captivate",
        pronunciation: "ˈkap-tə-ˌvāt",
        definition: "Attract and hold the interest and attention of; charm.",
        example: "Her storytelling ability captivated the entire room.",
        etymology: "From Latin 'captivare' meaning 'to take captive', from 'captivus' (captive).",
        partOfSpeech: "verb"
    },
    {
        word: "Fascinate",
        pronunciation: "ˈfa-sə-ˌnāt",
        definition: "Draw irresistibly the attention and interest of (someone).",
        example: "The science experiment fascinated the students.",
        etymology: "From Latin 'fascinare' meaning 'to bewitch, enchant', from 'fascinum' (spell).",
        partOfSpeech: "verb"
    },
    {
        word: "Mesmerize",
        pronunciation: "ˈmez-mə-ˌrīz",
        definition: "Hold the attention of (someone) to the exclusion of all else or so as to transfix them.",
        example: "The hypnotic rhythm of the drums mesmerized the crowd.",
        etymology: "From Franz Mesmer (1734-1815), Austrian physician who practiced animal magnetism, + '-ize'.",
        partOfSpeech: "verb"
    },
    {
        word: "Beguile",
        pronunciation: "bi-ˈgī(-ə)l",
        definition: "Charm or enchant (someone), sometimes in a deceptive way.",
        example: "She was beguiled by his smooth talk and charming manner.",
        etymology: "From Middle English 'bigilen' meaning 'to deceive', from 'be-' + 'guile' (deceit).",
        partOfSpeech: "verb"
    },
    {
        word: "Delight",
        pronunciation: "di-ˈlīt",
        definition: "Please (someone) greatly.",
        example: "The surprise party delighted her immensely.",
        etymology: "From Old French 'delitier' (to please), from Latin 'delectare' (to delight).",
        partOfSpeech: "verb"
    },
    {
        word: "Amuse",
        pronunciation: "ə-ˈmyüz",
        definition: "Cause (someone) to find something funny; entertain.",
        example: "The comedian's jokes amused the entire audience.",
        etymology: "From French 'amuser' meaning 'to divert, amuse', from Old French 'muser' (to stare stupidly).",
        partOfSpeech: "verb"
    },
    {
        word: "Entertain",
        pronunciation: "en-tər-ˈtān",
        definition: "Provide (someone) with amusement or enjoyment.",
        example: "The magician entertained the children with amazing tricks.",
        etymology: "From Old French 'entretenir' meaning 'to maintain, keep', from Latin 'inter-' (among) + 'tenere' (to hold).",
        partOfSpeech: "verb"
    },
    {
        word: "Cheer",
        pronunciation: "ˈchir",
        definition: "Make or become less miserable; comfort.",
        example: "The warm soup cheered him up after a long day.",
        etymology: "From Old French 'chiere' meaning 'face, countenance', later used to mean 'mood, cheer'.",
        partOfSpeech: "verb"
    },
    {
        word: "Uplift",
        pronunciation: "ˌəp-ˈlift",
        definition: "Raise the level of; improve the condition of.",
        example: "The inspiring speech uplifted the spirits of everyone present.",
        etymology: "From 'up' + 'lift', from Old Norse 'lypta' (to raise).",
        partOfSpeech: "verb"
    },
    {
        word: "Elevate",
        pronunciation: "ˈe-lə-ˌvāt",
        definition: "Raise or lift (something) to a higher position; raise to a more important or impressive level.",
        example: "The promotion elevated her to a position of greater responsibility.",
        etymology: "From Latin 'elevare' meaning 'to raise', from 'e-' (out) + 'levare' (to lighten, raise).",
        partOfSpeech: "verb"
    },
    {
        word: "Inspire",
        pronunciation: "in-ˈspī(-ə)r",
        definition: "Fill (someone) with the urge or ability to do or feel something, especially to do something creative.",
        example: "Her courage inspired others to overcome their fears.",
        etymology: "From Latin 'inspirare' meaning 'to breathe into', from 'in-' (in) + 'spirare' (to breathe).",
        partOfSpeech: "verb"
    },
    {
        word: "Motivate",
        pronunciation: "ˈmō-tə-ˌvāt",
        definition: "Provide (someone) with a motive for doing something; stimulate interest in or enthusiasm for doing something.",
        example: "The teacher's encouragement motivated the students to study harder.",
        etymology: "From 'motive' + '-ate', from Latin 'motivus' (moving).",
        partOfSpeech: "verb"
    },
    {
        word: "Encourage",
        pronunciation: "in-ˈkər-ij",
        definition: "Give support, confidence, or hope to (someone).",
        example: "Her parents always encouraged her to pursue her dreams.",
        etymology: "From Old French 'encoragier' meaning 'to make strong', from 'en-' + 'corage' (courage).",
        partOfSpeech: "verb"
    },
    {
        word: "Rejuvenate",
        pronunciation: "ri-ˈjü-və-ˌnāt",
        definition: "Make (someone or something) look or feel better, younger, or more vital.",
        example: "The vacation rejuvenated her both physically and mentally.",
        etymology: "From 're-' (again) + Latin 'juvenis' (young) + '-ate'.",
        partOfSpeech: "verb"
    },
    {
        word: "Refresh",
        pronunciation: "ri-ˈfresh",
        definition: "Give new strength or energy to; reinvigorate.",
        example: "The cool breeze refreshed her after the long hike.",
        etymology: "From Old French 'refreschir', from 're-' (again) + 'fresche' (fresh).",
        partOfSpeech: "verb"
    },
    {
        word: "Revitalize",
        pronunciation: "rē-ˈvī-tə-ˌlīz",
        definition: "Imbue (something) with new life and vitality.",
        example: "The renovation revitalized the old neighborhood.",
        etymology: "From 're-' (again) + 'vital' + '-ize', from Latin 'vita' (life).",
        partOfSpeech: "verb"
    },
    {
        word: "Recharge",
        pronunciation: "rē-ˈchärj",
        definition: "Restore an electric charge to (a battery or battery-powered device); regain one's strength or energy.",
        example: "She took a nap to recharge her energy.",
        etymology: "From 're-' (again) + 'charge', from Latin 'carricare' (to load).",
        partOfSpeech: "verb"
    },
    {
        word: "Restore",
        pronunciation: "ri-ˈstȯr",
        definition: "Bring back (a previous right, practice, custom, or situation); reinstate.",
        example: "The therapist helped restore her confidence.",
        etymology: "From Old French 'restorer', from Latin 'restaurare' (to rebuild, restore).",
        partOfSpeech: "verb"
    },
    {
        word: "Renew",
        pronunciation: "ri-ˈnü",
        definition: "Resume (an activity) after an interruption; give fresh life or strength to.",
        example: "The spring rain renewed the parched earth.",
        etymology: "From Old French 'renoveler', from Latin 'renovare' (to make new again).",
        partOfSpeech: "verb"
    },
    {
        word: "Magnificent",
        pronunciation: "mag-ˈni-fə-sənt",
        definition: "Extremely beautiful, elaborate, or impressive.",
        example: "The magnificent sunset painted the sky in shades of orange and pink.",
        etymology: "From Latin 'magnificus' meaning 'doing great things', from 'magnus' (great) + 'facere' (to do).",
        partOfSpeech: "adjective"
    },
    {
        word: "Splendid",
        pronunciation: "ˈsplen-dəd",
        definition: "Magnificent; very impressive.",
        example: "They had a splendid time at the beach party.",
        etymology: "From Latin 'splendidus' meaning 'bright, shining', from 'splendere' (to shine).",
        partOfSpeech: "adjective"
    },
    {
        word: "Brilliant",
        pronunciation: "ˈbril-yənt",
        definition: "Exceptionally clever or talented; very bright and radiant.",
        example: "She came up with a brilliant solution to the problem.",
        etymology: "From French 'brillant' meaning 'shining', from Italian 'brillare' (to sparkle).",
        partOfSpeech: "adjective"
    },
    {
        word: "Wonderful",
        pronunciation: "ˈwən-dər-fəl",
        definition: "Inspiring delight, pleasure, or admiration; extremely good; marvelous.",
        example: "It was a wonderful day filled with laughter and joy.",
        etymology: "From Old English 'wundor' (wonder) + '-ful'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Marvelous",
        pronunciation: "ˈmär-və-ləs",
        definition: "Causing great wonder; extraordinary.",
        example: "The magician performed a marvelous trick that amazed everyone.",
        etymology: "From Old French 'merveilleus', from Latin 'mirabilis' (wonderful), from 'mirari' (to wonder).",
        partOfSpeech: "adjective"
    },
    {
        word: "Fantastic",
        pronunciation: "fan-ˈta-stik",
        definition: "Extraordinarily good or attractive.",
        example: "They had a fantastic time at the concert.",
        etymology: "From Greek 'phantastikos' meaning 'able to create mental images', from 'phantazein' (to make visible).",
        partOfSpeech: "adjective"
    },
    {
        word: "Terrific",
        pronunciation: "tə-ˈri-fik",
        definition: "Extraordinarily great or intense; extremely good.",
        example: "She did a terrific job organizing the event.",
        etymology: "From Latin 'terrificus' meaning 'causing terror', later used ironically to mean 'excellent'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Fabulous",
        pronunciation: "ˈfa-byə-ləs",
        definition: "Extraordinary, especially extraordinarily large.",
        example: "They threw a fabulous party that everyone talked about for weeks.",
        etymology: "From Latin 'fabulosus' meaning 'celebrated in fable', from 'fabula' (story).",
        partOfSpeech: "adjective"
    },
    {
        word: "Superb",
        pronunciation: "su̇-ˈpərb",
        definition: "Excellent; of the highest quality.",
        example: "The restaurant served superb cuisine that exceeded all expectations.",
        etymology: "From Latin 'superbus' meaning 'proud, magnificent', from 'super' (above).",
        partOfSpeech: "adjective"
    },
    {
        word: "Exceptional",
        pronunciation: "ik-ˈsep-shə-nᵊl",
        definition: "Unusually good; outstanding.",
        example: "She showed exceptional talent in mathematics from a young age.",
        etymology: "From Latin 'exceptionalis', from 'exceptio' (exception), from 'excipere' (to take out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Outstanding",
        pronunciation: "au̇t-ˈstan-diŋ",
        definition: "Exceptionally good.",
        example: "The student received an award for outstanding academic achievement.",
        etymology: "From 'out' + 'stand', meaning 'standing out from others'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Remarkable",
        pronunciation: "ri-ˈmär-kə-bəl",
        definition: "Worthy of attention; striking.",
        example: "She made a remarkable recovery after the surgery.",
        etymology: "From French 'remarquable', from 'remarquer' (to remark), from 're-' + 'marquer' (to mark).",
        partOfSpeech: "adjective"
    },
    {
        word: "Extraordinary",
        pronunciation: "ik-ˈstrȯr-də-ˌner-ē",
        definition: "Very unusual or remarkable.",
        example: "The artist's work was truly extraordinary and moved everyone who saw it.",
        etymology: "From Latin 'extraordinarius', from 'extra' (outside) + 'ordo' (order).",
        partOfSpeech: "adjective"
    },
    {
        word: "Phenomenal",
        pronunciation: "fə-ˈnä-mə-nᵊl",
        definition: "Remarkable or exceptional, especially exceptionally good.",
        example: "The team's performance was phenomenal, setting a new record.",
        etymology: "From Greek 'phainomenon' meaning 'thing appearing to view', from 'phainein' (to show).",
        partOfSpeech: "adjective"
    },
    {
        word: "Stupendous",
        pronunciation: "stu̇-ˈpen-dəs",
        definition: "Extremely impressive.",
        example: "The view from the mountain top was stupendous.",
        etymology: "From Latin 'stupendus' meaning 'to be wondered at', from 'stupere' (to be stunned).",
        partOfSpeech: "adjective"
    },
    {
        word: "Astounding",
        pronunciation: "ə-ˈstau̇n-diŋ",
        definition: "Surprisingly impressive or notable.",
        example: "The magician's tricks were truly astounding.",
        etymology: "From 'astound' + '-ing', from Old French 'estoner' (to stun, astonish).",
        partOfSpeech: "adjective"
    },
    {
        word: "Breathtaking",
        pronunciation: "ˈbreth-ˌtā-kiŋ",
        definition: "Astonishing or awe-inspiring in quality, so as to take one's breath away.",
        example: "The Grand Canyon offers breathtaking views that leave visitors speechless.",
        etymology: "From 'breath' + 'taking', meaning something that literally takes one's breath away.",
        partOfSpeech: "adjective"
    },
    {
        word: "Spectacular",
        pronunciation: "spek-ˈta-kyə-lər",
        definition: "Beautiful in a dramatic and eye-catching way.",
        example: "The fireworks display was absolutely spectacular.",
        etymology: "From Latin 'spectaculum' meaning 'a public show', from 'spectare' (to watch).",
        partOfSpeech: "adjective"
    },
    {
        word: "Stunning",
        pronunciation: "ˈstə-niŋ",
        definition: "Extremely impressive or attractive.",
        example: "She looked stunning in her evening gown.",
        etymology: "From 'stun' + '-ing', from Old French 'estoner' (to stun, amaze).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gorgeous",
        pronunciation: "ˈgȯr-jəs",
        definition: "Beautiful; very attractive.",
        example: "The garden was absolutely gorgeous in full bloom.",
        etymology: "From French 'gorgias' meaning 'elegant, fashionable', of uncertain origin.",
        partOfSpeech: "adjective"
    },
    {
        word: "Exquisite",
        pronunciation: "ek-ˈskwi-zət",
        definition: "Extremely beautiful and delicate.",
        example: "The jewelry was crafted with exquisite attention to detail.",
        etymology: "From Latin 'exquisitus' meaning 'carefully sought out', from 'exquirere' (to search out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Dazzling",
        pronunciation: "ˈda-zə-liŋ",
        definition: "Extremely impressive, beautiful, or skillful.",
        example: "The diamond's dazzling brilliance caught everyone's attention.",
        etymology: "From 'dazzle' + '-ing', from Middle English 'daselen' (to be dazed).",
        partOfSpeech: "adjective"
    },
    {
        word: "Ravishing",
        pronunciation: "ˈra-vi-shiŋ",
        definition: "Delightful; entrancing.",
        example: "She was a ravishing beauty who turned heads wherever she went.",
        etymology: "From Old French 'raviss-' (stem of 'ravir' to seize), from Latin 'rapere' (to seize).",
        partOfSpeech: "adjective"
    },
    {
        word: "Lovely",
        pronunciation: "ˈləv-lē",
        definition: "Very beautiful or attractive.",
        example: "They spent a lovely afternoon in the park.",
        etymology: "From Old English 'luflic' meaning 'loving, kind', from 'lufu' (love) + '-lic'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Charming",
        pronunciation: "ˈchär-miŋ",
        definition: "Very pleasant or attractive.",
        example: "The charming little cottage was perfect for their weekend getaway.",
        etymology: "From Old French 'charmant', present participle of 'charmer' (to charm), from Latin 'carmen' (song, spell).",
        partOfSpeech: "adjective"
    },
    {
        word: "Delightful",
        pronunciation: "di-ˈlīt-fəl",
        definition: "Causing delight; charming.",
        example: "The children's performance was absolutely delightful.",
        etymology: "From 'delight' + '-ful', from Old French 'delitier' (to please).",
        partOfSpeech: "adjective"
    },
    {
        word: "Pleasant",
        pronunciation: "ˈple-zᵊnt",
        definition: "Giving a sense of happy satisfaction or enjoyment.",
        example: "It was a pleasant surprise to see old friends at the party.",
        etymology: "From Old French 'plaisant', present participle of 'plaire' (to please), from Latin 'placere'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Agreeable",
        pronunciation: "ə-ˈgrē-ə-bəl",
        definition: "Enjoyable and pleasurable; pleasant.",
        example: "They spent an agreeable evening discussing books and music.",
        etymology: "From Old French 'agreable', from 'agreer' (to agree, please), from Latin 'ad' + 'gratus' (pleasing).",
        partOfSpeech: "adjective"
    },
    {
        word: "Enjoyable",
        pronunciation: "in-ˈjȯi-ə-bəl",
        definition: "Giving delight or pleasure.",
        example: "The concert was highly enjoyable from start to finish.",
        etymology: "From 'enjoy' + '-able', from Old French 'enjoir' (to give joy).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gratifying",
        pronunciation: "ˈgra-tə-ˌfī-iŋ",
        definition: "Giving pleasure or satisfaction.",
        example: "It was gratifying to see her hard work finally pay off.",
        etymology: "From 'gratify' + '-ing', from Latin 'gratificari' (to do a favor), from 'gratus' (pleasing).",
        partOfSpeech: "adjective"
    },
    {
        word: "Satisfying",
        pronunciation: "ˈsa-təs-ˌfī-iŋ",
        definition: "Giving fulfillment or the pleasure associated with this.",
        example: "Completing the marathon was an incredibly satisfying achievement.",
        etymology: "From 'satisfy' + '-ing', from Latin 'satis' (enough) + 'facere' (to make).",
        partOfSpeech: "adjective"
    },
    {
        word: "Rewarding",
        pronunciation: "ri-ˈwȯr-diŋ",
        definition: "Providing satisfaction; gratifying.",
        example: "Teaching is a rewarding profession that makes a real difference.",
        etymology: "From 'reward' + '-ing', from Old French 'reguarder' (to regard, reward).",
        partOfSpeech: "adjective"
    },
    {
        word: "Fulfilling",
        pronunciation: "fu̇l-ˈfi-liŋ",
        definition: "Causing someone to feel satisfied or happy because of fully developing their character or abilities.",
        example: "She found her new career to be deeply fulfilling.",
        etymology: "From 'fulfill' + '-ing', from Old English 'fullfyllan' (to fill full, complete).",
        partOfSpeech: "adjective"
    },
    {
        word: "Enriching",
        pronunciation: "in-ˈrich-iŋ",
        definition: "Improving or enhancing the quality or value of.",
        example: "Traveling to different countries was an enriching experience.",
        etymology: "From 'enrich' + '-ing', from Old French 'enrichir', from 'en-' + 'riche' (rich).",
        partOfSpeech: "adjective"
    },
    {
        word: "Uplifting",
        pronunciation: "ˌəp-ˈlif-tiŋ",
        definition: "Morally or spiritually elevating; inspiring happiness or hope.",
        example: "The choir's performance was truly uplifting and moved the audience.",
        etymology: "From 'uplift' + '-ing', from 'up' + 'lift'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Inspiring",
        pronunciation: "in-ˈspīr-iŋ",
        definition: "Having the effect of inspiring someone.",
        example: "Her story was inspiring and motivated others to pursue their dreams.",
        etymology: "From 'inspire' + '-ing', from Latin 'inspirare' (to breathe into).",
        partOfSpeech: "adjective"
    },
    {
        word: "Heartwarming",
        pronunciation: "ˈhärt-ˌwȯr-miŋ",
        definition: "Causing feelings of happiness and pleasure.",
        example: "The reunion between the long-lost siblings was a heartwarming moment.",
        etymology: "From 'heart' + 'warming', meaning something that warms the heart emotionally.",
        partOfSpeech: "adjective"
    },
    {
        word: "Touching",
        pronunciation: "ˈtə-chiŋ",
        definition: "Arousing feelings of sympathy or gratitude.",
        example: "The child's innocent gesture was deeply touching.",
        etymology: "From 'touch' + '-ing', from Old French 'touchier' (to touch).",
        partOfSpeech: "adjective"
    },
    {
        word: "Moving",
        pronunciation: "ˈmü-viŋ",
        definition: "Stirring strong emotions, especially sadness or sympathy.",
        example: "The memorial service was a moving tribute to those who had passed.",
        etymology: "From 'move' + '-ing', from Latin 'movere' (to move).",
        partOfSpeech: "adjective"
    },
    {
        word: "Poignant",
        pronunciation: "ˈpȯi-nyənt",
        definition: "Evoking a keen sense of sadness or regret.",
        example: "The poignant photograph reminded her of happier times.",
        etymology: "From Old French 'poignant' meaning 'sharp, pungent', from Latin 'pungere' (to prick).",
        partOfSpeech: "adjective"
    },
    {
        word: "Stirring",
        pronunciation: "ˈstər-iŋ",
        definition: "Causing excitement or strong emotion; rousing.",
        example: "The general gave a stirring speech that rallied the troops.",
        etymology: "From 'stir' + '-ing', from Old English 'styrian' (to move, agitate).",
        partOfSpeech: "adjective"
    },
    {
        word: "Rousing",
        pronunciation: "ˈrau̇-ziŋ",
        definition: "Exciting; stirring.",
        example: "The rousing anthem brought the crowd to their feet.",
        etymology: "From 'rouse' + '-ing', from Middle English 'rousen' (to shake, disturb).",
        partOfSpeech: "adjective"
    },
    {
        word: "Exhilarating",
        pronunciation: "ig-ˈzi-lə-ˌrā-tiŋ",
        definition: "Making one feel very happy, animated, or elated; thrilling.",
        example: "Skydiving was an exhilarating experience she would never forget.",
        etymology: "From 'exhilarate' + '-ing', from Latin 'exhilarare' (to make cheerful).",
        partOfSpeech: "adjective"
    },
    {
        word: "Thrilling",
        pronunciation: "ˈthri-liŋ",
        definition: "Causing excitement and pleasure; exhilarating.",
        example: "The roller coaster ride was absolutely thrilling.",
        etymology: "From 'thrill' + '-ing', from Old English 'thyrelian' (to pierce).",
        partOfSpeech: "adjective"
    },
    {
        word: "Exciting",
        pronunciation: "ik-ˈsī-tiŋ",
        definition: "Causing great enthusiasm and eagerness.",
        example: "The exciting news spread quickly throughout the office.",
        etymology: "From 'excite' + '-ing', from Latin 'excitare' (to rouse, call out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Adventurous",
        pronunciation: "əd-ˈven-chə-rəs",
        definition: "Willing to take risks or to try out new methods, ideas, or experiences.",
        example: "They led an adventurous life, traveling to remote corners of the world.",
        etymology: "From 'adventure' + '-ous', from Old French 'aventure' (chance, fate, event).",
        partOfSpeech: "adjective"
    },
    {
        word: "Bold",
        pronunciation: "ˈbōld",
        definition: "Showing an ability to take risks; confident and courageous.",
        example: "She made a bold decision to start her own business.",
        etymology: "From Old English 'beald' meaning 'bold, brave, confident'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Daring",
        pronunciation: "ˈder-iŋ",
        definition: "Adventurous or audaciously bold.",
        example: "The daring acrobat performed death-defying stunts.",
        etymology: "From Old English 'dearr' (dare) + '-ing', meaning 'willing to take risks'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Courageous",
        pronunciation: "kə-ˈrā-jəs",
        definition: "Not deterred by danger or pain; brave.",
        example: "The firefighter made a courageous rescue in the burning building.",
        etymology: "From Old French 'corageux', from 'corage' (courage), from Latin 'cor' (heart).",
        partOfSpeech: "adjective"
    },
    {
        word: "Brave",
        pronunciation: "ˈbrāv",
        definition: "Ready to face and endure danger or pain; showing courage.",
        example: "The brave soldier risked his life to save his comrades.",
        etymology: "From French 'brave' meaning 'valiant, bold', from Italian 'bravo' (brave, wild).",
        partOfSpeech: "adjective"
    },
    {
        word: "Heroic",
        pronunciation: "hi-ˈrō-ik",
        definition: "Having the characteristics of a hero or heroine; very brave.",
        example: "The rescue team performed heroic efforts to save the trapped miners.",
        etymology: "From Latin 'heroicus', from Greek 'hērōikos', from 'hērōs' (hero).",
        partOfSpeech: "adjective"
    },
    {
        word: "Valiant",
        pronunciation: "ˈval-yənt",
        definition: "Possessing or showing courage or determination.",
        example: "The valiant knight fought to protect the kingdom.",
        etymology: "From Old French 'vaillant', from Latin 'valere' (to be strong, be worth).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gallant",
        pronunciation: "ˈga-lənt",
        definition: "Brave; heroic; (of a man) charmingly attentive and chivalrous to women.",
        example: "He was a gallant soldier who earned many medals for bravery.",
        etymology: "From Old French 'galant', from 'galer' (to make merry), from 'gale' (pleasure, rejoicing).",
        partOfSpeech: "adjective"
    },
    {
        word: "Intrepid",
        pronunciation: "in-ˈtre-pəd",
        definition: "Fearless; adventurous (often used for rhetorical or humorous effect).",
        example: "The intrepid explorer ventured into uncharted territories.",
        etymology: "From Latin 'intrepidus' meaning 'unshaken, undaunted', from 'in-' (not) + 'trepidus' (alarmed).",
        partOfSpeech: "adjective"
    },
    {
        word: "Fearless",
        pronunciation: "ˈfir-ləs",
        definition: "Lacking fear.",
        example: "She was a fearless advocate for social justice.",
        etymology: "From 'fear' + '-less', from Old English 'fǣr' (danger, sudden peril).",
        partOfSpeech: "adjective"
    },
    {
        word: "Dauntless",
        pronunciation: "ˈdȯnt-ləs",
        definition: "Showing fearlessness and determination.",
        example: "The dauntless mountain climber reached the summit despite the harsh conditions.",
        etymology: "From 'daunt' + '-less', from Old French 'danter' (to tame, subdue), from Latin 'domitare'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Indomitable",
        pronunciation: "in-ˈdä-mə-tə-bəl",
        definition: "Impossible to subdue or defeat.",
        example: "Her indomitable spirit helped her overcome every obstacle.",
        etymology: "From Late Latin 'indomitabilis', from 'in-' (not) + 'domitare' (to tame).",
        partOfSpeech: "adjective"
    },
    {
        word: "Unstoppable",
        pronunciation: "ən-ˈstä-pə-bəl",
        definition: "Unable to be stopped or prevented from continuing.",
        example: "The team's momentum was unstoppable, winning every game.",
        etymology: "From 'un-' (not) + 'stop' + '-able', from Old English 'stoppian' (to stop up).",
        partOfSpeech: "adjective"
    },
    {
        word: "Unwavering",
        pronunciation: "ən-ˈwā-və-riŋ",
        definition: "Steady or resolute; not wavering.",
        example: "She showed unwavering determination to achieve her goals.",
        etymology: "From 'un-' (not) + 'waver' + '-ing', from Old Norse 'vafra' (to flicker).",
        partOfSpeech: "adjective"
    },
    {
        word: "Determined",
        pronunciation: "di-ˈtər-mənd",
        definition: "Having made a firm decision and being resolved not to change it.",
        example: "He was determined to finish the marathon, no matter how difficult.",
        etymology: "From 'determine' + '-ed', from Latin 'determinare' (to limit, decide).",
        partOfSpeech: "adjective"
    },
    {
        word: "Resolute",
        pronunciation: "ˈre-zə-ˌlüt",
        definition: "Admirably purposeful, determined, and unwavering.",
        example: "She remained resolute in her commitment to the cause.",
        etymology: "From Latin 'resolutus', past participle of 'resolvere' (to resolve), from 're-' + 'solvere' (to loosen).",
        partOfSpeech: "adjective"
    },
    {
        word: "Steadfast",
        pronunciation: "ˈsted-ˌfast",
        definition: "Resolutely or dutifully firm and unwavering.",
        example: "His steadfast support helped her through difficult times.",
        etymology: "From Old English 'stede' (place) + 'fæst' (fast, firm), meaning 'fixed in place'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Persevering",
        pronunciation: "pər-sə-ˈvir-iŋ",
        definition: "Continuing in a course of action despite difficulty or with little or no prospect of success.",
        example: "Her persevering efforts finally led to a breakthrough.",
        etymology: "From 'persevere' + '-ing', from Latin 'perseverare' (to continue steadfastly).",
        partOfSpeech: "adjective"
    },
    {
        word: "Tenacious",
        pronunciation: "tə-ˈnā-shəs",
        definition: "Tending to keep a firm hold of something; clinging or adhering closely.",
        example: "The tenacious detective never gave up on solving the case.",
        etymology: "From Latin 'tenax' meaning 'holding fast', from 'tenere' (to hold).",
        partOfSpeech: "adjective"
    },
    {
        word: "Persistent",
        pronunciation: "pər-ˈsi-stənt",
        definition: "Continuing firmly or obstinately in a course of action in spite of difficulty or opposition.",
        example: "His persistent questioning eventually revealed the truth.",
        etymology: "From Latin 'persistere' meaning 'to continue steadfastly', from 'per-' (through) + 'sistere' (to stand).",
        partOfSpeech: "adjective"
    },
    {
        word: "Relentless",
        pronunciation: "ri-ˈlent-ləs",
        definition: "Unyieldingly severe, strict, or harsh.",
        example: "The relentless rain continued for three days straight.",
        etymology: "From 'relent' + '-less', from Latin 're-' + 'lentare' (to bend).",
        partOfSpeech: "adjective"
    },
    {
        word: "Tireless",
        pronunciation: "ˈtī(-ə)r-ləs",
        definition: "Having or showing great effort or energy.",
        example: "She was a tireless advocate for children's rights.",
        etymology: "From 'tire' + '-less', from Old English 'teorian' (to fail, be exhausted).",
        partOfSpeech: "adjective"
    },
    {
        word: "Indefatigable",
        pronunciation: "in-di-ˈfa-ti-gə-bəl",
        definition: "Persisting tirelessly; never giving up.",
        example: "His indefatigable efforts transformed the community center.",
        etymology: "From Latin 'indefatigabilis', from 'in-' (not) + 'defatigare' (to tire out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Unflagging",
        pronunciation: "ən-ˈfla-giŋ",
        definition: "Tireless; persistent.",
        example: "She showed unflagging enthusiasm for the project.",
        etymology: "From 'un-' (not) + 'flag' + '-ing', from 'flag' meaning 'to become limp, droop'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Enduring",
        pronunciation: "in-ˈdu̇r-iŋ",
        definition: "Lasting over a period of time; durable.",
        example: "Their enduring friendship lasted throughout their lives.",
        etymology: "From 'endure' + '-ing', from Latin 'indurare' (to harden, make lasting).",
        partOfSpeech: "adjective"
    },
    {
        word: "Lasting",
        pronunciation: "ˈla-stiŋ",
        definition: "Continuing for a long time; enduring.",
        example: "The meeting had a lasting impact on everyone present.",
        etymology: "From 'last' + '-ing', from Old English 'lǣstan' (to follow, continue).",
        partOfSpeech: "adjective"
    },
    {
        word: "Perennial",
        pronunciation: "pə-ˈre-nē-əl",
        definition: "Lasting or existing for a long or apparently infinite time; enduring.",
        example: "Love is a perennial theme in literature and art.",
        etymology: "From Latin 'perennis' meaning 'lasting through the year', from 'per-' (through) + 'annus' (year).",
        partOfSpeech: "adjective"
    },
    {
        word: "Timeless",
        pronunciation: "ˈtīm-ləs",
        definition: "Not affected by the passage of time or changes in fashion.",
        example: "Classical music has a timeless appeal that transcends generations.",
        etymology: "From 'time' + '-less', from Old English 'tīma' (time, period).",
        partOfSpeech: "adjective"
    },
    {
        word: "Eternal",
        pronunciation: "i-ˈtər-nᵊl",
        definition: "Lasting or existing forever; without end.",
        example: "Their love for each other seemed eternal.",
        etymology: "From Latin 'aeternus' meaning 'enduring, everlasting', from 'aevum' (age).",
        partOfSpeech: "adjective"
    },
    {
        word: "Everlasting",
        pronunciation: "e-vər-ˈla-stiŋ",
        definition: "Lasting forever or a very long time.",
        example: "The stars seemed to shine with an everlasting light.",
        etymology: "From Old English 'ǣfre' (ever) + 'lǣstan' (to last), meaning 'lasting forever'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Immortal",
        pronunciation: "i-ˈmȯr-tᵊl",
        definition: "Living forever; never dying or decaying.",
        example: "The hero's deeds made him immortal in legend.",
        etymology: "From Latin 'immortalis', from 'in-' (not) + 'mortalis' (mortal), from 'mors' (death).",
        partOfSpeech: "adjective"
    },
    {
        word: "Undying",
        pronunciation: "ən-ˈdī-iŋ",
        definition: "Never ending; eternal.",
        example: "She felt undying gratitude toward her mentor.",
        etymology: "From 'un-' (not) + 'die' + '-ing', from Old Norse 'deyja' (to die).",
        partOfSpeech: "adjective"
    },
    {
        word: "Infinite",
        pronunciation: "ˈin-fə-nət",
        definition: "Limitless or endless in space, extent, or size; impossible to measure or calculate.",
        example: "The universe appears to be infinite in scope.",
        etymology: "From Latin 'infinitus' meaning 'unbounded, unlimited', from 'in-' (not) + 'finitus' (limited).",
        partOfSpeech: "adjective"
    },
    {
        word: "Boundless",
        pronunciation: "ˈbau̇n(d)-ləs",
        definition: "Unlimited or immense.",
        example: "The ocean stretched out in boundless blue before them.",
        etymology: "From 'bound' + '-less', from Old English 'būgan' (to bend, turn).",
        partOfSpeech: "adjective"
    },
    {
        word: "Unlimited",
        pronunciation: "ən-ˈli-mə-təd",
        definition: "Not limited or restricted in terms of number, quantity, or extent.",
        example: "The all-inclusive resort offered unlimited activities and dining options.",
        etymology: "From 'un-' (not) + 'limit' + '-ed', from Latin 'limes' (boundary).",
        partOfSpeech: "adjective"
    },
    {
        word: "Limitless",
        pronunciation: "ˈli-mət-ləs",
        definition: "Without end, limit, or boundary.",
        example: "Her potential seemed limitless.",
        etymology: "From 'limit' + '-less', from Latin 'limes' (boundary).",
        partOfSpeech: "adjective"
    },
    {
        word: "Vast",
        pronunciation: "ˈvast",
        definition: "Of very great extent or quantity; immense.",
        example: "The vast desert stretched to the horizon in every direction.",
        etymology: "From Latin 'vastus' meaning 'empty, desolate, immense'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Immense",
        pronunciation: "i-ˈmen(t)s",
        definition: "Extremely large or great, especially in scale or degree.",
        example: "The project required an immense amount of planning and coordination.",
        etymology: "From Latin 'immensus' meaning 'immeasurable', from 'in-' (not) + 'mensus' (measured).",
        partOfSpeech: "adjective"
    },
    {
        word: "Enormous",
        pronunciation: "i-ˈnȯr-məs",
        definition: "Very large in size, quantity, or extent.",
        example: "The elephant was enormous, towering over all the other animals.",
        etymology: "From Latin 'enormis' meaning 'abnormal, huge', from 'e-' (out of) + 'norma' (norm, rule).",
        partOfSpeech: "adjective"
    },
    {
        word: "Colossal",
        pronunciation: "kə-ˈlä-səl",
        definition: "Extremely large.",
        example: "The construction project was a colossal undertaking.",
        etymology: "From Latin 'colosseus', from 'colossus' (giant statue), from Greek 'kolossos'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Tremendous",
        pronunciation: "tri-ˈmen-dəs",
        definition: "Very great in amount, scale, or intensity.",
        example: "She showed tremendous courage in the face of adversity.",
        etymology: "From Latin 'tremendus' meaning 'to be trembled at', from 'tremere' (to tremble).",
        partOfSpeech: "adjective"
    },
    {
        word: "Monumental",
        pronunciation: "mä-nyə-ˈmen-tᵊl",
        definition: "Great in importance, extent, or size.",
        example: "The discovery was a monumental achievement for science.",
        etymology: "From Latin 'monumentalis', from 'monumentum' (monument, memorial), from 'monere' (to remind).",
        partOfSpeech: "adjective"
    },
    {
        word: "Prodigious",
        pronunciation: "prə-ˈdi-jəs",
        definition: "Remarkably or impressively great in extent, size, or degree.",
        example: "The young musician showed prodigious talent at an early age.",
        etymology: "From Latin 'prodigiosus' meaning 'portentous, marvelous', from 'prodigium' (portent, omen).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gigantic",
        pronunciation: "jī-ˈgan-tik",
        definition: "Of very great size or extent; huge or enormous.",
        example: "The gigantic waterfall was a breathtaking sight.",
        etymology: "From Greek 'gigas' (giant) + '-ic', from Latin 'giganteus'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Massive",
        pronunciation: "ˈma-siv",
        definition: "Large and heavy or solid.",
        example: "The massive statue dominated the square.",
        etymology: "From French 'massif', from 'masse' (mass), from Latin 'massa' (lump, dough).",
        partOfSpeech: "adjective"
    },
    {
        word: "Huge",
        pronunciation: "ˈhyüj",
        definition: "Extremely large; enormous.",
        example: "They lived in a huge mansion with dozens of rooms.",
        etymology: "Of uncertain origin, possibly from Old French 'ahuge' or related to 'hug' (to embrace, encircle).",
        partOfSpeech: "adjective"
    },
    {
        word: "Giant",
        pronunciation: "ˈjī-ənt",
        definition: "Of very great size or force; gigantic.",
        example: "The giant redwood trees towered above the forest floor.",
        etymology: "From Greek 'gigas' (giant), from Indo-European root meaning 'earth-born'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Titanic",
        pronunciation: "tī-ˈta-nik",
        definition: "Of exceptional strength, size, or power.",
        example: "The titanic waves crashed against the rocky shore.",
        etymology: "From 'Titan' + '-ic', from Greek 'Titan' (one of the race of giants in mythology).",
        partOfSpeech: "adjective"
    },
    {
        word: "Mammoth",
        pronunciation: "ˈma-məth",
        definition: "Huge; enormous.",
        example: "The company undertook a mammoth reorganization effort.",
        etymology: "From Russian 'mamont', referring to the extinct elephant-like mammal, used metaphorically for size.",
        partOfSpeech: "adjective"
    },
    {
        word: "Jumbo",
        pronunciation: "ˈjəm-(ˌ)bō",
        definition: "Very large.",
        example: "They ordered jumbo shrimp for the party.",
        etymology: "Named after Jumbo, a famous 19th-century elephant in the London Zoo, from Swahili 'jambo' (hello) or 'jumbe' (chief).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sprawling",
        pronunciation: "ˈsprȯ-liŋ",
        definition: "Spreading out over a large area in an untidy or irregular way.",
        example: "The sprawling metropolis extended for miles in every direction.",
        etymology: "From Middle English 'sprawlen', of unknown origin, possibly related to 'spread'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Expansive",
        pronunciation: "ik-ˈspan(t)-siv",
        definition: "Covering a wide area in terms of space or scope; extensive.",
        example: "The view from the mountaintop was expansive and breathtaking.",
        etymology: "From Latin 'expansus', past participle of 'expandere' (to spread out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Extensive",
        pronunciation: "ik-ˈsten(t)-siv",
        definition: "Covering or affecting a large area.",
        example: "The fire caused extensive damage to the building.",
        etymology: "From Latin 'extensus', past participle of 'extendere' (to stretch out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Comprehensive",
        pronunciation: "käm-pri-ˈhen(t)-siv",
        definition: "Including or dealing with all or nearly all elements or aspects of something.",
        example: "The library offered a comprehensive collection of historical documents.",
        etymology: "From Late Latin 'comprehensivus', from 'comprehendere' (to grasp, include).",
        partOfSpeech: "adjective"
    },
    {
        word: "Wide",
        pronunciation: "ˈwīd",
        definition: "Of great or more than average width.",
        example: "The wide river flowed peacefully through the valley.",
        etymology: "From Old English 'wīd' meaning 'spacious, extensive, far-reaching'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Broad",
        pronunciation: "ˈbrȯd",
        definition: "Having a distance larger than usual from side to side; wide.",
        example: "She had a broad smile that lit up her entire face.",
        etymology: "From Old English 'brād' meaning 'wide, not narrow'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Spacious",
        pronunciation: "ˈspā-shəs",
        definition: "Having ample space; roomy.",
        example: "The spacious living room could accommodate a large gathering.",
        etymology: "From Old French 'spacieux', from Latin 'spatiosus', from 'spatium' (space).",
        partOfSpeech: "adjective"
    },
    {
        word: "Roomy",
        pronunciation: "ˈrü-mē",
        definition: "Having plenty of room; spacious.",
        example: "The apartment was surprisingly roomy despite its compact exterior.",
        etymology: "From 'room' + '-y', from Old English 'rūm' (space, extent).",
        partOfSpeech: "adjective"
    },
    {
        word: "Capacious",
        pronunciation: "kə-ˈpā-shəs",
        definition: "Having a lot of space inside; roomy.",
        example: "The capacious bag held all her travel essentials.",
        etymology: "From Latin 'capax' meaning 'able to hold much', from 'capere' (to take, hold).",
        partOfSpeech: "adjective"
    },
    {
        word: "Voluminous",
        pronunciation: "və-ˈlü-mə-nəs",
        definition: "Occupying or containing much space; large in volume.",
        example: "She kept voluminous notes on every topic that interested her.",
        etymology: "From Latin 'voluminosus', from 'volumen' (roll, book, volume).",
        partOfSpeech: "adjective"
    },
    {
        word: "Ample",
        pronunciation: "ˈam-pəl",
        definition: "Enough or more than enough; plentiful.",
        example: "There was ample time to complete the project.",
        etymology: "From Latin 'amplus' meaning 'large, spacious, extensive'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Abundant",
        pronunciation: "ə-ˈbən-dənt",
        definition: "Existing or available in large quantities; plentiful.",
        example: "The garden produced an abundant harvest of vegetables.",
        etymology: "From Latin 'abundans', present participle of 'abundare' (to overflow), from 'ab-' + 'unda' (wave).",
        partOfSpeech: "adjective"
    },
    {
        word: "Plentiful",
        pronunciation: "ˈplen-ti-fəl",
        definition: "Existing in great quantities; abundant.",
        example: "Rainfall was plentiful this season, ensuring a good crop.",
        etymology: "From 'plenty' + '-ful', from Old French 'plentif', from Latin 'plenus' (full).",
        partOfSpeech: "adjective"
    },
    {
        word: "Bountiful",
        pronunciation: "ˈbau̇n-ti-fəl",
        definition: "Large in quantity; abundant.",
        example: "The bountiful feast included dishes from around the world.",
        etymology: "From Old French 'bontif' meaning 'good, kind', later used for 'generous, abundant'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Copious",
        pronunciation: "ˈkō-pē-əs",
        definition: "Abundant in supply or quantity.",
        example: "She took copious notes during the lecture.",
        etymology: "From Latin 'copiosus' meaning 'plentiful, abounding', from 'copia' (abundance, plenty).",
        partOfSpeech: "adjective"
    },
    {
        word: "Profuse",
        pronunciation: "prə-ˈfyüs",
        definition: "Exuberantly plentiful; abundant.",
        example: "The flowers bloomed in profuse colors throughout the garden.",
        etymology: "From Latin 'profusus' meaning 'poured forth, lavish', from 'profundere' (to pour out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Lavish",
        pronunciation: "ˈla-vish",
        definition: "Sumptuously rich, elaborate, or luxurious.",
        example: "They threw a lavish party to celebrate their anniversary.",
        etymology: "From Old French 'lavasse' meaning 'deluge of rain', from Latin 'lavare' (to wash).",
        partOfSpeech: "adjective"
    },
    {
        word: "Generous",
        pronunciation: "ˈje-nə-rəs",
        definition: "Showing a readiness to give more of something, as money or time, than is strictly necessary or expected.",
        example: "She was known for her generous donations to charity.",
        etymology: "From Latin 'generosus' meaning 'of noble birth, magnanimous', from 'genus' (birth, race).",
        partOfSpeech: "adjective"
    },
    {
        word: "Munificent",
        pronunciation: "myü-ˈni-fə-sənt",
        definition: "Characterized by or displaying great generosity.",
        example: "The munificent donor contributed millions to the university.",
        etymology: "From Latin 'munificus' meaning 'generous, bountiful', from 'munus' (gift) + 'facere' (to make).",
        partOfSpeech: "adjective"
    },
    {
        word: "Benevolent",
        pronunciation: "bə-ˈne-və-lənt",
        definition: "Well meaning and kindly.",
        example: "The benevolent king was loved by all his subjects.",
        etymology: "From Latin 'benevolens', from 'bene' (well) + 'volens' (wishing), from 'velle' (to wish).",
        partOfSpeech: "adjective"
    },
    {
        word: "Charitable",
        pronunciation: "ˈcher-ə-tə-bəl",
        definition: "Relating to the assistance of those in need; generous in giving to those in need.",
        example: "He was known for his charitable work in the community.",
        etymology: "From Old French 'charitable', from Late Latin 'caritabilis', from 'caritas' (dearness, love).",
        partOfSpeech: "adjective"
    },
    {
        word: "Philanthropic",
        pronunciation: "fi-lən-ˈthrä-pik",
        definition: "Seeking to promote the welfare of others, especially by donating money to good causes; generous and benevolent.",
        example: "The philanthropic foundation supported education initiatives worldwide.",
        etymology: "From Greek 'philanthrōpikos', from 'philanthrōpos' (loving mankind), from 'philos' (loving) + 'anthrōpos' (man).",
        partOfSpeech: "adjective"
    },
    {
        word: "Altruistic",
        pronunciation: "al-trü-ˈi-stik",
        definition: "Showing a disinterested and selfless concern for the well-being of others; unselfish.",
        example: "Her altruistic nature led her to volunteer at the homeless shelter.",
        etymology: "From French 'altruiste', from Italian 'altrui' (somebody else), from Latin 'alter' (other).",
        partOfSpeech: "adjective"
    },
    {
        word: "Selfless",
        pronunciation: "ˈself-ləs",
        definition: "Concerned more with the needs and wishes of others than with one's own; unselfish.",
        example: "Her selfless act of donating a kidney saved her brother's life.",
        etymology: "From 'self' + '-less', from Old English 'self' (one's own person).",
        partOfSpeech: "adjective"
    },
    {
        word: "Unselfish",
        pronunciation: "ən-ˈsel-fish",
        definition: "Willing to put the needs or wishes of others before one's own.",
        example: "He made an unselfish decision to help his colleague instead of taking credit.",
        etymology: "From 'un-' (not) + 'selfish', from 'self' + '-ish'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Kind",
        pronunciation: "ˈkīnd",
        definition: "Having or showing a friendly, generous, and considerate nature.",
        example: "She was always kind to strangers and animals alike.",
        etymology: "From Old English 'gecynde' meaning 'natural, native, innate', from 'cynd' (nature, kind).",
        partOfSpeech: "adjective"
    },
    {
        word: "Kindhearted",
        pronunciation: "ˈkīnd-ˈhär-təd",
        definition: "Having a kind and sympathetic nature.",
        example: "The kindhearted nurse comforted all her patients.",
        etymology: "From 'kind' + 'hearted', from Old English 'heorte' (heart).",
        partOfSpeech: "adjective"
    },
    {
        word: "Compassionate",
        pronunciation: "kəm-ˈpa-shə-nət",
        definition: "Feeling or showing sympathy and concern for others.",
        example: "The compassionate teacher took extra time to help struggling students.",
        etymology: "From Late Latin 'compassio', from 'com-' (together) + 'pati' (to suffer).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sympathetic",
        pronunciation: "sim-pə-ˈthe-tik",
        definition: "Feeling, showing, or expressing sympathy.",
        example: "She gave a sympathetic nod when she heard about his difficulties.",
        etymology: "From Greek 'sympathetikos', from 'sympatheia' (sympathy), from 'syn-' (together) + 'pathos' (feeling).",
        partOfSpeech: "adjective"
    },
    {
        word: "Empathetic",
        pronunciation: "em-pə-ˈthe-tik",
        definition: "Showing an ability to understand and share the feelings of another.",
        example: "The therapist was empathetic and helped her work through her emotions.",
        etymology: "From 'empathy' + '-ic', from Greek 'empatheia' (passion), from 'en-' (in) + 'pathos' (feeling).",
        partOfSpeech: "adjective"
    },
    {
        word: "Understanding",
        pronunciation: "ən-dər-ˈstan-diŋ",
        definition: "Sympathetically aware of other people's feelings; tolerant and forgiving.",
        example: "Her understanding nature made her an excellent counselor.",
        etymology: "From Old English 'understandan' meaning 'to comprehend, grasp the idea of'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Tolerant",
        pronunciation: "ˈtä-lə-rənt",
        definition: "Showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with.",
        example: "The tolerant community welcomed people from diverse backgrounds.",
        etymology: "From Latin 'tolerans', present participle of 'tolerare' (to bear, endure).",
        partOfSpeech: "adjective"
    },
    {
        word: "Accepting",
        pronunciation: "ik-ˈsep-tiŋ",
        definition: "Tolerant or welcoming of differences.",
        example: "The accepting atmosphere made everyone feel comfortable.",
        etymology: "From 'accept' + '-ing', from Latin 'accipere' (to take, receive), from 'ad-' + 'capere' (to take).",
        partOfSpeech: "adjective"
    },
    {
        word: "Open-minded",
        pronunciation: "ō-pən-ˈmīn-dəd",
        definition: "Willing to consider new ideas; unprejudiced.",
        example: "Being open-minded allowed her to learn from different cultures.",
        etymology: "From 'open' + 'mind' + '-ed', meaning having a mind open to new ideas.",
        partOfSpeech: "adjective"
    },
    {
        word: "Broad-minded",
        pronunciation: "brȯd-ˈmīn-dəd",
        definition: "Tolerant or liberal in one's views and reactions; not easily shocked.",
        example: "His broad-minded approach to education inspired innovative teaching methods.",
        etymology: "From 'broad' + 'mind' + '-ed', meaning having a wide-ranging, tolerant mind.",
        partOfSpeech: "adjective"
    },
    {
        word: "Liberal",
        pronunciation: "ˈli-b(ə-)rəl",
        definition: "Willing to respect or accept behavior or opinions different from one's own; open to new ideas.",
        example: "She held liberal views on social issues.",
        etymology: "From Latin 'liberalis' meaning 'of freedom, befitting a free man', from 'liber' (free).",
        partOfSpeech: "adjective"
    },
    {
        word: "Progressive",
        pronunciation: "prə-ˈgre-siv",
        definition: "Happening or developing gradually or in stages; proceeding step by step.",
        example: "The progressive school encouraged creative thinking and innovation.",
        etymology: "From Latin 'progressivus', from 'progredi' (to go forward), from 'pro-' (forward) + 'gradi' (to step).",
        partOfSpeech: "adjective"
    },
    {
        word: "Forward-thinking",
        pronunciation: "fȯr-wərd-ˈthiŋ-kiŋ",
        definition: "Favoring innovation and development; progressive.",
        example: "The forward-thinking company invested heavily in renewable energy.",
        etymology: "From 'forward' + 'thinking', meaning thinking ahead, progressive.",
        partOfSpeech: "adjective"
    },
    {
        word: "Innovative",
        pronunciation: "i-nə-ˈvā-tiv",
        definition: "Featuring new methods; advanced and original.",
        example: "The innovative design won several awards.",
        etymology: "From 'innovate' + '-ive', from Latin 'innovare' (to renew, change), from 'in-' (into) + 'novus' (new).",
        partOfSpeech: "adjective"
    },
    {
        word: "Creative",
        pronunciation: "krē-ˈā-tiv",
        definition: "Relating to or involving the use of the imagination or original ideas to create something; inventive.",
        example: "She found a creative solution to the problem.",
        etymology: "From Latin 'creare' meaning 'to produce, make, create'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Inventive",
        pronunciation: "in-ˈven-tiv",
        definition: "Having the ability to create or design new things or to think originally.",
        example: "The inventive engineer developed a new type of engine.",
        etymology: "From 'invent' + '-ive', from Latin 'invenire' (to find, discover), from 'in-' (upon) + 'venire' (to come).",
        partOfSpeech: "adjective"
    },
    {
        word: "Imaginative",
        pronunciation: "i-ˈma-jə-nə-tiv",
        definition: "Having or showing creativity or inventiveness.",
        example: "The imaginative storyteller captivated children with her tales.",
        etymology: "From 'imagine' + '-ative', from Latin 'imaginari' (to form a mental picture), from 'imago' (image).",
        partOfSpeech: "adjective"
    },
    {
        word: "Original",
        pronunciation: "ə-ˈri-jə-nᵊl",
        definition: "Present or existing from the beginning; first or earliest; created directly and personally by a particular artist; not a copy or imitation.",
        example: "Her artwork was highly original and unlike anything seen before.",
        etymology: "From Latin 'originalis', from 'originem' (beginning, source), from 'oriri' (to rise).",
        partOfSpeech: "adjective"
    },
    {
        word: "Artistic",
        pronunciation: "är-ˈti-stik",
        definition: "Having or revealing natural creative skill.",
        example: "The artistic community flourished in the vibrant neighborhood.",
        etymology: "From 'artist' + '-ic', from Latin 'ars' (art, skill).",
        partOfSpeech: "adjective"
    },
    {
        word: "Talented",
        pronunciation: "ˈta-lən-təd",
        definition: "Having a natural aptitude or skill for something.",
        example: "The talented musician could play multiple instruments.",
        etymology: "From 'talent' + '-ed', from Latin 'talentum' (balance, weight, sum of money), from Greek 'talanton'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Gifted",
        pronunciation: "ˈgif-təd",
        definition: "Having exceptional talent or natural ability.",
        example: "The gifted student skipped two grades.",
        etymology: "From 'gift' + '-ed', from Old English 'gift' (payment for a wife), later 'natural endowment'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Skilled",
        pronunciation: "ˈskild",
        definition: "Having or showing the knowledge, ability, or training to perform a certain activity or task well.",
        example: "The skilled craftsman could create intricate wood carvings.",
        etymology: "From 'skill' + '-ed', from Old Norse 'skil' (discernment, knowledge).",
        partOfSpeech: "adjective"
    },
    {
        word: "Adept",
        pronunciation: "ə-ˈdept",
        definition: "Very skilled or proficient at something.",
        example: "She was adept at solving complex puzzles.",
        etymology: "From Latin 'adeptus' meaning 'obtained, achieved', past participle of 'adipisci' (to attain).",
        partOfSpeech: "adjective"
    },
    {
        word: "Proficient",
        pronunciation: "prə-ˈfi-shənt",
        definition: "Competent or skilled in doing or using something.",
        example: "He was proficient in several programming languages.",
        etymology: "From Latin 'proficiens', present participle of 'proficere' (to make progress), from 'pro-' (forward) + 'facere' (to make).",
        partOfSpeech: "adjective"
    },
    {
        word: "Expert",
        pronunciation: "ek-ˈspərt",
        definition: "A person who is very knowledgeable about or skillful in a particular area.",
        example: "The expert mechanic fixed the engine in no time.",
        etymology: "From Latin 'expertus', past participle of 'experiri' (to try, test), from 'ex-' + 'periri' (to go through).",
        partOfSpeech: "noun"
    },
    {
        word: "Masterful",
        pronunciation: "ˈmas-tər-fəl",
        definition: "Performed or performing very skillfully.",
        example: "The pianist gave a masterful performance of the concerto.",
        etymology: "From 'master' + '-ful', from Latin 'magister' (chief, head, teacher).",
        partOfSpeech: "adjective"
    },
    {
        word: "Masterly",
        pronunciation: "ˈmas-tər-lē",
        definition: "Performed or performing very skillfully.",
        example: "His masterly handling of the situation impressed everyone.",
        etymology: "From 'master' + '-ly', from Latin 'magister' (chief, head, teacher).",
        partOfSpeech: "adjective"
    },
    {
        word: "Accomplished",
        pronunciation: "ə-ˈkäm-plisht",
        definition: "Highly trained or skilled in a particular activity.",
        example: "She was an accomplished author with several bestsellers.",
        etymology: "From 'accomplish' + '-ed', from Old French 'acomplir', from Latin 'complere' (to fill up, complete).",
        partOfSpeech: "adjective"
    },
    {
        word: "Versatile",
        pronunciation: "ˈvər-sə-tᵊl",
        definition: "Able to adapt or be adapted to many different functions or activities.",
        example: "The versatile actor could perform in comedies and dramas equally well.",
        etymology: "From Latin 'versatilis' meaning 'turning, revolving, changeable', from 'versare' (to turn).",
        partOfSpeech: "adjective"
    },
    {
        word: "Adaptable",
        pronunciation: "ə-ˈdap-tə-bəl",
        definition: "Able to adjust to new conditions.",
        example: "Children are remarkably adaptable and can learn new languages quickly.",
        etymology: "From 'adapt' + '-able', from Latin 'adaptare' (to fit, adjust), from 'ad-' + 'aptare' (to fit).",
        partOfSpeech: "adjective"
    },
    {
        word: "Flexible",
        pronunciation: "ˈflek-sə-bəl",
        definition: "Capable of bending easily without breaking; able to be easily modified to respond to altered circumstances.",
        example: "The flexible schedule allowed employees to work from home.",
        etymology: "From Latin 'flexibilis', from 'flectere' (to bend).",
        partOfSpeech: "adjective"
    },
    {
        word: "Resourceful",
        pronunciation: "ri-ˈsȯrs-fəl",
        definition: "Having the ability to find quick and clever ways to overcome difficulties.",
        example: "The resourceful camper used natural materials to build a shelter.",
        etymology: "From 'resource' + '-ful', from Old French 'resourse' (a source, spring), from Latin 'resurgere' (to rise again).",
        partOfSpeech: "adjective"
    },
    {
        word: "Clever",
        pronunciation: "ˈkle-vər",
        definition: "Quick to understand, learn, and devise or apply ideas; intelligent.",
        example: "The clever detective solved the mystery using minimal clues.",
        etymology: "From Middle English 'cliver', of uncertain origin, possibly from Old English 'clifer' (claw, hand).",
        partOfSpeech: "adjective"
    },
    {
        word: "Smart",
        pronunciation: "ˈsmärt",
        definition: "Having or showing a quick-witted intelligence.",
        example: "The smart student excelled in all her classes.",
        etymology: "From Old English 'smeart' meaning 'causing sharp pain; stinging', later 'quick, prompt'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Intelligent",
        pronunciation: "in-ˈte-lə-jənt",
        definition: "Having or showing intelligence, especially of a high level.",
        example: "The intelligent discussion covered complex topics with ease.",
        etymology: "From Latin 'intelligens', present participle of 'intelligere' (to understand), from 'inter-' (between) + 'legere' (to choose, pick).",
        partOfSpeech: "adjective"
    },
    {
        word: "Brilliant",
        pronunciation: "ˈbril-yənt",
        definition: "Exceptionally clever or talented.",
        example: "The brilliant scientist made groundbreaking discoveries.",
        etymology: "From French 'brillant', from Italian 'brillare' (to sparkle), possibly from Latin 'beryllus' (precious stone).",
        partOfSpeech: "adjective"
    },
    {
        word: "Genius",
        pronunciation: "ˈjēn-yəs",
        definition: "Exceptional intellectual or creative power or other natural ability.",
        example: "The young composer showed signs of genius from an early age.",
        etymology: "From Latin 'genius' (guardian spirit, innate ability), from 'gignere' (to beget, produce).",
        partOfSpeech: "noun"
    },
    {
        word: "Astute",
        pronunciation: "ə-ˈstüt",
        definition: "Having or showing an ability to accurately assess situations or people and turn this to one's advantage.",
        example: "The astute businessman recognized the investment opportunity immediately.",
        etymology: "From Latin 'astutus' meaning 'crafty, cunning', from 'astus' (craft, cunning).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sharp",
        pronunciation: "ˈshärp",
        definition: "Quick to notice, understand, or respond; having or showing a quick-witted intelligence.",
        example: "She had a sharp mind that could grasp complex concepts quickly.",
        etymology: "From Old English 'scearp' meaning 'cutting, keen, severe'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Keen",
        pronunciation: "ˈkēn",
        definition: "Having or showing eagerness or enthusiasm.",
        example: "He was keen to learn new languages and travel the world.",
        etymology: "From Old English 'cēne' meaning 'brave, bold, fierce', later 'sharp, eager'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Acute",
        pronunciation: "ə-ˈkyüt",
        definition: "Having or showing a perceptive understanding or insight; shrewd.",
        example: "She had an acute understanding of human psychology.",
        etymology: "From Latin 'acutus' meaning 'sharp, pointed', from 'acuere' (to sharpen), from 'acus' (needle).",
        partOfSpeech: "adjective"
    },
    {
        word: "Shrewd",
        pronunciation: "ˈshrüd",
        definition: "Having or showing sharp powers of judgment; astute.",
        example: "The shrewd negotiator secured an excellent deal.",
        etymology: "From Old English 'scrēaw' (evil, bad) + '-ed', later 'cunning, clever'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Perceptive",
        pronunciation: "pər-ˈsep-tiv",
        definition: "Having or showing sensitive insight.",
        example: "The perceptive teacher noticed when students were struggling.",
        etymology: "From Latin 'perceptivus', from 'percipere' (to perceive), from 'per-' (through) + 'capere' (to take).",
        partOfSpeech: "adjective"
    },
    {
        word: "Observant",
        pronunciation: "əb-ˈzər-vənt",
        definition: "Quick to notice things.",
        example: "The observant detective noticed details others had missed.",
        etymology: "From Latin 'observans', present participle of 'observare' (to watch, observe), from 'ob-' (toward) + 'servare' (to keep).",
        partOfSpeech: "adjective"
    },
    {
        word: "Attentive",
        pronunciation: "ə-ˈten-tiv",
        definition: "Paying close attention to something.",
        example: "The attentive audience listened to every word of the lecture.",
        etymology: "From Old French 'attentif', from Latin 'attentus', past participle of 'attendere' (to attend).",
        partOfSpeech: "adjective"
    },
    {
        word: "Mindful",
        pronunciation: "ˈmīn(d)-fəl",
        definition: "Conscious or aware of something; attentive.",
        example: "She was always mindful of other people's feelings.",
        etymology: "From Old English 'gemyndful' meaning 'having a good memory, thoughtful'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Aware",
        pronunciation: "ə-ˈwer",
        definition: "Having knowledge or perception of a situation or fact.",
        example: "He was aware of the risks but proceeded anyway.",
        etymology: "From Old English 'gewær' meaning 'watchful, vigilant', from 'wær' (cautious, aware).",
        partOfSpeech: "adjective"
    },
    {
        word: "Conscious",
        pronunciation: "ˈkän(t)-shəs",
        definition: "Aware of and responding to one's surroundings; awake.",
        example: "She was conscious of the need to conserve water.",
        etymology: "From Latin 'conscius' meaning 'knowing, aware', from 'con-' (with) + 'scire' (to know).",
        partOfSpeech: "adjective"
    },
    {
        word: "Alert",
        pronunciation: "ə-ˈlərt",
        definition: "Quick to notice any unusual and potentially dangerous or difficult circumstances; vigilant.",
        example: "The security guard remained alert throughout the night.",
        etymology: "From French 'alerte', from Italian 'all'erta' (to the watchtower), from 'erta' (watchtower).",
        partOfSpeech: "adjective"
    },
    {
        word: "Vigilant",
        pronunciation: "ˈvi-jə-lənt",
        definition: "Keeping careful watch for possible danger or difficulties.",
        example: "The vigilant parent watched over the children at the playground.",
        etymology: "From Latin 'vigilans', present participle of 'vigilare' (to watch, be awake), from 'vigil' (awake, watchful).",
        partOfSpeech: "adjective"
    },
    {
        word: "Watchful",
        pronunciation: "ˈwäch-fəl",
        definition: "Watching or observing someone or something closely; alert and vigilant.",
        example: "The watchful teacher noticed the student's improvement.",
        etymology: "From 'watch' + '-ful', from Old English 'wæccan' (to be awake, keep watch).",
        partOfSpeech: "adjective"
    },
    {
        word: "Careful",
        pronunciation: "ˈker-fəl",
        definition: "Making sure of avoiding potential danger, mishap, or harm; cautious.",
        example: "She was careful to lock the door before leaving.",
        etymology: "From Old English 'carful' meaning 'full of care, anxious, solicitous', from 'caru' (care) + '-ful'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Cautious",
        pronunciation: "ˈkȯ-shəs",
        definition: "Attentive to potential problems or dangers.",
        example: "The cautious driver slowed down in the rain.",
        etymology: "From Latin 'cautus', past participle of 'cavere' (to beware, take care).",
        partOfSpeech: "adjective"
    },
    {
        word: "Prudent",
        pronunciation: "ˈprü-dᵊnt",
        definition: "Acting with or showing care and thought for the future.",
        example: "It would be prudent to save money for unexpected expenses.",
        etymology: "From Latin 'prudens', contraction of 'providens', present participle of 'providere' (to see ahead, provide).",
        partOfSpeech: "adjective"
    },
    {
        word: "Wise",
        pronunciation: "ˈwīz",
        definition: "Having or showing experience, knowledge, and good judgment.",
        example: "The wise elder offered valuable advice to the young people.",
        etymology: "From Old English 'wīs' meaning 'learned, sagacious, cunning', from Proto-Germanic 'wīsaz'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Sage",
        pronunciation: "ˈsāj",
        definition: "Having, showing, or indicating profound wisdom.",
        example: "The sage advice helped her make the right decision.",
        etymology: "From Old French 'sage', from Latin 'sapere' (to taste, have good taste, be wise).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sagacious",
        pronunciation: "sə-ˈgā-shəs",
        definition: "Having or showing keen mental discernment and good judgment; wise or shrewd.",
        example: "The sagacious leader made decisions that benefited everyone.",
        etymology: "From Latin 'sagax' meaning 'of quick perception, wise', from 'sagire' (to perceive keenly).",
        partOfSpeech: "adjective"
    },
    {
        word: "Judicious",
        pronunciation: "jü-ˈdi-shəs",
        definition: "Having, showing, or done with good judgment or sense.",
        example: "She made a judicious choice by investing in education.",
        etymology: "From Latin 'judiciosus', from 'judicium' (judgment), from 'judex' (judge).",
        partOfSpeech: "adjective"
    },
    {
        word: "Discerning",
        pronunciation: "di-ˈsər-niŋ",
        definition: "Having or showing good judgment.",
        example: "The discerning collector only bought pieces of exceptional quality.",
        etymology: "From 'discern' + '-ing', from Latin 'discernere' (to separate, distinguish), from 'dis-' (apart) + 'cernere' (to sift).",
        partOfSpeech: "adjective"
    },
    {
        word: "Thoughtful",
        pronunciation: "ˈthȯt-fəl",
        definition: "Showing consideration for the needs of other people.",
        example: "It was thoughtful of her to bring flowers to the hospital.",
        etymology: "From 'thought' + '-ful', from Old English 'thōht' (thought, thinking).",
        partOfSpeech: "adjective"
    },
    {
        word: "Considerate",
        pronunciation: "kən-ˈsi-d(ə-)rət",
        definition: "Careful not to cause inconvenience or hurt to others.",
        example: "The considerate neighbor kept the noise down late at night.",
        etymology: "From Latin 'consideratus', past participle of 'considerare' (to look at closely, contemplate).",
        partOfSpeech: "adjective"
    },
    {
        word: "Caring",
        pronunciation: "ˈker-iŋ",
        definition: "Displaying kindness and concern for others.",
        example: "The caring nurse comforted the worried patient.",
        etymology: "From 'care' + '-ing', from Old English 'caru' (sorrow, anxiety, care).",
        partOfSpeech: "adjective"
    },
    {
        word: "Warmhearted",
        pronunciation: "wȯrm-ˈhär-təd",
        definition: "Sympathetic and kind.",
        example: "The warmhearted teacher always helped students in need.",
        etymology: "From 'warm' + 'hearted', meaning having a heart full of warmth and kindness.",
        partOfSpeech: "adjective"
    },
    {
        word: "Tender",
        pronunciation: "ˈten-dər",
        definition: "Showing gentleness and concern or sympathy.",
        example: "The mother spoke to her child in a tender voice.",
        etymology: "From Old French 'tendre', from Latin 'tener' (soft, delicate).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gentle",
        pronunciation: "ˈjen-tᵊl",
        definition: "Having or showing a mild, kind, or tender temperament or character.",
        example: "The gentle breeze rustled the leaves softly.",
        etymology: "From Old French 'gentil' meaning 'high-born, noble, gentle', from Latin 'gentilis' (of the same clan).",
        partOfSpeech: "adjective"
    },
    {
        word: "Soft",
        pronunciation: "ˈsȯft",
        definition: "Having a pleasing quality involving a subtle effect or contrast rather than sharp definition.",
        example: "The soft light of dawn filled the room.",
        etymology: "From Old English 'sōfte' meaning 'gentle, mild, pleasant', from Proto-Germanic 'samftijaz'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Mild",
        pronunciation: "ˈmīld",
        definition: "Gentle and not easily provoked.",
        example: "She had a mild temperament that made her easy to work with.",
        etymology: "From Old English 'milde' meaning 'gentle, merciful', from Proto-Germanic 'mildijaz'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Calm",
        pronunciation: "ˈkäm",
        definition: "Not showing or feeling nervousness, anger, or other strong emotions.",
        example: "She remained calm despite the stressful situation.",
        etymology: "From Middle French 'calme', from Italian 'calma', from Greek 'kauma' (heat, especially of the sun).",
        partOfSpeech: "adjective"
    },
    {
        word: "Serene",
        pronunciation: "sə-ˈrēn",
        definition: "Calm, peaceful, and untroubled; tranquil.",
        example: "The serene lake reflected the mountains perfectly.",
        etymology: "From Latin 'serenus' meaning 'clear, unclouded, fair'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Peaceful",
        pronunciation: "ˈpēs-fəl",
        definition: "Free from disturbance; tranquil.",
        example: "They enjoyed a peaceful walk through the countryside.",
        etymology: "From 'peace' + '-ful', from Old French 'pais', from Latin 'pax' (peace).",
        partOfSpeech: "adjective"
    },
    {
        word: "Tranquil",
        pronunciation: "ˈtraŋ-kwəl",
        definition: "Free from disturbance; calm.",
        example: "The tranquil garden provided a perfect place for meditation.",
        etymology: "From Latin 'tranquillus' meaning 'quiet, calm, still'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Placid",
        pronunciation: "ˈpla-səd",
        definition: "Not easily upset or excited; calm and peaceful.",
        example: "The placid surface of the lake was like a mirror.",
        etymology: "From Latin 'placidus' meaning 'pleasing, gentle, quiet', from 'placere' (to please).",
        partOfSpeech: "adjective"
    },
    {
        word: "Soothing",
        pronunciation: "ˈsü-thiŋ",
        definition: "Having a gently calming effect.",
        example: "The soothing music helped her relax after a long day.",
        etymology: "From 'soothe' + '-ing', from Old English 'sōthian' (to verify, show to be true), later 'to comfort'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Relaxing",
        pronunciation: "ri-ˈlak-siŋ",
        definition: "Reducing tension or anxiety.",
        example: "They spent a relaxing day at the spa.",
        etymology: "From 'relax' + '-ing', from Latin 'relaxare' (to loosen, open), from 're-' + 'laxare' (to loosen).",
        partOfSpeech: "adjective"
    },
    {
        word: "Restful",
        pronunciation: "ˈrest-fəl",
        definition: "Affording physical or mental rest.",
        example: "The restful atmosphere of the library helped her concentrate.",
        etymology: "From 'rest' + '-ful', from Old English 'ræst' (rest, repose).",
        partOfSpeech: "adjective"
    },
    {
        word: "Comfortable",
        pronunciation: "ˈkəm(p)(f)-tər-bəl",
        definition: "Providing physical ease and relaxation.",
        example: "The comfortable chair was perfect for reading.",
        etymology: "From Old French 'confortable', from 'conforter' (to comfort), from Latin 'confortare' (to strengthen).",
        partOfSpeech: "adjective"
    },
    {
        word: "Cozy",
        pronunciation: "ˈkō-zē",
        definition: "Giving a feeling of comfort, warmth, and relaxation.",
        example: "The cozy cabin was perfect for a winter weekend.",
        etymology: "From Scots 'cosie', possibly from Old English or Old Norse, meaning 'snug, comfortable'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Snug",
        pronunciation: "ˈsnəg",
        definition: "Comfortable, warm, and cozy; well protected from the weather or cold.",
        example: "The snug blanket kept her warm on the chilly evening.",
        etymology: "From Middle English 'snugge', possibly from Old Norse 'snöggr' (short-haired), later 'trim, neat'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Welcoming",
        pronunciation: "ˈwel-kə-miŋ",
        definition: "Behaving in a polite or friendly way to a guest or new arrival.",
        example: "The welcoming host made everyone feel at home.",
        etymology: "From 'welcome' + '-ing', from Old English 'wilcuma' (a wished-for guest), from 'wil-' (desire) + 'cuma' (guest).",
        partOfSpeech: "adjective"
    },
    {
        word: "Hospitable",
        pronunciation: "hä-ˈspi-tə-bəl",
        definition: "Friendly and welcoming to guests or strangers.",
        example: "The hospitable family invited them to stay for dinner.",
        etymology: "From Old French 'hospitable', from Latin 'hospitabilis', from 'hospitari' (to receive as a guest).",
        partOfSpeech: "adjective"
    },
    {
        word: "Friendly",
        pronunciation: "ˈfren(d)-lē",
        definition: "Kind and pleasant.",
        example: "The friendly neighbor always greeted everyone with a smile.",
        etymology: "From Old English 'frēondlīc' meaning 'kind, amiable', from 'frēond' (friend) + '-līc'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Amiable",
        pronunciation: "ā-mē-ə-bəl",
        definition: "Having or displaying a friendly and pleasant manner.",
        example: "His amiable personality made him popular with colleagues.",
        etymology: "From Old French 'amiable', from Late Latin 'amicabilis' (friendly), from 'amicus' (friend).",
        partOfSpeech: "adjective"
    },
    {
        word: "Affable",
        pronunciation: "a-fə-bəl",
        definition: "Friendly, good-natured, or easy to talk to.",
        example: "The affable tour guide made the trip enjoyable for everyone.",
        etymology: "From Latin 'affabilis' meaning 'approachable, courteous', from 'affari' (to speak to), from 'ad-' + 'fari' (to speak).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sociable",
        pronunciation: "sō-shə-bəl",
        definition: "Willing to talk and engage in activities with other people; friendly.",
        example: "She was very sociable and made friends easily.",
        etymology: "From French 'sociable', from Latin 'sociabilis', from 'sociare' (to join, unite), from 'socius' (companion).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gregarious",
        pronunciation: "gri-ˈger-ē-əs",
        definition: "Fond of company; sociable.",
        example: "The gregarious student was involved in many clubs and activities.",
        etymology: "From Latin 'gregarius' meaning 'belonging to a flock', from 'grex' (flock, herd).",
        partOfSpeech: "adjective"
    },
    {
        word: "Outgoing",
        pronunciation: "au̇t-ˈgō-iŋ",
        definition: "Friendly and socially confident.",
        example: "Her outgoing personality made her a natural leader.",
        etymology: "From 'out' + 'going', meaning going out to meet others, sociable.",
        partOfSpeech: "adjective"
    },
    {
        word: "Extroverted",
        pronunciation: "ek-strə-ˌvər-təd",
        definition: "Outgoing and socially confident.",
        example: "The extroverted actor loved performing in front of large audiences.",
        etymology: "From 'extrovert' + '-ed', coined by Carl Jung from Latin 'extra-' (outside) + 'vertere' (to turn).",
        partOfSpeech: "adjective"
    },
    {
        word: "Optimistic",
        pronunciation: "äp-tə-ˈmi-stik",
        definition: "Hopeful and confident about the future.",
        example: "She remained optimistic despite facing many challenges.",
        etymology: "From French 'optimiste', from Latin 'optimum' (best), from 'optare' (to choose).",
        partOfSpeech: "adjective"
    },
    {
        word: "Positive",
        pronunciation: "pä-zə-tiv",
        definition: "Constructive, optimistic, or confident.",
        example: "He maintained a positive attitude throughout the project.",
        etymology: "From Latin 'positivus' meaning 'settled by agreement', from 'ponere' (to place).",
        partOfSpeech: "adjective"
    },
    {
        word: "Hopeful",
        pronunciation: "hōp-fəl",
        definition: "Feeling or inspiring optimism about a future event.",
        example: "The hopeful students looked forward to graduation day.",
        etymology: "From 'hope' + '-ful', from Old English 'hopian' (to hope, expect).",
        partOfSpeech: "adjective"
    },
    {
        word: "Confident",
        pronunciation: "kän-fə-dənt",
        definition: "Feeling or showing certainty about something.",
        example: "She gave a confident presentation that impressed everyone.",
        etymology: "From Latin 'confidens', present participle of 'confidere' (to trust fully), from 'con-' + 'fidere' (to trust).",
        partOfSpeech: "adjective"
    },
    {
        word: "Assured",
        pronunciation: "ə-ˈshu̇rd",
        definition: "Confident and relaxed.",
        example: "His assured manner put everyone at ease.",
        etymology: "From Old French 'asseurer', from Latin 'ad-' + 'securus' (safe, secure).",
        partOfSpeech: "adjective"
    },
    {
        word: "Self-assured",
        pronunciation: "self-ə-ˈshu̇rd",
        definition: "Confident in one's own abilities or character.",
        example: "The self-assured leader inspired confidence in her team.",
        etymology: "From 'self' + 'assured', meaning having confidence in oneself.",
        partOfSpeech: "adjective"
    },
    {
        word: "Bold",
        pronunciation: "ˈbōld",
        definition: "Showing an ability to take risks; confident and courageous.",
        example: "She made a bold decision to change careers mid-life.",
        etymology: "From Old English 'beald' meaning 'bold, brave, confident'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Daring",
        pronunciation: "ˈder-iŋ",
        definition: "Adventurous or audaciously bold.",
        example: "The daring explorer ventured into unknown territories.",
        etymology: "From Old English 'dearr' (dare) + '-ing', meaning 'willing to take risks'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Adventurous",
        pronunciation: "əd-ˈven-chə-rəs",
        definition: "Willing to take risks or to try out new methods, ideas, or experiences.",
        example: "They led an adventurous life, traveling to remote corners of the world.",
        etymology: "From 'adventure' + '-ous', from Old French 'aventure' (chance, fate, event).",
        partOfSpeech: "adjective"
    },
    {
        word: "Daring",
        pronunciation: "ˈder-iŋ",
        definition: "Adventurous or audaciously bold.",
        example: "The daring acrobat performed death-defying stunts.",
        etymology: "From Old English 'dearr' (dare) + '-ing', meaning 'willing to take risks'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Fearless",
        pronunciation: "ˈfir-ləs",
        definition: "Lacking fear.",
        example: "She was a fearless advocate for social justice.",
        etymology: "From 'fear' + '-less', from Old English 'fǣr' (danger, sudden peril).",
        partOfSpeech: "adjective"
    },
    {
        word: "Brave",
        pronunciation: "ˈbrāv",
        definition: "Ready to face and endure danger or pain; showing courage.",
        example: "The brave firefighter rescued everyone from the burning building.",
        etymology: "From French 'brave' meaning 'valiant, bold', from Italian 'bravo' (brave, wild).",
        partOfSpeech: "adjective"
    },
    {
        word: "Courageous",
        pronunciation: "kə-ˈrā-jəs",
        definition: "Not deterred by danger or pain; brave.",
        example: "The courageous soldier risked his life to save others.",
        etymology: "From Old French 'corageux', from 'corage' (courage), from Latin 'cor' (heart).",
        partOfSpeech: "adjective"
    },
    {
        word: "Valiant",
        pronunciation: "ˈval-yənt",
        definition: "Possessing or showing courage or determination.",
        example: "The valiant knight fought to protect the kingdom.",
        etymology: "From Old French 'vaillant', from Latin 'valere' (to be strong, be worth).",
        partOfSpeech: "adjective"
    },
    {
        word: "Heroic",
        pronunciation: "hi-ˈrō-ik",
        definition: "Having the characteristics of a hero or heroine; very brave.",
        example: "The rescue team performed heroic efforts to save the trapped miners.",
        etymology: "From Latin 'heroicus', from Greek 'hērōikos', from 'hērōs' (hero).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gallant",
        pronunciation: "ˈga-lənt",
        definition: "Brave; heroic; (of a man) charmingly attentive and chivalrous to women.",
        example: "He was a gallant soldier who earned many medals for bravery.",
        etymology: "From Old French 'galant', from 'galer' (to make merry), from 'gale' (pleasure, rejoicing).",
        partOfSpeech: "adjective"
    },
    {
        word: "Intrepid",
        pronunciation: "in-ˈtre-pəd",
        definition: "Fearless; adventurous (often used for rhetorical or humorous effect).",
        example: "The intrepid explorer ventured into uncharted territories.",
        etymology: "From Latin 'intrepidus' meaning 'unshaken, undaunted', from 'in-' (not) + 'trepidus' (alarmed).",
        partOfSpeech: "adjective"
    },
    {
        word: "Dauntless",
        pronunciation: "ˈdȯnt-ləs",
        definition: "Showing fearlessness and determination.",
        example: "The dauntless mountain climber reached the summit despite the harsh conditions.",
        etymology: "From 'daunt' + '-less', from Old French 'danter' (to tame, subdue), from Latin 'domitare'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Indomitable",
        pronunciation: "in-ˈdä-mə-tə-bəl",
        definition: "Impossible to subdue or defeat.",
        example: "Her indomitable spirit helped her overcome every obstacle.",
        etymology: "From Late Latin 'indomitabilis', from 'in-' (not) + 'domitare' (to tame).",
        partOfSpeech: "adjective"
    },
    {
        word: "Unstoppable",
        pronunciation: "ən-ˈstä-pə-bəl",
        definition: "Unable to be stopped or prevented from continuing.",
        example: "The team's momentum was unstoppable, winning every game.",
        etymology: "From 'un-' (not) + 'stop' + '-able', from Old English 'stoppian' (to stop up).",
        partOfSpeech: "adjective"
    },
    {
        word: "Unwavering",
        pronunciation: "ən-ˈwā-və-riŋ",
        definition: "Steady or resolute; not wavering.",
        example: "She showed unwavering determination to achieve her goals.",
        etymology: "From 'un-' (not) + 'waver' + '-ing', from Old Norse 'vafra' (to flicker).",
        partOfSpeech: "adjective"
    },
    {
        word: "Determined",
        pronunciation: "di-ˈtər-mənd",
        definition: "Having made a firm decision and being resolved not to change it.",
        example: "He was determined to finish the marathon, no matter how difficult.",
        etymology: "From 'determine' + '-ed', from Latin 'determinare' (to limit, decide).",
        partOfSpeech: "adjective"
    },
    {
        word: "Resolute",
        pronunciation: "ˈre-zə-ˌlüt",
        definition: "Admirably purposeful, determined, and unwavering.",
        example: "She remained resolute in her commitment to the cause.",
        etymology: "From Latin 'resolutus', past participle of 'resolvere' (to resolve), from 're-' + 'solvere' (to loosen).",
        partOfSpeech: "adjective"
    },
    {
        word: "Steadfast",
        pronunciation: "ˈsted-ˌfast",
        definition: "Resolutely or dutifully firm and unwavering.",
        example: "His steadfast support helped her through difficult times.",
        etymology: "From Old English 'stede' (place) + 'fæst' (fast, firm), meaning 'fixed in place'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Persevering",
        pronunciation: "pər-sə-ˈvir-iŋ",
        definition: "Continuing in a course of action despite difficulty or with little or no prospect of success.",
        example: "Her persevering efforts finally led to a breakthrough.",
        etymology: "From 'persevere' + '-ing', from Latin 'perseverare' (to continue steadfastly).",
        partOfSpeech: "adjective"
    },
    {
        word: "Tenacious",
        pronunciation: "tə-ˈnā-shəs",
        definition: "Tending to keep a firm hold of something; clinging or adhering closely.",
        example: "The tenacious detective never gave up on solving the case.",
        etymology: "From Latin 'tenax' meaning 'holding fast', from 'tenere' (to hold).",
        partOfSpeech: "adjective"
    },
    {
        word: "Persistent",
        pronunciation: "pər-ˈsi-stənt",
        definition: "Continuing firmly or obstinately in a course of action in spite of difficulty or opposition.",
        example: "His persistent questioning eventually revealed the truth.",
        etymology: "From Latin 'persistere' meaning 'to continue steadfastly', from 'per-' (through) + 'sistere' (to stand).",
        partOfSpeech: "adjective"
    },
    {
        word: "Relentless",
        pronunciation: "ri-ˈlent-ləs",
        definition: "Unyieldingly severe, strict, or harsh.",
        example: "The relentless rain continued for three days straight.",
        etymology: "From 'relent' + '-less', from Latin 're-' + 'lentare' (to bend).",
        partOfSpeech: "adjective"
    },
    {
        word: "Tireless",
        pronunciation: "ˈtī(-ə)r-ləs",
        definition: "Having or showing great effort or energy.",
        example: "She was a tireless advocate for children's rights.",
        etymology: "From 'tire' + '-less', from Old English 'teorian' (to fail, be exhausted).",
        partOfSpeech: "adjective"
    },
    {
        word: "Indefatigable",
        pronunciation: "in-di-ˈfa-ti-gə-bəl",
        definition: "Persisting tirelessly; never giving up.",
        example: "His indefatigable efforts transformed the community center.",
        etymology: "From Latin 'indefatigabilis', from 'in-' (not) + 'defatigare' (to tire out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Unflagging",
        pronunciation: "ən-ˈfla-giŋ",
        definition: "Tireless; persistent.",
        example: "She showed unflagging enthusiasm for the project.",
        etymology: "From 'un-' (not) + 'flag' + '-ing', from 'flag' meaning 'to become limp, droop'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Enduring",
        pronunciation: "in-ˈdu̇r-iŋ",
        definition: "Lasting over a period of time; durable.",
        example: "Their enduring friendship lasted throughout their lives.",
        etymology: "From 'endure' + '-ing', from Latin 'indurare' (to harden, make lasting).",
        partOfSpeech: "adjective"
    },
    {
        word: "Lasting",
        pronunciation: "ˈla-stiŋ",
        definition: "Continuing for a long time; enduring.",
        example: "The meeting had a lasting impact on everyone present.",
        etymology: "From 'last' + '-ing', from Old English 'lǣstan' (to follow, continue).",
        partOfSpeech: "adjective"
    },
    {
        word: "Perennial",
        pronunciation: "pə-ˈre-nē-əl",
        definition: "Lasting or existing for a long or apparently infinite time; enduring.",
        example: "Love is a perennial theme in literature and art.",
        etymology: "From Latin 'perennis' meaning 'lasting through the year', from 'per-' (through) + 'annus' (year).",
        partOfSpeech: "adjective"
    },
    {
        word: "Timeless",
        pronunciation: "ˈtīm-ləs",
        definition: "Not affected by the passage of time or changes in fashion.",
        example: "Classical music has a timeless appeal that transcends generations.",
        etymology: "From 'time' + '-less', from Old English 'tīma' (time, period).",
        partOfSpeech: "adjective"
    },
    {
        word: "Eternal",
        pronunciation: "i-ˈtər-nᵊl",
        definition: "Lasting or existing forever; without end.",
        example: "Their love for each other seemed eternal.",
        etymology: "From Latin 'aeternus' meaning 'enduring, everlasting', from 'aevum' (age).",
        partOfSpeech: "adjective"
    },
    {
        word: "Everlasting",
        pronunciation: "e-vər-ˈla-stiŋ",
        definition: "Lasting forever or a very long time.",
        example: "The stars seemed to shine with an everlasting light.",
        etymology: "From Old English 'ǣfre' (ever) + 'lǣstan' (to last), meaning 'lasting forever'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Immortal",
        pronunciation: "i-ˈmȯr-tᵊl",
        definition: "Living forever; never dying or decaying.",
        example: "The hero's deeds made him immortal in legend.",
        etymology: "From Latin 'immortalis', from 'in-' (not) + 'mortalis' (mortal), from 'mors' (death).",
        partOfSpeech: "adjective"
    },
    {
        word: "Undying",
        pronunciation: "ən-ˈdī-iŋ",
        definition: "Never ending; eternal.",
        example: "She felt undying gratitude toward her mentor.",
        etymology: "From 'un-' (not) + 'die' + '-ing', from Old Norse 'deyja' (to die).",
        partOfSpeech: "adjective"
    },
    {
        word: "Infinite",
        pronunciation: "ˈin-fə-nət",
        definition: "Limitless or endless in space, extent, or size; impossible to measure or calculate.",
        example: "The universe appears to be infinite in scope.",
        etymology: "From Latin 'infinitus' meaning 'unbounded, unlimited', from 'in-' (not) + 'finitus' (limited).",
        partOfSpeech: "adjective"
    },
    {
        word: "Boundless",
        pronunciation: "ˈbau̇n(d)-ləs",
        definition: "Unlimited or immense.",
        example: "The ocean stretched out in boundless blue before them.",
        etymology: "From 'bound' + '-less', from Old English 'būgan' (to bend, turn).",
        partOfSpeech: "adjective"
    },
    {
        word: "Unlimited",
        pronunciation: "ən-ˈli-mə-təd",
        definition: "Not limited or restricted in terms of number, quantity, or extent.",
        example: "The all-inclusive resort offered unlimited activities and dining options.",
        etymology: "From 'un-' (not) + 'limit' + '-ed', from Latin 'limes' (boundary).",
        partOfSpeech: "adjective"
    },
    {
        word: "Limitless",
        pronunciation: "ˈli-mət-ləs",
        definition: "Without end, limit, or boundary.",
        example: "Her potential seemed limitless.",
        etymology: "From 'limit' + '-less', from Latin 'limes' (boundary).",
        partOfSpeech: "adjective"
    },
    {
        word: "Vast",
        pronunciation: "ˈvast",
        definition: "Of very great extent or quantity; immense.",
        example: "The vast desert stretched to the horizon in every direction.",
        etymology: "From Latin 'vastus' meaning 'empty, desolate, immense'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Immense",
        pronunciation: "i-ˈmen(t)s",
        definition: "Extremely large or great, especially in scale or degree.",
        example: "The project required an immense amount of planning and coordination.",
        etymology: "From Latin 'immensus' meaning 'immeasurable', from 'in-' (not) + 'mensus' (measured).",
        partOfSpeech: "adjective"
    },
    {
        word: "Enormous",
        pronunciation: "i-ˈnȯr-məs",
        definition: "Very large in size, quantity, or extent.",
        example: "The elephant was enormous, towering over all the other animals.",
        etymology: "From Latin 'enormis' meaning 'abnormal, huge', from 'e-' (out of) + 'norma' (norm, rule).",
        partOfSpeech: "adjective"
    },
    {
        word: "Colossal",
        pronunciation: "kə-ˈlä-səl",
        definition: "Extremely large.",
        example: "The construction project was a colossal undertaking.",
        etymology: "From Latin 'colosseus', from 'colossus' (giant statue), from Greek 'kolossos'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Tremendous",
        pronunciation: "tri-ˈmen-dəs",
        definition: "Very great in amount, scale, or intensity.",
        example: "She showed tremendous courage in the face of adversity.",
        etymology: "From Latin 'tremendus' meaning 'to be trembled at', from 'tremere' (to tremble).",
        partOfSpeech: "adjective"
    },
    {
        word: "Monumental",
        pronunciation: "mä-nyə-ˈmen-tᵊl",
        definition: "Great in importance, extent, or size.",
        example: "The discovery was a monumental achievement for science.",
        etymology: "From Latin 'monumentalis', from 'monumentum' (monument, memorial), from 'monere' (to remind).",
        partOfSpeech: "adjective"
    },
    {
        word: "Prodigious",
        pronunciation: "prə-ˈdi-jəs",
        definition: "Remarkably or impressively great in extent, size, or degree.",
        example: "The young musician showed prodigious talent at an early age.",
        etymology: "From Latin 'prodigiosus' meaning 'portentous, marvelous', from 'prodigium' (portent, omen).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gigantic",
        pronunciation: "jī-ˈgan-tik",
        definition: "Of very great size or extent; huge or enormous.",
        example: "The gigantic waterfall was a breathtaking sight.",
        etymology: "From Greek 'gigas' (giant) + '-ic', from Latin 'giganteus'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Massive",
        pronunciation: "ˈma-siv",
        definition: "Large and heavy or solid.",
        example: "The massive statue dominated the square.",
        etymology: "From French 'massif', from 'masse' (mass), from Latin 'massa' (lump, dough).",
        partOfSpeech: "adjective"
    },
    {
        word: "Huge",
        pronunciation: "ˈhyüj",
        definition: "Extremely large; enormous.",
        example: "They lived in a huge mansion with dozens of rooms.",
        etymology: "Of uncertain origin, possibly from Old French 'ahuge' or related to 'hug' (to embrace, encircle).",
        partOfSpeech: "adjective"
    },
    {
        word: "Giant",
        pronunciation: "ˈjī-ənt",
        definition: "Of very great size or force; gigantic.",
        example: "The giant redwood trees towered above the forest floor.",
        etymology: "From Greek 'gigas' (giant), from Indo-European root meaning 'earth-born'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Titanic",
        pronunciation: "tī-ˈta-nik",
        definition: "Of exceptional strength, size, or power.",
        example: "The titanic waves crashed against the rocky shore.",
        etymology: "From 'Titan' + '-ic', from Greek 'Titan' (one of the race of giants in mythology).",
        partOfSpeech: "adjective"
    },
    {
        word: "Mammoth",
        pronunciation: "ˈma-məth",
        definition: "Huge; enormous.",
        example: "The company undertook a mammoth reorganization effort.",
        etymology: "From Russian 'mamont', referring to the extinct elephant-like mammal, used metaphorically for size.",
        partOfSpeech: "adjective"
    },
    {
        word: "Jumbo",
        pronunciation: "ˈjəm-(ˌ)bō",
        definition: "Very large.",
        example: "They ordered jumbo shrimp for the party.",
        etymology: "Named after Jumbo, a famous 19th-century elephant in the London Zoo, from Swahili 'jambo' (hello) or 'jumbe' (chief).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sprawling",
        pronunciation: "ˈsprȯ-liŋ",
        definition: "Spreading out over a large area in an untidy or irregular way.",
        example: "The sprawling metropolis extended for miles in every direction.",
        etymology: "From Middle English 'sprawlen', of unknown origin, possibly related to 'spread'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Expansive",
        pronunciation: "ik-ˈspan(t)-siv",
        definition: "Covering a wide area in terms of space or scope; extensive.",
        example: "The view from the mountaintop was expansive and breathtaking.",
        etymology: "From Latin 'expansus', past participle of 'expandere' (to spread out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Extensive",
        pronunciation: "ik-ˈsten(t)-siv",
        definition: "Covering or affecting a large area.",
        example: "The fire caused extensive damage to the building.",
        etymology: "From Latin 'extensus', past participle of 'extendere' (to stretch out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Comprehensive",
        pronunciation: "käm-pri-ˈhen(t)-siv",
        definition: "Including or dealing with all or nearly all elements or aspects of something.",
        example: "The library offered a comprehensive collection of historical documents.",
        etymology: "From Late Latin 'comprehensivus', from 'comprehendere' (to grasp, include).",
        partOfSpeech: "adjective"
    },
    {
        word: "Wide",
        pronunciation: "ˈwīd",
        definition: "Of great or more than average width.",
        example: "The wide river flowed peacefully through the valley.",
        etymology: "From Old English 'wīd' meaning 'spacious, extensive, far-reaching'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Broad",
        pronunciation: "ˈbrȯd",
        definition: "Having a distance larger than usual from side to side; wide.",
        example: "She had a broad smile that lit up her entire face.",
        etymology: "From Old English 'brād' meaning 'wide, not narrow'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Spacious",
        pronunciation: "ˈspā-shəs",
        definition: "Having ample space; roomy.",
        example: "The spacious living room could accommodate a large gathering.",
        etymology: "From Old French 'spacieux', from Latin 'spatiosus', from 'spatium' (space).",
        partOfSpeech: "adjective"
    },
    {
        word: "Roomy",
        pronunciation: "ˈrü-mē",
        definition: "Having plenty of room; spacious.",
        example: "The apartment was surprisingly roomy despite its compact exterior.",
        etymology: "From 'room' + '-y', from Old English 'rūm' (space, extent).",
        partOfSpeech: "adjective"
    },
    {
        word: "Capacious",
        pronunciation: "kə-ˈpā-shəs",
        definition: "Having a lot of space inside; roomy.",
        example: "The capacious bag held all her travel essentials.",
        etymology: "From Latin 'capax' meaning 'able to hold much', from 'capere' (to take, hold).",
        partOfSpeech: "adjective"
    },
    {
        word: "Voluminous",
        pronunciation: "və-ˈlü-mə-nəs",
        definition: "Occupying or containing much space; large in volume.",
        example: "She kept voluminous notes on every topic that interested her.",
        etymology: "From Latin 'voluminosus', from 'volumen' (roll, book, volume).",
        partOfSpeech: "adjective"
    },
    {
        word: "Ample",
        pronunciation: "ˈam-pəl",
        definition: "Enough or more than enough; plentiful.",
        example: "There was ample time to complete the project.",
        etymology: "From Latin 'amplus' meaning 'large, spacious, extensive'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Abundant",
        pronunciation: "ə-ˈbən-dənt",
        definition: "Existing or available in large quantities; plentiful.",
        example: "The garden produced an abundant harvest of vegetables.",
        etymology: "From Latin 'abundans', present participle of 'abundare' (to overflow), from 'ab-' + 'unda' (wave).",
        partOfSpeech: "adjective"
    },
    {
        word: "Plentiful",
        pronunciation: "ˈplen-ti-fəl",
        definition: "Existing in great quantities; abundant.",
        example: "Rainfall was plentiful this season, ensuring a good crop.",
        etymology: "From 'plenty' + '-ful', from Old French 'plentif', from Latin 'plenus' (full).",
        partOfSpeech: "adjective"
    },
    {
        word: "Bountiful",
        pronunciation: "ˈbau̇n-ti-fəl",
        definition: "Large in quantity; abundant.",
        example: "The bountiful feast included dishes from around the world.",
        etymology: "From Old French 'bontif' meaning 'good, kind', later used for 'generous, abundant'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Copious",
        pronunciation: "ˈkō-pē-əs",
        definition: "Abundant in supply or quantity.",
        example: "She took copious notes during the lecture.",
        etymology: "From Latin 'copiosus' meaning 'plentiful, abounding', from 'copia' (abundance, plenty).",
        partOfSpeech: "adjective"
    },
    {
        word: "Profuse",
        pronunciation: "prə-ˈfyüs",
        definition: "Exuberantly plentiful; abundant.",
        example: "The flowers bloomed in profuse colors throughout the garden.",
        etymology: "From Latin 'profusus' meaning 'poured forth, lavish', from 'profundere' (to pour out).",
        partOfSpeech: "adjective"
    },
    {
        word: "Lavish",
        pronunciation: "ˈla-vish",
        definition: "Sumptuously rich, elaborate, or luxurious.",
        example: "They threw a lavish party to celebrate their anniversary.",
        etymology: "From Old French 'lavasse' meaning 'deluge of rain', from Latin 'lavare' (to wash).",
        partOfSpeech: "adjective"
    },
    {
        word: "Generous",
        pronunciation: "ˈje-nə-rəs",
        definition: "Showing a readiness to give more of something, as money or time, than is strictly necessary or expected.",
        example: "She was known for her generous donations to charity.",
        etymology: "From Latin 'generosus' meaning 'of noble birth, magnanimous', from 'genus' (birth, race).",
        partOfSpeech: "adjective"
    },
    {
        word: "Munificent",
        pronunciation: "myü-ˈni-fə-sənt",
        definition: "Characterized by or displaying great generosity.",
        example: "The munificent donor contributed millions to the university.",
        etymology: "From Latin 'munificus' meaning 'generous, bountiful', from 'munus' (gift) + 'facere' (to make).",
        partOfSpeech: "adjective"
    },
    {
        word: "Benevolent",
        pronunciation: "bə-ˈne-və-lənt",
        definition: "Well meaning and kindly.",
        example: "The benevolent king was loved by all his subjects.",
        etymology: "From Latin 'benevolens', from 'bene' (well) + 'volens' (wishing), from 'velle' (to wish).",
        partOfSpeech: "adjective"
    },
    {
        word: "Charitable",
        pronunciation: "ˈcher-ə-tə-bəl",
        definition: "Relating to the assistance of those in need; generous in giving to those in need.",
        example: "He was known for his charitable work in the community.",
        etymology: "From Old French 'charitable', from Late Latin 'caritabilis', from 'caritas' (dearness, love).",
        partOfSpeech: "adjective"
    },
    {
        word: "Philanthropic",
        pronunciation: "fi-lən-ˈthrä-pik",
        definition: "Seeking to promote the welfare of others, especially by donating money to good causes; generous and benevolent.",
        example: "The philanthropic foundation supported education initiatives worldwide.",
        etymology: "From Greek 'philanthrōpikos', from 'philanthrōpos' (loving mankind), from 'philos' (loving) + 'anthrōpos' (man).",
        partOfSpeech: "adjective"
    },
    {
        word: "Altruistic",
        pronunciation: "al-trü-ˈi-stik",
        definition: "Showing a disinterested and selfless concern for the well-being of others; unselfish.",
        example: "Her altruistic nature led her to volunteer at the homeless shelter.",
        etymology: "From French 'altruiste', from Italian 'altrui' (somebody else), from Latin 'alter' (other).",
        partOfSpeech: "adjective"
    },
    {
        word: "Selfless",
        pronunciation: "ˈself-ləs",
        definition: "Concerned more with the needs and wishes of others than with one's own; unselfish.",
        example: "Her selfless act of donating a kidney saved her brother's life.",
        etymology: "From 'self' + '-less', from Old English 'self' (one's own person).",
        partOfSpeech: "adjective"
    },
    {
        word: "Unselfish",
        pronunciation: "ən-ˈsel-fish",
        definition: "Willing to put the needs or wishes of others before one's own.",
        example: "He made an unselfish decision to help his colleague instead of taking credit.",
        etymology: "From 'un-' (not) + 'selfish', from 'self' + '-ish'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Kind",
        pronunciation: "ˈkīnd",
        definition: "Having or showing a friendly, generous, and considerate nature.",
        example: "She was always kind to strangers and animals alike.",
        etymology: "From Old English 'gecynde' meaning 'natural, native, innate', from 'cynd' (nature, kind).",
        partOfSpeech: "adjective"
    },
    {
        word: "Kindhearted",
        pronunciation: "ˈkīnd-ˈhär-təd",
        definition: "Having a kind and sympathetic nature.",
        example: "The kindhearted nurse comforted all her patients.",
        etymology: "From 'kind' + 'hearted', from Old English 'heorte' (heart).",
        partOfSpeech: "adjective"
    },
    {
        word: "Compassionate",
        pronunciation: "kəm-ˈpa-shə-nət",
        definition: "Feeling or showing sympathy and concern for others.",
        example: "The compassionate teacher took extra time to help struggling students.",
        etymology: "From Late Latin 'compassio', from 'com-' (together) + 'pati' (to suffer).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sympathetic",
        pronunciation: "sim-pə-ˈthe-tik",
        definition: "Feeling, showing, or expressing sympathy.",
        example: "She gave a sympathetic nod when she heard about his difficulties.",
        etymology: "From Greek 'sympathetikos', from 'sympatheia' (sympathy), from 'syn-' (together) + 'pathos' (feeling).",
        partOfSpeech: "adjective"
    },
    {
        word: "Empathetic",
        pronunciation: "em-pə-ˈthe-tik",
        definition: "Showing an ability to understand and share the feelings of another.",
        example: "The therapist was empathetic and helped her work through her emotions.",
        etymology: "From 'empathy' + '-ic', from Greek 'empatheia' (passion), from 'en-' (in) + 'pathos' (feeling).",
        partOfSpeech: "adjective"
    },
    {
        word: "Understanding",
        pronunciation: "ən-dər-ˈstan-diŋ",
        definition: "Sympathetically aware of other people's feelings; tolerant and forgiving.",
        example: "Her understanding nature made her an excellent counselor.",
        etymology: "From Old English 'understandan' meaning 'to comprehend, grasp the idea of'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Tolerant",
        pronunciation: "ˈtä-lə-rənt",
        definition: "Showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with.",
        example: "The tolerant community welcomed people from diverse backgrounds.",
        etymology: "From Latin 'tolerans', present participle of 'tolerare' (to bear, endure).",
        partOfSpeech: "adjective"
    },
    {
        word: "Accepting",
        pronunciation: "ik-ˈsep-tiŋ",
        definition: "Tolerant or welcoming of differences.",
        example: "The accepting atmosphere made everyone feel comfortable.",
        etymology: "From 'accept' + '-ing', from Latin 'accipere' (to take, receive), from 'ad-' + 'capere' (to take).",
        partOfSpeech: "adjective"
    },
    {
        word: "Open-minded",
        pronunciation: "ō-pən-ˈmīn-dəd",
        definition: "Willing to consider new ideas; unprejudiced.",
        example: "Being open-minded allowed her to learn from different cultures.",
        etymology: "From 'open' + 'mind' + '-ed', meaning having a mind open to new ideas.",
        partOfSpeech: "adjective"
    },
    {
        word: "Broad-minded",
        pronunciation: "brȯd-ˈmīn-dəd",
        definition: "Tolerant or liberal in one's views and reactions; not easily shocked.",
        example: "His broad-minded approach to education inspired innovative teaching methods.",
        etymology: "From 'broad' + 'mind' + '-ed', meaning having a wide-ranging, tolerant mind.",
        partOfSpeech: "adjective"
    },
    {
        word: "Liberal",
        pronunciation: "ˈli-b(ə-)rəl",
        definition: "Willing to respect or accept behavior or opinions different from one's own; open to new ideas.",
        example: "She held liberal views on social issues.",
        etymology: "From Latin 'liberalis' meaning 'of freedom, befitting a free man', from 'liber' (free).",
        partOfSpeech: "adjective"
    },
    {
        word: "Progressive",
        pronunciation: "prə-ˈgre-siv",
        definition: "Happening or developing gradually or in stages; proceeding step by step.",
        example: "The progressive school encouraged creative thinking and innovation.",
        etymology: "From Latin 'progressivus', from 'progredi' (to go forward), from 'pro-' (forward) + 'gradi' (to step).",
        partOfSpeech: "adjective"
    },
    {
        word: "Forward-thinking",
        pronunciation: "fȯr-wərd-ˈthiŋ-kiŋ",
        definition: "Favoring innovation and development; progressive.",
        example: "The forward-thinking company invested heavily in renewable energy.",
        etymology: "From 'forward' + 'thinking', meaning thinking ahead, progressive.",
        partOfSpeech: "adjective"
    },
    {
        word: "Innovative",
        pronunciation: "i-nə-ˈvā-tiv",
        definition: "Featuring new methods; advanced and original.",
        example: "The innovative design won several awards.",
        etymology: "From 'innovate' + '-ive', from Latin 'innovare' (to renew, change), from 'in-' (into) + 'novus' (new).",
        partOfSpeech: "adjective"
    },
    {
        word: "Creative",
        pronunciation: "krē-ˈā-tiv",
        definition: "Relating to or involving the use of the imagination or original ideas to create something; inventive.",
        example: "She found a creative solution to the problem.",
        etymology: "From Latin 'creare' meaning 'to produce, make, create'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Inventive",
        pronunciation: "in-ˈven-tiv",
        definition: "Having the ability to create or design new things or to think originally.",
        example: "The inventive engineer developed a new type of engine.",
        etymology: "From 'invent' + '-ive', from Latin 'invenire' (to find, discover), from 'in-' (upon) + 'venire' (to come).",
        partOfSpeech: "adjective"
    },
    {
        word: "Imaginative",
        pronunciation: "i-ˈma-jə-nə-tiv",
        definition: "Having or showing creativity or inventiveness.",
        example: "The imaginative storyteller captivated children with her tales.",
        etymology: "From 'imagine' + '-ative', from Latin 'imaginari' (to form a mental picture), from 'imago' (image).",
        partOfSpeech: "adjective"
    },
    {
        word: "Original",
        pronunciation: "ə-ˈri-jə-nᵊl",
        definition: "Present or existing from the beginning; first or earliest; created directly and personally by a particular artist; not a copy or imitation.",
        example: "Her artwork was highly original and unlike anything seen before.",
        etymology: "From Latin 'originalis', from 'originem' (beginning, source), from 'oriri' (to rise).",
        partOfSpeech: "adjective"
    },
    {
        word: "Artistic",
        pronunciation: "är-ˈti-stik",
        definition: "Having or revealing natural creative skill.",
        example: "The artistic community flourished in the vibrant neighborhood.",
        etymology: "From 'artist' + '-ic', from Latin 'ars' (art, skill).",
        partOfSpeech: "adjective"
    },
    {
        word: "Talented",
        pronunciation: "ˈta-lən-təd",
        definition: "Having a natural aptitude or skill for something.",
        example: "The talented musician could play multiple instruments.",
        etymology: "From 'talent' + '-ed', from Latin 'talentum' (balance, weight, sum of money), from Greek 'talanton'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Gifted",
        pronunciation: "ˈgif-təd",
        definition: "Having exceptional talent or natural ability.",
        example: "The gifted student skipped two grades.",
        etymology: "From 'gift' + '-ed', from Old English 'gift' (payment for a wife), later 'natural endowment'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Skilled",
        pronunciation: "ˈskild",
        definition: "Having or showing the knowledge, ability, or training to perform a certain activity or task well.",
        example: "The skilled craftsman could create intricate wood carvings.",
        etymology: "From 'skill' + '-ed', from Old Norse 'skil' (discernment, knowledge).",
        partOfSpeech: "adjective"
    },
    {
        word: "Adept",
        pronunciation: "ə-ˈdept",
        definition: "Very skilled or proficient at something.",
        example: "She was adept at solving complex puzzles.",
        etymology: "From Latin 'adeptus' meaning 'obtained, achieved', past participle of 'adipisci' (to attain).",
        partOfSpeech: "adjective"
    },
    {
        word: "Proficient",
        pronunciation: "prə-ˈfi-shənt",
        definition: "Competent or skilled in doing or using something.",
        example: "He was proficient in several programming languages.",
        etymology: "From Latin 'proficiens', present participle of 'proficere' (to make progress), from 'pro-' (forward) + 'facere' (to make).",
        partOfSpeech: "adjective"
    },
    {
        word: "Expert",
        pronunciation: "ek-ˈspərt",
        definition: "A person who is very knowledgeable about or skillful in a particular area.",
        example: "The expert mechanic fixed the engine in no time.",
        etymology: "From Latin 'expertus', past participle of 'experiri' (to try, test), from 'ex-' + 'periri' (to go through).",
        partOfSpeech: "noun"
    },
    {
        word: "Masterful",
        pronunciation: "ˈmas-tər-fəl",
        definition: "Performed or performing very skillfully.",
        example: "The pianist gave a masterful performance of the concerto.",
        etymology: "From 'master' + '-ful', from Latin 'magister' (chief, head, teacher).",
        partOfSpeech: "adjective"
    },
    {
        word: "Masterly",
        pronunciation: "ˈmas-tər-lē",
        definition: "Performed or performing very skillfully.",
        example: "His masterly handling of the situation impressed everyone.",
        etymology: "From 'master' + '-ly', from Latin 'magister' (chief, head, teacher).",
        partOfSpeech: "adjective"
    },
    {
        word: "Accomplished",
        pronunciation: "ə-ˈkäm-plisht",
        definition: "Highly trained or skilled in a particular activity.",
        example: "She was an accomplished author with several bestsellers.",
        etymology: "From 'accomplish' + '-ed', from Old French 'acomplir', from Latin 'complere' (to fill up, complete).",
        partOfSpeech: "adjective"
    },
    {
        word: "Versatile",
        pronunciation: "ˈvər-sə-tᵊl",
        definition: "Able to adapt or be adapted to many different functions or activities.",
        example: "The versatile actor could perform in comedies and dramas equally well.",
        etymology: "From Latin 'versatilis' meaning 'turning, revolving, changeable', from 'versare' (to turn).",
        partOfSpeech: "adjective"
    },
    {
        word: "Adaptable",
        pronunciation: "ə-ˈdap-tə-bəl",
        definition: "Able to adjust to new conditions.",
        example: "Children are remarkably adaptable and can learn new languages quickly.",
        etymology: "From 'adapt' + '-able', from Latin 'adaptare' (to fit, adjust), from 'ad-' + 'aptare' (to fit).",
        partOfSpeech: "adjective"
    },
    {
        word: "Flexible",
        pronunciation: "ˈflek-sə-bəl",
        definition: "Capable of bending easily without breaking; able to be easily modified to respond to altered circumstances.",
        example: "The flexible schedule allowed employees to work from home.",
        etymology: "From Latin 'flexibilis', from 'flectere' (to bend).",
        partOfSpeech: "adjective"
    },
    {
        word: "Resourceful",
        pronunciation: "ri-ˈsȯrs-fəl",
        definition: "Having the ability to find quick and clever ways to overcome difficulties.",
        example: "The resourceful camper used natural materials to build a shelter.",
        etymology: "From 'resource' + '-ful', from Old French 'resourse' (a source, spring), from Latin 'resurgere' (to rise again).",
        partOfSpeech: "adjective"
    },
    {
        word: "Clever",
        pronunciation: "ˈkle-vər",
        definition: "Quick to understand, learn, and devise or apply ideas; intelligent.",
        example: "The clever detective solved the mystery using minimal clues.",
        etymology: "From Middle English 'cliver', of uncertain origin, possibly from Old English 'clifer' (claw, hand).",
        partOfSpeech: "adjective"
    },
    {
        word: "Smart",
        pronunciation: "ˈsmärt",
        definition: "Having or showing a quick-witted intelligence.",
        example: "The smart student excelled in all her classes.",
        etymology: "From Old English 'smeart' meaning 'causing sharp pain; stinging', later 'quick, prompt'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Intelligent",
        pronunciation: "in-ˈte-lə-jənt",
        definition: "Having or showing intelligence, especially of a high level.",
        example: "The intelligent discussion covered complex topics with ease.",
        etymology: "From Latin 'intelligens', present participle of 'intelligere' (to understand), from 'inter-' (between) + 'legere' (to choose, pick).",
        partOfSpeech: "adjective"
    },
    {
        word: "Whimsical",
        pronunciation: "ˈ(h)wim-zi-kəl",
        definition: "Playfully quaint or fanciful, especially in an appealing and amusing way.",
        example: "The whimsical artwork brought smiles to everyone's faces.",
        etymology: "From 'whimsey' (whim) + '-ical', from Old English 'hwima' (a whim).",
        partOfSpeech: "adjective"
    },
    {
        word: "Playful",
        pronunciation: "ˈplā-fəl",
        definition: "Fond of games and amusement; lighthearted.",
        example: "The playful puppies chased each other around the yard.",
        etymology: "From 'play' + '-ful', from Old English 'plegian' (to exercise, frolic).",
        partOfSpeech: "adjective"
    },
    {
        word: "Cheerful",
        pronunciation: "ˈchir-fəl",
        definition: "Noticeably happy and optimistic.",
        example: "Her cheerful disposition brightened everyone's day.",
        etymology: "From 'cheer' + '-ful', from Old French 'chiere' (face, countenance).",
        partOfSpeech: "adjective"
    },
    {
        word: "Lighthearted",
        pronunciation: "līt-ˈhär-təd",
        definition: "Cheerful and carefree.",
        example: "The lighthearted comedy provided a welcome escape from daily stress.",
        etymology: "From 'light' + 'hearted', meaning having a heart that feels light and carefree.",
        partOfSpeech: "adjective"
    },
    {
        word: "Carefree",
        pronunciation: "ˈker-ˌfrē",
        definition: "Free from anxiety or responsibility.",
        example: "They enjoyed a carefree summer vacation at the beach.",
        etymology: "From 'care' + 'free', meaning free from care or worry.",
        partOfSpeech: "adjective"
    },
    {
        word: "Joyful",
        pronunciation: "ˈjȯi-fəl",
        definition: "Feeling, expressing, or causing great pleasure and happiness.",
        example: "The joyful celebration lasted well into the night.",
        etymology: "From 'joy' + '-ful', from Old French 'joie', from Latin 'gaudia'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Jubilant",
        pronunciation: "ˈjü-bə-lənt",
        definition: "Feeling or expressing great happiness and triumph.",
        example: "The team was jubilant after winning the championship game.",
        etymology: "From Latin 'jubilare' meaning 'to shout for joy'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Radiant",
        pronunciation: "ˈrā-dē-ənt",
        definition: "Sending out light; shining or glowing brightly; having a glowing quality.",
        example: "Her radiant smile lit up the entire room.",
        etymology: "From Latin 'radiare' meaning 'to emit rays', from 'radius' (ray).",
        partOfSpeech: "adjective"
    },
    {
        word: "Blissful",
        pronunciation: "ˈblis-fəl",
        definition: "Extremely happy; full of joy.",
        example: "They spent a blissful week on the tropical island.",
        etymology: "From Old English 'bliss' (joy, happiness) + '-ful'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Vivacious",
        pronunciation: "və-ˈvā-shəs",
        definition: "Attractively lively and animated; full of energy.",
        example: "She was a vivacious host who kept everyone entertained.",
        etymology: "From Latin 'vivax' meaning 'long-lived, vigorous', from 'vivere' (to live).",
        partOfSpeech: "adjective"
    },
    {
        word: "Euphoric",
        pronunciation: "yu̇-ˈfȯr-ik",
        definition: "Characterized by or feeling intense excitement and happiness.",
        example: "She felt euphoric after receiving the good news.",
        etymology: "From Greek 'euphoria' meaning 'power of enduring easily', from 'eu-' (well) + 'pherein' (to bear).",
        partOfSpeech: "adjective"
    },
    {
        word: "Exuberant",
        pronunciation: "ig-ˈzü-bə-rənt",
        definition: "Filled with or characterized by a lively energy and excitement.",
        example: "The exuberant crowd cheered as the band took the stage.",
        etymology: "From Latin 'exuberare' meaning 'to be abundant', from 'ex-' (thoroughly) + 'uber' (fertile).",
        partOfSpeech: "adjective"
    },
    {
        word: "Blithe",
        pronunciation: "ˈblīth",
        definition: "Showing a casual and cheerful indifference considered to be callous or improper.",
        example: "She maintained a blithe attitude despite the chaos around her.",
        etymology: "From Old English 'blīthe' meaning 'happy, gentle, kind'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Jovial",
        pronunciation: "ˈjō-vē-əl",
        definition: "Cheerful and friendly.",
        example: "His jovial nature made him popular at social gatherings.",
        etymology: "From Latin 'Jovialis' meaning 'of Jupiter', referring to the planet's astrological influence of good humor.",
        partOfSpeech: "adjective"
    },
    {
        word: "Effervescent",
        pronunciation: "e-fər-ˈve-sənt",
        definition: "Bubbling and lively; vivacious and enthusiastic.",
        example: "Her effervescent personality made every conversation enjoyable.",
        etymology: "From Latin 'effervescere' meaning 'to boil up', from 'ex-' (out) + 'fervescere' (to begin to boil).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sanguine",
        pronunciation: "ˈsaŋ-gwən",
        definition: "Optimistic or positive, especially in an apparently bad or difficult situation.",
        example: "Despite the challenges, she remained sanguine about the project's success.",
        etymology: "From Latin 'sanguineus' meaning 'bloody', from the medieval belief that a sanguine temperament was caused by an abundance of blood.",
        partOfSpeech: "adjective"
    },
    {
        word: "Buoyant",
        pronunciation: "ˈbȯi-ənt",
        definition: "Cheerful and optimistic; able to float or rise to the surface.",
        example: "Her buoyant spirits helped lift everyone's mood.",
        etymology: "From French 'bouyant', present participle of 'bouyer' (to float), from Latin 'boia' (a fetter).",
        partOfSpeech: "adjective"
    },
    {
        word: "Merry",
        pronunciation: "ˈmer-ē",
        definition: "Cheerful and lively; full of fun.",
        example: "They had a merry celebration with music and dancing.",
        etymology: "From Old English 'meriġe' meaning 'pleasing, agreeable, pleasant, sweet'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Jaunty",
        pronunciation: "ˈjȯn-tē",
        definition: "Having or expressing a lively, cheerful, and self-confident manner.",
        example: "He walked with a jaunty step, whistling a cheerful tune.",
        etymology: "From French 'gentil' meaning 'noble, gentle', from Latin 'gentilis' (of the same clan).",
        partOfSpeech: "adjective"
    },
    {
        word: "Sprightly",
        pronunciation: "ˈsprīt-lē",
        definition: "Lively, full of energy.",
        example: "The sprightly dance music got everyone on their feet.",
        etymology: "From 'spright' (spirit) + '-ly', from Middle English 'sprit' meaning 'spirit'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Felicitous",
        pronunciation: "fə-ˈli-sə-təs",
        definition: "Well chosen or suited to the circumstances; pleasing and fortunate.",
        example: "She made a felicitous choice of words that perfectly captured the moment.",
        etymology: "From Latin 'felicitas' meaning 'happiness, good fortune', from 'felix' (happy).",
        partOfSpeech: "adjective"
    },
    {
        word: "Genial",
        pronunciation: "ˈjēn-yəl",
        definition: "Friendly and cheerful.",
        example: "The genial host made everyone feel welcome at the party.",
        etymology: "From Latin 'genialis' meaning 'festive, jovial, genial', from 'genius' (guardian spirit).",
        partOfSpeech: "adjective"
    },
    {
        word: "Gleeful",
        pronunciation: "ˈglē-fəl",
        definition: "Exuberantly or triumphantly joyful.",
        example: "The children were gleeful when they saw the pile of presents.",
        etymology: "From Middle English 'gleeful', from 'glee' (mirth, joy) + '-ful'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Elated",
        pronunciation: "i-ˈlā-təd",
        definition: "Ecstatically happy.",
        example: "She was elated to hear that she had been accepted to her dream university.",
        etymology: "From Latin 'elatus' (raised up), past participle of 'efferre' (to carry out, raise up).",
        partOfSpeech: "adjective"
    },
    {
        word: "Cherubic",
        pronunciation: "chə-ˈrü-bik",
        definition: "Having the innocence and plump prettiness of a cherub; angelic.",
        example: "The baby's cherubic face made everyone smile.",
        etymology: "From 'cherub' + '-ic', from Hebrew 'kerub' meaning 'angel'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Beatific",
        pronunciation: "bē-ə-ˈti-fik",
        definition: "Feeling or expressing blissful happiness.",
        example: "A beatific smile spread across her face as she watched the sunset.",
        etymology: "From Latin 'beatus' (blessed) + '-fic' (making), from 'beatificus'.",
        partOfSpeech: "adjective"
    },
    {
        word: "Ecstatic",
        pronunciation: "ik-ˈsta-tik",
        definition: "Feeling or expressing overwhelming happiness or joyful excitement.",
        example: "They were ecstatic about their engagement announcement.",
        etymology: "From Greek 'ekstatikos' meaning 'entrancing', from 'ekstasis' (standing outside oneself).",
        partOfSpeech: "adjective"
    },
    {
        word: "Mirthful",
        pronunciation: "ˈmərth-fəl",
        definition: "Full of mirth; merry or amusing.",
        example: "The mirthful laughter of children echoed through the park.",
        etymology: "From Middle English 'merthe' (mirth) + '-ful', from Old English 'myrgth' (joy, pleasure).",
        partOfSpeech: "adjective"
    },
    {
        word: "Zestful",
        pronunciation: "ˈzest-fəl",
        definition: "Characterized by great enthusiasm and energy.",
        example: "She approached every challenge with a zestful attitude.",
        etymology: "From 'zest' (enthusiasm, energy) + '-ful', originally from French 'zeste' (orange or lemon peel used for flavoring).",
        partOfSpeech: "adjective"
    },
    {
        word: "Peppy",
        pronunciation: "ˈpe-pē",
        definition: "Full of energy and high spirits; lively.",
        example: "The peppy cheerleaders energized the crowd.",
        etymology: "From 'pep' (energy, spirit) + '-y', of uncertain origin, possibly imitative.",
        partOfSpeech: "adjective"
    },
    {
        word: "Upbeat",
        pronunciation: "ˈəp-ˌbēt",
        definition: "Cheerful; optimistic.",
        example: "Despite the rain, she maintained an upbeat mood.",
        etymology: "From musical term meaning 'unaccented beat', used metaphorically to mean positive.",
        partOfSpeech: "adjective"
    },
    {
        word: "Thrilled",
        pronunciation: "ˈthrild",
        definition: "Feeling or showing great excitement and pleasure.",
        example: "He was thrilled to receive the award.",
        etymology: "From 'thrill' (to cause to feel a sudden wave of emotion) + '-ed', from Old English 'thyrelian' (to pierce).",
        partOfSpeech: "adjective"
    },
    {
        word: "Jocund",
        pronunciation: "ˈjä-kənd",
        definition: "Cheerful and lighthearted.",
        example: "His jocund nature brought joy to all who knew him.",
        etymology: "From Latin 'jocundus' meaning 'pleasant, agreeable', from 'jocus' (joke).",
        partOfSpeech: "adjective"
    },
    {
        word: "Mirth",
        pronunciation: "ˈmərth",
        definition: "Amusement, especially as expressed in laughter.",
        example: "The comedy show was filled with mirth and laughter.",
        etymology: "From Middle English 'merthe', from Old English 'myrgth' (joy, pleasure), related to 'merry'.",
        partOfSpeech: "noun"
    },
    {
        word: "Jubilation",
        pronunciation: "jü-bə-ˈlā-shən",
        definition: "A feeling of great happiness and triumph.",
        example: "There was jubilation in the streets after the team's victory.",
        etymology: "From Latin 'jubilatio' meaning 'a shouting for joy', from 'jubilare' (to shout).",
        partOfSpeech: "noun"
    },
    {
        word: "Bliss",
        pronunciation: "ˈblis",
        definition: "Perfect happiness; great joy.",
        example: "She found bliss in the simple pleasures of life.",
        etymology: "From Old English 'blis' meaning 'bliss, merriment, happiness, grace, favor'.",
        partOfSpeech: "noun"
    },
    {
        word: "Rapture",
        pronunciation: "ˈrap-chər",
        definition: "A feeling of intense pleasure or joy.",
        example: "She listened to the music with complete rapture.",
        etymology: "From Latin 'raptura' meaning 'seizure, kidnapping', from 'rapere' (to seize).",
        partOfSpeech: "noun"
    },
    {
        word: "Euphoria",
        pronunciation: "yu̇-ˈfȯr-ē-ə",
        definition: "A feeling or state of intense excitement and happiness.",
        example: "She was filled with euphoria after completing the marathon.",
        etymology: "From Greek 'euphoria' meaning 'power of enduring easily', from 'eu-' (well) + 'pherein' (to bear).",
        partOfSpeech: "noun"
    },
    {
        word: "Exultation",
        pronunciation: "eg-ˌzəl-ˈtā-shən",
        definition: "A feeling of triumphant elation or jubilation; rejoicing.",
        example: "There was great exultation when the news of peace was announced.",
        etymology: "From Latin 'exsultare' meaning 'to leap up', from 'ex-' (out) + 'salire' (to leap).",
        partOfSpeech: "noun"
    },
    {
        word: "Glee",
        pronunciation: "ˈglē",
        definition: "Great delight, especially from one's own good fortune or another's misfortune.",
        example: "The students shouted with glee when school was cancelled.",
        etymology: "From Old English 'glēo' meaning 'mirth, joy, music'.",
        partOfSpeech: "noun"
    },
    {
        word: "Elation",
        pronunciation: "i-ˈlā-shən",
        definition: "Great happiness and exhilaration.",
        example: "Her elation was evident as she announced her promotion.",
        etymology: "From Latin 'elatio' meaning 'carrying away', from 'efferre' (to carry out).",
        partOfSpeech: "noun"
    },
    {
        word: "Exhilaration",
        pronunciation: "ig-ˌzi-lə-ˈrā-shən",
        definition: "A feeling of excitement, happiness, or elation.",
        example: "The exhilaration of skydiving was unlike anything she had experienced.",
        etymology: "From Latin 'exhilarare' meaning 'to make cheerful', from 'ex-' (thoroughly) + 'hilaris' (cheerful).",
        partOfSpeech: "noun"
    },
    {
        word: "Joy",
        pronunciation: "ˈjȯi",
        definition: "A feeling of great pleasure and happiness.",
        example: "The birth of their first child brought them immeasurable joy.",
        etymology: "From Old French 'joie', from Latin 'gaudia', plural of 'gaudium' (joy).",
        partOfSpeech: "noun"
    },
    {
        word: "Gaiety",
        pronunciation: "ˈgā-ə-tē",
        definition: "The state or quality of being lighthearted or cheerful.",
        example: "The festival was filled with gaiety and celebration.",
        etymology: "From French 'gaieté', from 'gai' (cheerful, merry), of uncertain origin.",
        partOfSpeech: "noun"
    },
    {
        word: "Jollity",
        pronunciation: "ˈjä-lə-tē",
        definition: "Lively and cheerful activity or celebration.",
        example: "The wedding reception was full of jollity and laughter.",
        etymology: "From Middle English 'jolite', from Old French 'joliveté' (gaiety), from 'joli' (pretty, merry).",
        partOfSpeech: "noun"
    },
    {
        word: "Merriment",
        pronunciation: "ˈmer-i-mənt",
        definition: "Cheerful and jovial celebration or fun.",
        example: "The party was filled with merriment and good humor.",
        etymology: "From 'merry' + '-ment', from Old English 'meriġe' (pleasant).",
        partOfSpeech: "noun"
    },
    {
        word: "Festivity",
        pronunciation: "fe-ˈsti-və-tē",
        definition: "The celebration of something in a joyful and exuberant way.",
        example: "The streets were alive with festivity during the holiday season.",
        etymology: "From Latin 'festivitas', from 'festivus' (festive), from 'festum' (feast).",
        partOfSpeech: "noun"
    },
    {
        word: "Celebration",
        pronunciation: "se-lə-ˈbrā-shən",
        definition: "The action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
        example: "The celebration of their anniversary lasted all weekend.",
        etymology: "From Latin 'celebrare' meaning 'to honor, celebrate', from 'celeber' (frequented, honored).",
        partOfSpeech: "noun"
    },
    {
        word: "Felicity",
        pronunciation: "fə-ˈli-sə-tē",
        definition: "Intense happiness.",
        example: "She spoke of her marriage with great felicity.",
        etymology: "From Latin 'felicitas' meaning 'happiness, good fortune', from 'felix' (happy, fortunate).",
        partOfSpeech: "noun"
    },
    {
        word: "Exuberance",
        pronunciation: "ig-ˈzü-bə-rən(t)s",
        definition: "The quality of being full of energy, excitement, and cheerfulness; ebullience.",
        example: "The children's exuberance was contagious.",
        etymology: "From Latin 'exuberantia' meaning 'abundance', from 'exuberare' (to be abundant).",
        partOfSpeech: "noun"
    },
    {
        word: "Vivacity",
        pronunciation: "və-ˈva-sə-tē",
        definition: "The quality of being attractively lively and animated.",
        example: "Her vivacity made her a natural performer.",
        etymology: "From Latin 'vivacitas', from 'vivax' (long-lived, vigorous), from 'vivere' (to live).",
        partOfSpeech: "noun"
    }
];
