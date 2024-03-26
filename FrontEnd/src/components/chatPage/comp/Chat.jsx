import OtherUserMessage from "./OtherUserMessage.jsx"
import UserMessage from "./UserMessage.jsx"
import sendSVG from "../../../assets/svg/sendSVG.svg"
import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider.jsx";
import logoutSVG from "../../../assets/svg/logout-solid.svg";
import homeSVG from "../../../assets/svg/home-solid.svg";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export default function Chat() {

    const { id } = useParams();
    const { userData, setLogout } = useAuth();
    const [chatID, setChatID] = useState()
    const [effettoEseguito, setEffettoEseguito] = useState(0);
    const [effettoEseguito2, setEffettoEseguito2] = useState(0);
    const [fetchedChat, setFetchedChat] = useState([])
    const [ctrId, setCtrId] = useState();
    const [fetchedCtr, setFetchedCtr] = useState([]);
    console.log(fetchedChat)


    useEffect(() => {
        setChatID(id);
    }, [id]);


    useEffect(() => {
        if (effettoEseguito < 2) {
            fetch(`${BACKEND_URL}/chats/${chatID}`, {
                headers: {
                    'Authorization': `Bearer ${userData.token}`
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Errore nella richiesta');
                    }
                    return response.json();
                })
                .then(data => {
                    setFetchedChat(data);
                    console.log(data)
                        setCtrId(data.character_id)
                        
                    setEffettoEseguito(prev => prev + 1);
                })
                .catch(error => {
                    console.log('Si è verificato un errore:', error);
                });
        }
    }, [effettoEseguito, chatID]);

    console.log(fetchedChat.character_id)

    useEffect(() => {
        if (effettoEseguito2 < 2 && userData) {
            fetch(`${BACKEND_URL}/characters`, {
                headers: {
                    'Authorization': `Bearer ${userData.token}`
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Errore nella richiesta');
                    }
                    return response.json();
                })
                .then(data => {
                    setFetchedCtr(data);
                    console.log(data)
                    setEffettoEseguito2(prev => prev + 1);
                })
                .catch(error => {
                    console.log('Si è verificato un errore:', error);
                });
        }
    }, [effettoEseguito2, ctrId]);

    const imageInitUrl = "http://localhost:8000"

    let crt = ""

    fetchedCtr.forEach(element => {
        
        if (element.id == fetchedChat.character_id) {
            console.log("element") 
            crt = element
        } else if(fetchedChat.characters_id == undefined) {
            crt = fetchedCtr[0]
        }  
    })




    /* //////////////////////////////////// */



    const [showFirstMessage, setShowFirstMessage] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [controllerInput, setcontrollerInput] = useState(1)
    const [messageListUser, setMessageListUser] = useState([])
    const [messageListNarrator, setMessageListNarrator] = useState([])
    const [endRole, setEndRole] = useState(false)

    useEffect(() => {
        setShowFirstMessage(true)
    })

    const narratorIntro = `Nella Foresta Incantata, ${crt.name} si trova immerso in un luogo avvolto da un'atmosfera magica e misteriosa. Gli alberi millenari si ergono imponenti, le foglie sembrano brillare di luce propria e creature mai viste si muovono tra i cespugli. ${crt.name} avverte una sensazione di meraviglia e timore di fronte a tanta bellezza e potenza magica.`



    function handleOnChange(event) {
        setInputValue(event.target.value);
    }

    const bivio_1 = `Esplora la foresta in cerca di indizi sul luogo in cui potrebbe trovarsi la Spada. Dopo aver scelto di addentrarsi nella foresta, ${crt.name} si avventura tra gli alberi millenari e le creature magiche. Mentre procede con cautela, scopre antichi simboli incisi sui tronchi e misteriose incisioni che sembrano narrare la storia della Spada Leggendaria. Tuttavia, il percorso si fa sempre più intricato e pericoloso, e ${crt.name} si rende conto di essere seguito da occhi scrutatori che lo osservano dall'ombra. SCELTA 1: Decido di affrontare gli occhi scrutatori. SCELTA 2: Decido di affrontare gli occhi scrutatori.`
    const bivio_2 = `Dopo aver superato con l'aiuto delle creature guardiane gli ostacoli che si frapponevano tra lui e la Spada Leggendaria, ${crt.name} si ritrova in un'ampia radura al centro della Foresta Incantata. Qui, davanti a lui, si erge una maestosa cascata d'acqua cristallina, circondata da fiori dai colori vivaci e da una luce dorata che sembra provenire dal cielo stesso. SCELTA 1: Decido di esplorare il sentiero dietro la cascata. Decido di consultare le creature guardiane della foresta SCELTA 2: Decido di decifrare le profezie e le indicazioni sulla pergamena.`
    const bivio_3 = `Mentre ${crt.name} esplora l'area circostante alla cascata, scopre una serie di antichi simboli incisi sulle rocce vicine. Questi simboli sembrano indicare un sentiero nascosto dietro la cascata stessa, un luogo che potrebbe nascondere un'importante tappa nella sua ricerca della Spada Leggendaria. SCELTA 1: Decido di esplorare il sentiero dietro la cascata. SCELTA 2: Decido di tornare all'aperto e condividere le mie scoperte con gli abitanti del villaggio, sperando che possano offrirmi ulteriori informazioni o consigli sulla prossima tappa della mia ricerca.`
    const bivio_4 = `Mentre ${crt.name} si addentra nel sentiero dietro la cascata, scopre un'antica grotta nascosta dietro il velo d'acqua. La luce riflessa dalla cascata crea un'atmosfera magica all'interno della grotta, illuminando antichi disegni sulle pareti e rivelando un'aria di mistero e potere che permea l'ambiente. Dentro la grotta, ${crt.name} si imbatte in un'antica pergamena dall'aspetto incredibilmente antico, decorata con simboli misteriosi. Mentre la studia con attenzione, una voce risuona nell'aria, sussurrando antiche profezie e indicazioni sulla vera natura della Spada Leggendaria. SCELTA 1: Decido di decifrare le profezie e le indicazioni sulla pergamena Scelta 2: Decido di indagare sui simboli incisi sulle rocce.`
    const bivio_5 = `Mentre ${crt.name} si concentra sulla decifrazione delle profezie e delle indicazioni sulla pergamena, inizia a emergere un racconto antico che parla della nascita della Spada Leggendaria. Le profezie suggeriscono che l'arma è stata forgiata secoli fa da un abile fabbro, impegnato in un'epica missione per sconfiggere un male antico che minacciava il mondo intero. La Spada Leggendaria, infusa con poteri magici e virtù straordinarie, è stata nascosta in un luogo segreto per preservarla dalla malvagità. Continuando la lettura, ${crt.name} scopre che la posizione esatta della Spada è stata protetta da incantesimi potenti e indistruttibili, resi inaccessibili a coloro che non dimostrano una volontà pura e il coraggio necessario per affrontare il suo potere. SCELTA 1: Decido di cercare il luogo segreto indicato dalle profezie. SCELTA 2: Decido di consultare le creature guardiane della foresta.`
    const bivio_6 = `${crt.name} decide di dedicare del tempo all'esame attento dei disegni sulle pareti della grotta. Mentre osserva con attenzione ogni dettaglio, scopre rappresentazioni antiche e significative legate all'arma leggendaria. Le immagini raccontano storie di valorosi guerrieri, mitici combattimenti e la gloria della Spada Leggendaria, offrendo preziosi indizi sul suo potere e sulla sua storia millenaria.`
    const bivio_7 = `Dopo aver deciso di indagare sui simboli incisi sulle rocce, ${crt.name} si avventura più in profondità nel bosco, seguendo il sentiero che sembra condurlo verso una radura nascosta. Qui, tra alberi secolari e un'atmosfera carica di mistero, si imbatte in un antico altare di pietra, decorato con simboli runici e segni arcani. A questo ${crt.name} decide di avvicinarsi all'antico altare di pietra e studiarne attentamente i simboli incisi. Mentre si concentra sui dettagli, avverte una strana sensazione di energia che sembra emanare dall'antica struttura. Improvvisamente, i simboli iniziano a risplendere di una luce misteriosa, e ${crt.name} si ritrova avvolto da un'aura di potere antico. A questo punto, potrebbe sorgere una nuova scelta per ${crt.name}, che potrebbe decidere di:`
    const bivio_8 = `Dopo aver deciso di resistere all'energia e cercare di comprendere il significato dei simboli, ${crt.name} sente una connessione profonda con l'antico altare. Mentre studia i simboli incisi, le visioni nella sua mente diventano sempre più chiare, rivelando segreti antichi e profezie misteriose. Tuttavia, l'energia che lo avvolge diventa sempre più intensa, mettendo alla prova la sua resistenza.`
    const bivio_9 = `Decidendo di indietreggiare di fronte alla potente energia e cercare una via di fuga, ${crt.name} sente un'ondata di sollievo mentre si allontana dall'antico altare. L'energia che lo avvolgeva inizia gradualmente a dissolversi, permettendogli di ritrovare il controllo della propria mente e del proprio corpo. Tuttavia, mentre ${crt.name} cerca una via d'uscita dal luogo sacro, si rende conto che l'energia che ha risvegliato non è disposta a lasciarlo andare così facilmente. Un senso di inquietudine lo avvolge mentre si trova di fronte a un nuovo bivio:`
    const bivio_10 = `Attratto dalla luce dorata che sembra provenire dal cielo, ${crt.name} decide di seguire il sentiero che si apre davanti a lui. La luce lo guida attraverso un sentiero incantato, tra alberi che sembrano danzare al suo passaggio e animali della foresta che lo osservano con curiosità. Avanza con un senso di meraviglia e anticipazione, consapevole che questo potrebbe portarlo verso una nuova scoperta o rivelazione legata alla Spada Leggendaria. Dopo un po', il sentiero si biforca, presentando ad ${crt.name} una nuova decisione da prendere:`
    const bivio_11 = `Con una fede crescente nel suo istinto, ${crt.name} decide di seguire la luce dorata, continuando lungo il sentiero incantato. Ogni passo che compie lo avvicina sempre di più alla fonte di quella luce misteriosa, e il suo cuore palpita di eccitazione per ciò che potrebbe trovare oltre l'orizzonte. Il sentiero si snoda tra alberi antichi e muschiati, con la luce che si fa sempre più intensa, irradiando una calda aura di magia intorno a lui. ${crt.name} si sente come se stesse percorrendo un cammino destinato solo a lui, come se fosse stato chiamato a un destino più grande di quanto avesse mai immaginato. Dopo un po', il sentiero si apre in una radura, e ${crt.name} si trova di fronte a una scena mozzafiato: un antico tempio risplendente di luce dorata, con intricati disegni e simboli incisi sulle sue mura. La luce sembra emanare dalla struttura stessa, avvolgendola in un'aurea mistica. Con il cuore colmo di meraviglia e speranza, ${crt.name} si avvicina al tempio, sentendo un senso di benedizione e protezione avvolgerlo mentre attraversa la soglia. Dentro, trova un'atmosfera serena e rassicurante, come se il tempio stesso fosse un rifugio sacro.`


    const scelta_1 = "Decido di affrontare gli occhi scrutatori."
    const scelta_2 = "Decido di esplorare la cascata e cercare indizi."
    const scelta_3 = "Decido di esplorare il sentiero dietro la cascata."
    const scelta_4 = "Decido di decifrare le profezie e le indicazioni sulla pergamena."
    const scelta_5 = "Decido di cercare il luogo segreto indicato dalle profezie."
    const scelta_6 = "Decido di consultare le creature guardiane della foresta."
    const scelta_7 = "Decido di esaminare i disegni sulle pareti della grotta."
    const scelta_8 = "Decido di seguire il sentiero che sembra condurmi più in profondità nella grotta, sperando di trovare ulteriori segreti nascosti nelle sue viscere."
    const scelta_9 = "Decido di tornare all'aperto e condividere le mie scoperte con gli abitanti del villaggio, sperando che possano offrirmi ulteriori informazioni o consigli sulla prossima tappa della mia ricerca."
    const scelta_10 = "Decido di indagare sui simboli incisi sulle rocce."
    const scelta_11 = "Decido di resistere all'energia e cercare di comprendere il significato dei simboli."
    const scelta_12 = "Decido di abbracciare completamente l'energia e accettare il suo potere."
    const scelta_13 = "Decido di cercare un modo per resistere all'energia e proteggermi."
    const scelta_14 = "Decido di indietreggiare di fronte alla potente energia e cercare una via di fuga."
    const scelta_15 = "Decido di seguire il sentiero illuminato dalla luce dorata."
    const scelta_16 = "Decido di seguire la luce dorata, continuando lungo il sentiero incantato, fidandomi del mio istinto che mi guida verso l'ignoto, nella speranza di trovare la risposta che cerco."
    const scelta_17 = "Decido di esplorare il tempio con curiosità, cercando indizi o risposte che possano portarmi più vicino alla comprensione della Spada Leggendaria e del mio destino."
    const scelta_18 = "Decido di seguire fedelmente la profezia, accettando il mio destino come protettore della Spada Leggendaria e preparandomi a intraprendere una missione epica per svelare i suoi segreti e usarla per il bene del mondo."
    const scelta_19 = "Decido di mettere in dubbio la validità della profezia e cercare altre fonti di conoscenza e guida, desideroso di esplorare diverse prospettive e scoprire la verità che potrebbe essere celata da altri antichi testi o saggi."

    const finale_1 = `Mentre ${crt.name} si avventura lungo il percorso indicato dalle antiche profezie, si trova ad affrontare una serie di prove e ostacoli, ognuno progettato per testare la sua determinazione, la sua purezza d'animo e la sua forza interiore. Attraversa barriere magiche, risolve enigmi millenari e dimostra il suo coraggio di fronte a creature mistiche che proteggono gelosamente il luogo segreto. Finalmente, dopo aver superato ogni ostacolo e dimostrato il suo valore, ${crt.name} giunge in un luogo sacro, illuminato da una luce dorata. Qui, al centro di un antico altare, brilla la Spada Leggendaria, con la sua lama scintillante e il suo impareggiabile potere magico. Con il cuore colmo di gratitudine e rispetto, ${crt.name} estrae la Spada Leggendaria dall'altare, sentendo la sua potenza fluire attraverso di lui. Con la leggendaria arma in mano, si prepara ad affrontare le sfide e i pericoli che attendono il suo mondo, determinato a usare il suo potere per difendere la giustizia e proteggere coloro che ama. E così, la storia di ${crt.name} e della Spada Leggendaria si diffonde attraverso le terre, diventando un racconto epico di coraggio, saggezza e speranza per le generazioni a venire. Se hai altre storie o domande, non esitare a chiedere! Sono qui per aiutarti.`
    const finale_2 = `${crt.name} sceglie di tornare dalle creature guardiane della foresta e chiedere il loro aiuto per comprendere meglio gli incantesimi e le sfide che proteggono la Spada Leggendaria. Potrebbero avere informazioni preziose che lo aiuteranno a prepararsi per il prossimo passo della sua ricerca. ${crt.name}, riconoscendo l'importanza di comprendere appieno gli incantesimi e le sfide che lo attendono, fa ritorno dalle creature guardiane della foresta. Con rispetto e gratitudine, chiede il loro aiuto per acquisire una conoscenza più profonda delle prove che dovrà affrontare per raggiungere la Spada Leggendaria. Le creature, riconoscendo il coraggio e la determinazione di ${crt.name}, accolgono la sua richiesta con gentilezza. Condividono con lui antiche profezie, storie e insegnamenti tramandati di generazione in generazione, offrendogli preziose informazioni su come superare le sfide a venire. Armati di queste nuove conoscenze e consigli, ${crt.name} si prepara a intraprendere la prossima tappa della sua epica ricerca. Con la saggezza delle creature guardiane e il suo cuore valoroso, è pronto a affrontare le misteriose prove che lo attendono lungo il cammino verso la Spada Leggendaria.`
    const finale_3 = `${crt.name} avanza con cautela lungo il sentiero che si inoltra sempre più in profondità nella grotta. La luce delle torce danza sulle pareti di roccia, creando ombre misteriose e rivelando antiche incisioni che narrano storie di eroi e leggende legate alla Spada Leggendaria. Mentre procede, ${crt.name} avverte un'atmosfera carica di mistero e potere. Improvvisamente, davanti a lui si apre una vasta caverna, illuminata da un bagliore tenue proveniente dal centro. Attratto dalla luce, si avvicina con cautela e si trova di fronte a un'antica stele di pietra, al cui centro brilla una gemma scintillante. ${crt.name} si rende conto che quella gemma potrebbe avere un legame con la Spada Leggendaria. Mentre si china per osservarla più da vicino, un sussurro antico e misterioso riempie la caverna, svelando un'antica profezia che indica la via per raggiungere l'arma leggendaria. Con le nuove informazioni in mano, ${crt.name} torna al villaggio per prepararsi all'epica ricerca della Spada Leggendaria, consapevole che il suo coraggio e la sua determinazione saranno messi alla prova come mai prima d'ora. La profezia lo ha scelto come custode del destino, e lui è pronto ad accettare la sfida. E così, ${crt.name} parte per il suo viaggio, deciso a superare ogni ostacolo e a dimostrare il suo valore. Il suo cammino sarà ricco di avventure, ma alla fine, grazie alla sua volontà pura e al coraggio necessario, raggiungerà la Spada Leggendaria, diventando una leggenda vivente.`
    const finale_4 = `Dopo aver esaminato attentamente i disegni sulla parete della grotta, ${crt.name} decide di tornare all'aperto e condividere le sue scoperte con gli abitanti del villaggio. Gli anziani del villaggio ascoltano con attenzione le sue parole e, dopo una lunga discussione, suggeriscono di consultare un vecchio manoscritto custodito nella biblioteca del villaggio. Il manoscritto contiene antiche profezie e leggende legate alla Spada Leggendaria, e potrebbe rivelare dettagli cruciali per la prossima tappa della ricerca di ${crt.name}. Con il supporto della comunità, ${crt.name} si reca alla biblioteca e studia il manoscritto con cura, scoprendo riferimenti a un tempio nascosto tra le foreste millenarie, custodito da creature mistiche con il potere di rivelare la via per raggiungere la Spada Leggendaria. Con il cuore colmo di speranza, ${crt.name} ringrazia gli abitanti del villaggio e si prepara per un nuovo viaggio attraverso le fitte foreste alla ricerca del tempio perduto. Guidato dalla saggezza delle antiche profezie e dal sostegno della sua comunità, si avventura in un territorio sconosciuto, pronto a fronteggiare ogni sfida che il destino gli riserverà.`
    const finale_5 = `Decidendo di abbracciare completamente l'energia e accettare il suo potere, ${crt.name} sente un'ondata di calore attraversare il suo corpo mentre si apre completamente alla potente energia dell'antico altare. Le visioni diventano più intense, avvolgendolo completamente mentre il potere antico fluisce dentro di lui. Con una chiarezza sorprendente, ${crt.name} comprende il significato profondo dei simboli incisi, che si rivelano essere le chiavi per risolvere un antico enigma che minacciava il mondo da secoli. Con il potere dell'altare ora a sua disposizione, ${crt.name} si sente invincibile, pronto a compiere la sua missione e proteggere il mondo dalle minacce oscure che si nascondono nell'ombra. Con passione e determinazione, ${crt.name} si impegna a seguire il cammino tracciato dalle profezie misteriose, utilizzando il suo nuovo potere per superare ogni ostacolo. Con ogni passo avanti, la sua connessione con l'antico altare si approfondisce, rafforzando il suo spirito e alimentando la sua determinazione. Con il suo coraggio e la sua saggezza, ${crt.name} diventa una figura leggendaria, celebrata per la sua abilità di dominare il potere dell'antico altare e usare la sua forza per il bene del mondo. E così, la storia di ${crt.name} e della sua avventura con l'energia antica viene tramandata attraverso i secoli, ispirando generazioni future a cercare la saggezza e il coraggio dentro di sé.`
    const finale_6 = `Decidendo di cercare un modo per resistere all'energia e proteggere se stesso, ${crt.name} si concentra intensamente sulla sua volontà e sulla sua determinazione. Sentendo l'energia che lo avvolge diventare sempre più intensa, ${crt.name} cerca di canalizzare il suo spirito per creare una barriera protettiva intorno a sé. Con ogni respiro, ${crt.name} visualizza uno scudo invisibile che lo circonda, respingendo l'energia che cerca di penetrare dentro di lui. Con ogni battito del suo cuore, si aggrappa alla sua forza interiore, rifiutando di essere sopraffatto dal potere dell'altare. Nonostante la sfida crescente, ${crt.name} non cede. Con una determinazione incrollabile, continua a resistere all'energia, trovando rifugio nella sua forza interiore e nella sua volontà di proteggere se stesso. Nonostante la fatica e la pressione costante, ${crt.name} mantiene la sua resistenza, riuscendo infine a trovare un equilibrio tra la sua volontà e il potere dell'antico altare. Con pazienza e determinazione, trova un modo per proteggere se stesso dall'energia mentre continua a esplorare i segreti e le profezie rivelati dagli antichi simboli. Guidato dalla sua volontà ferrea e dalla sua saggezza, ${crt.name} continua il suo viaggio con prudenza e determinazione, sapendo che la protezione di sé stesso è fondamentale per comprendere appieno il potere e il significato dell'antico altare. E così, continua il suo cammino, pronto ad affrontare qualsiasi sfida che il destino gli riservi lungo la strada.`
    const finale_7 = `Con una determinazione rinnovata, ${crt.name} decide di affrontare l'energia direttamente. Sente il calore della sfida bruciare dentro di lui mentre si avvicina nuovamente all'antico altare. Chiude gli occhi e si concentra sulla sua forza interiore, cercando di canalizzare tutto il suo coraggio e la sua volontà per dominare l'energia misteriosa che lo circonda. Con ogni passo che avanza verso l'altare, ${crt.name} sente la pressione dell'energia crescere intorno a lui, ma invece di lasciarsi sopraffare, la accoglie con fermezza. Le visioni nella sua mente diventano più intense e chiare, mentre i simboli incisi sull'altare sembrano prendere vita, emanando una luce mistica che lo avvolge completamente. Con sorpresa e meraviglia, ${crt.name} si rende conto di essere entrato in contatto diretto con l'essenza dell'antico altare. Le profezie misteriose si svelano davanti ai suoi occhi, rivelando segreti antichi e conoscenze nascoste che risalgono ai tempi più remoti. Mentre l'energia si placa intorno a lui, ${crt.name} sente un senso di pace e comprensione avvolgerlo. Ha superato la prova, e ora possiede una conoscenza profonda e un potere che non aveva mai immaginato. Con il cuore colmo di gratitudine e risolutezza, ${crt.name} si prepara a intraprendere il prossimo capitolo del suo viaggio, pronto ad affrontare qualsiasi sfida possa presentarsi sulla sua strada.`
    const finale_8 = `Decidendo di continuare la fuga, ${crt.name} si allontana con passo deciso dall'antico altare, determinato a trovare una soluzione altrove. Sente il peso dell'energia che lascia alle spalle, ma il suo istinto gli dice che non è il momento di confrontarsi direttamente con essa. Mentre corre via, ${crt.name} cerca freneticamente una via d'uscita dal luogo sacro. La foresta intorno a lui sembra cupa e inospitale, ma continua a correre, guidato dalla speranza di trovare aiuto o una soluzione a questa situazione insolita. Dopo un po', ${crt.name} si imbatte in un sentiero che si snoda attraverso gli alberi. Senza esitazione, si addentra nel fitto della foresta, sperando di trovare rifugio o qualcuno che possa aiutarlo a comprendere ciò che sta accadendo. Mentre il sole inizia a calare all'orizzonte, ${crt.name} continua il suo viaggio, determinato a non fermarsi fino a quando non avrà trovato una risposta alle sue domande. La sua avventura è appena iniziata, e sa che il cammino sarà difficile, ma è pronto a affrontare qualsiasi sfida venga incontro sulla sua strada. Con una risoluzione ferma nel cuore, ${crt.name} avanza verso l'ignoto, pronto a scoprire il destino che lo attende.`


    function handleOnSubmit(event) {
        event.preventDefault();
        setcontrollerInput(prev => prev + 1)

        if (controllerInput == 1 && (inputValue == 1 || inputValue == scelta_1 || inputValue == "scelta 1")) {
            setMessageListUser([...messageListUser, scelta_1])
            setMessageListNarrator([...messageListNarrator, bivio_2])
        }
        else if (controllerInput == 2 && (inputValue == 1 || inputValue == scelta_2 || inputValue == "scelta 1")) {
            setMessageListUser([...messageListUser, scelta_2])
            setMessageListNarrator([...messageListNarrator, bivio_3])
        }
        else if (controllerInput == 3 && (inputValue == 1 || inputValue == scelta_3 || inputValue == "scelta 1")) {
            setMessageListUser([...messageListUser, scelta_3])
            setMessageListNarrator([...messageListNarrator, bivio_4])
        }
        else if (controllerInput == 4 && (inputValue == 1 || inputValue == scelta_4 || inputValue == "scelta 1")) {
            setMessageListUser([...messageListUser, scelta_4])
            setMessageListNarrator([...messageListNarrator, bivio_5])
        }
        else if (controllerInput == 5 && (inputValue == 1 || inputValue == scelta_5 || inputValue == "scelta 1")) {
            setMessageListUser([...messageListUser, scelta_4])
            setMessageListNarrator([...messageListNarrator, finale_1])
            setEndRole(true)
        }
        else if (controllerInput == 5 && (inputValue == 2 || inputValue == scelta_6 || inputValue == "scelta 2")) {
            setMessageListUser([...messageListUser, scelta_5])
            setMessageListNarrator([...messageListNarrator, finale_2])
            setEndRole(true)
        }
        else if (controllerInput == 4 && (inputValue == 2 || inputValue == scelta_7 || inputValue == "scelta 2")) {
            setMessageListUser([...messageListUser, scelta_7])
            setMessageListNarrator([...messageListNarrator, bivio_6])
            setcontrollerInput(7)
        }
        else if (controllerInput == 8 && (inputValue == 1 || inputValue == scelta_8 || inputValue == "scelta 1")) {
            setMessageListUser([...messageListUser, scelta_8])
            setMessageListNarrator([...messageListNarrator, finale_3])
            setEndRole(true)
        }
        else if (controllerInput == 8 && (inputValue == 2 || inputValue == scelta_9 || inputValue == "scelta 2")) {
            setMessageListUser([...messageListUser, scelta_9])
            setMessageListNarrator([...messageListNarrator, finale_4])
            setEndRole(true)
        }
        else if (controllerInput == 3 && (inputValue == 2 || inputValue == scelta_10 || inputValue == "scelta 2")) {
            setMessageListUser([...messageListUser, scelta_10])
            setMessageListNarrator([...messageListNarrator, bivio_7])
            setcontrollerInput(9)
            setEndRole(true)
        }
        else if (controllerInput == 10 && (inputValue == 1 || inputValue == scelta_11 || inputValue == "scelta 1")) {
            setMessageListUser([...messageListUser, scelta_11])
            setMessageListNarrator([...messageListNarrator, bivio_8])
        }
        else if (controllerInput == 11 && (inputValue == 1 || inputValue == scelta_12 || inputValue == "scelta 1")) {
            setMessageListUser([...messageListUser, scelta_12])
            setMessageListNarrator([...messageListNarrator, finale_5])
            setEndRole(true)
        }
        else if (controllerInput == 11 && (inputValue == 2 || inputValue == scelta_13 || inputValue == "scelta 2")) {
            setMessageListUser([...messageListUser, scelta_13])
            setMessageListNarrator([...messageListNarrator, finale_6])
            setEndRole(true)
        }
        else if (controllerInput == 2 && (inputValue == 2 || inputValue == scelta_14 || inputValue == "scelta 2")) {
            setMessageListUser([...messageListUser, scelta_14])
            setMessageListNarrator([...messageListNarrator, bivio_9])
            setcontrollerInput(12)
        }
        else if (controllerInput == 13 && (inputValue == 2 || inputValue == scelta_15 || inputValue == "scelta 2")) {
            setMessageListUser([...messageListUser, scelta_15])
            setMessageListNarrator([...messageListNarrator, bivio_10])
        }
        else if (controllerInput == 14 && (inputValue == 1 || inputValue == scelta_16 || inputValue == "scelta 1")) {
            setMessageListUser([...messageListUser, scelta_16])
            setMessageListNarrator([...messageListNarrator, bivio_11])
        }
        else if (controllerInput == 15 && (inputValue == 1 || inputValue == scelta_17 || inputValue == "scelta 1")) {
            setMessageListUser([...messageListUser, scelta_17])
            setMessageListNarrator([...messageListNarrator, finale_7])
        }
        else if (controllerInput == 16 && (inputValue == 1 || inputValue == scelta_18 || inputValue == "scelta 1")) {
            setMessageListUser([...messageListUser, scelta_18])
            setMessageListNarrator([...messageListNarrator, finale_8])
            setEndRole(true)
        }
    }


    const combinedMessages = [];

messageListUser.forEach((messageUser, index) => {
  combinedMessages.push(
    <UserMessage
      key={`user_${index}`}
      cAvatar={`${imageInitUrl}${crt.avatar_url}`}
      cName={crt.name}
      message={messageUser}
    />
  );
  if (messageListNarrator[index]) {
    combinedMessages.push(
      <OtherUserMessage
        key={`narrator_${index}`}
        message={messageListNarrator[index]}
      />
    );
  }
});

    return (
        <>
            <div className="relative w-full md:w-3/6 lg:w-4/6 mx-auto">
                <div className="text-center text-white medievalsharp-bold text-[35px] py-8 capitalize flex justify-between ">
                    <NavLink to="/"><button className="hover:scale-150 hover:duration-500"><img className="bg-scroll p-2 w-10 rounded-md" src={homeSVG} /></button></NavLink>
                    <p>{fetchedChat.title}</p>
                    <button className="hover:scale-150 hover:duration-500" onClick={setLogout}><img className="bg-scroll p-2 w-10 rounded-md" src={logoutSVG} /></button>
                </div>
                <div className="container-chat h-screen bg-scroll border-2 border-black rounded-md bg-opacity-70 overflow-y-scroll scrollbar scrollbar-scroll py-3 flex flex-col">
                    {showFirstMessage &&
                        <OtherUserMessage message={narratorIntro} ></OtherUserMessage>
                    }
                    {showFirstMessage &&
                        <OtherUserMessage message={bivio_1} ></OtherUserMessage>
                    }
                    
                    {
                        combinedMessages
                    }  
                </div>
                <form className="container-input flex justify-around mt-12 items-center h-10" onSubmit={handleOnSubmit}>
                    <img className="w-32 rounded-full" src={`${imageInitUrl}${crt.avatar_url}`} />
                    <input disabled={endRole} onChange={handleOnChange} className="ms-10 ps-3 h-10 w-full rounded-full overflow-y-scroll word-break outline-none hover:border focus:border" type="text" />
                    <button disabled={endRole} className="ms-5 w-12 h-12 p-1 rounded-full border bg-ancient hover:scale-[1.2] hover:duration-200" type="submit">
                        <img src={sendSVG} />
                    </button>
                </form>
            </div>
        </>

    )

}