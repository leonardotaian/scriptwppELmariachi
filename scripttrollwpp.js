async function enviarScript(scriptText){

    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    
    if(!textarea) throw new Error("Não há uma conversa aberta")
    
    for(const line of lines){
        console.log(line)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
        
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    return lines.length;
}

enviarScript(`
INTRODUCTION
INT .. TA.RASCO BAR ROOM· SANTA CECil..IA, tdEXICO- DUSK
P.O.V. of BUSCEMI bursting through the doorway into the bowels of the
stench filled TARASCO BAR Buscemi, an anglo character about 28 xears and
not in the best physical sh.ape, rambles towards the nearest barstool, �hich
seems a mile away in this forced perspective. He inspects the roomful of
roguish, disgusting looking BARFLIES, nursing bottles of cheap booze and
sour dreams of glory in this forgotten Mexican border town. His kind of
people.
He takes a seat, trying to keep his balance on his uneven barstool as the
SHORT BARTENDER finishes serving another customer. It's obvious from
the guarded whispers and ambience that not everyone is here for booze's
sake. Dealing's being done.
SHORT BARTENDER
What do you want?
BUSCE:Ml
booze ...
SHORT BARTENDER
All l've got is piss warm, but inexpensive.
BUSCEMI
That's my brand ...
SHORT BARTENDER
(looking him over)
Alright.
Short Bartender fetches the drink.
Buscemi soaks up the surroundings like a sponge: how many men are at the
window seats, w.ho' s guarding the baclc, who's flanking the god forsaken altar
of booze where the Short Bartender reigns kin_� supreme.
Short Bartender serves him a dirty glass full of something that more than fits
the desaiption of piss warm and inexpensive. Buscemi swigs it coolly,
savoring every rotten drop.
BUSCEMI
Well this is damn good.
Short Bartender doesn't have any reason to believe .him.
(CONTINUED)
, ____
\ -....._ ., ' . ... , '
"---·-.
BUSCEMI
I'd say this is the best booze I've ever had.
Short Bartender knows his booze is cheap, but these undeserved
compliments disturb him.
BUSCEMI
Actually ....
Short Bartender tries to ignore him by waiting on one of his regulars. '.
SHORT BARTENDER
You need anything over there?
Negative nods from the Rogues. Nobody's gonna help him get away ·from
this chatter box.
BUSCEMI
.. .rm just glad to be alive right now.
Short Bartender grabs his own half full brew and sits back against his counter.
He can wait this one out
BUSCEMI
I was up a few towns away, you know Saragosa?
Short Bartender waits a beat belore surrendering a nod.
BUSCEMI
I was visiting a bar there, not unlike this one, they
served beer, not quite as good as this, but close. ..
and I saw something you wouldn't believe ...
Short Bartender is not on the edge of his seat
BUSCEMI
I'm sitting there see ... small table, all by myself.
Now this bar ... it was full of real low lives, I
mean. .. I was wondering what I was doing in
mean
there. .. ya know? Not like this place here ... No, I
bad ... Like they were up to no good, ya
know what rm saying?
A few Rogues exchange drunken looks ...
Short Bartender's eyes stay fixed on Buscemi
BUSCEMI
But rm there cause rm there, same old story.
Anyway rm all by myself and I like it that way. Not
{MORE)
(CONTINUED)
\_,,.
\ '"'·�· ..
CONTINUED:
.
BUSCEMI (cont'_d)
saying a word. Meanwhile things are going on.
under the table kind of �gs. Not too obvious ...
_ (leaning in towards BARTENDER)
... but not too secret neither.
A few Rogues seem to have nothing better to do than listen to Buscemi
because that's just what they're doing. · ·
- - -
BUSCEMl
(hammering the-point home)
- I'm sitting there_.
Short Bartender.'s not even wondering when. the story's going to start, he's
pouring himself another warm one.
BUSCEMI
(beating a dead horse)
So ... rm sitting there ...
FLASHBACK
CT.ITTO:
POV of unseen STRANGER.. opening the bar door, just as we saw Buscemi
do in the opening shot. We hear Buscemi's voice over this dreamy, slow
motion flashback.
ijUSCEMI
(Voice Over)
... And in wallcs the biggest Mexican I've ever seen.
Just walks in lilce he owns the place. Big as shit. No
one knew quite what to make of him, or quite
what to think. But there he was._ and in he
walked...
Now, understand. Buscemi is whiter than the powder they're trading 'neath
the tables. His "biggest Mexican" observation brings slow head turns from the
Rogues that heard him. They're all listening now ... and Short Bartender
even stopped his drinking. Mid sip.
BUSCEMI
Dark, too.
Buscemi is surveying the nearbys. He· has their attention. This is more like it.
BUSCEMI
I don't mean lilce ... dark skinned. No, this was
different. It was as if he was always 
CON-rINUEO:
FLASHBACK
We see Stranger walking tall, slow, and faceless towards the bar. The light
from the bar hits him in such a way that you can only see details on his
clothes. But his face is in a shadow, and his head is str�ngely baclclit. �e
passes groups of seated, rough looking, unfriendly folk.
BUSCEMI
(voice over)
I mean, every step he took towards the light, just a.s
you thought his face was going to be revealed ...
,.
Stranger nears a light, a bit of his face starting to reveal itself beginning at the
chin and illuminating up to his nose ...
BUSCE:MI
.. .It wasn't.
We see the shadow CRAWL bade down his face, obscuring his identity from
everyone.
BUSCEMI
(slowly, otherworldly)
As if the lights ... dimmed. .. just for him.
The mood is th.idc in the bar, now. The whole room is silent, listening. You
can almost hear a low rumble permeating the room.
The mood is suddenly broken in half by a Rogue's RUDE LAUGH.
Short Bartender joins in. The Rogues go about their business. No amount of
booze is going to change there mind about Buscemi. The verdict is out. He's
full of shit and there's no point in listening to anymore.
BUSCEMI
( continues unaffected)
$o this guy he takes a seat at the bar, asks the
bartender for a soda pop, sits back. .. says nothing.
SHORT BARTENDER
A soda pop?
Buscemi nods.
BUSCEMI
Now, I wasn't interested in his drink, I was more
interested in what he was carrying when he walked
in. some sort of suitcase, kind of heavy. He just sat
that thing down on the stool 'side him as if it were
his girl.
(CONTINUED)
i
�-
CONI'Thl1JED:
FUt..SHBACK
In flashback we see Buscemi peering over from his seat.
Buscemi's POV of a guitar case sitting next to the Stranger, whose face is in
the shadows as he's served his soda pop.
BUSCE.Ml
Then, all of a sudden. .. the bastard spoke. Started
talking low and whispery with the bartender, and
you know he wasn't tallc.ing soccer. He was talking
business, 'cause whatever he said it was upsetting
the bartender. Especially when he mentioned ...
Short Bartender gave up on this character a long time ago. He's finished his
beer and is wiping the mug clean with a dirty rag. He sets the bottle on the
counter beside him.
BUSCEMI
... he said something like ... Bitch. .. or_. Bucho.
That's what it was. Bucho.
Short Bartender stops what he's doing. Buscemi gets a few slow head turns
from the nearby Rogues who heard him. That low rumble is back, and pins
can be heard dropping.
BUSCEMI
(sees he hit a cord)
Well whatever he said. .. It pissed off the bartender
plenty. And some of those unsavory characters I
told yo1,1 about? Not class acts like these boys here,
but real scum? They got plenty pissed too. So they
get up .. -
(Buscemi stands for emphasis )
... a.nd they start pulling guns and knives and what
have you. .. starting some shit.
Buscemi has his audience back. He acts the scene out now, and we intercut
between the flashback and Buscemi's live show.
BUSCEMI
Now this Stranger ... he BOLTS out of his barstool
like you wouldn't believe, grabs his case like it was
a girl he's been assigned to protect and he DIVES
into the middle of the room with it! Just dives
n 'ght' in.I
Rogues exchange looks with Short Bartender at the sheer non.sense of it all,
but what the hell else they got to listen too.
(CONTINUED)
--
CO�!IN'u"'ED:
BUSCEMl
Now I don't .know what he does on that floor-as
he's somersaulting but he's up in two shakes, the
suitase is wide open and he's pulled god knows
what out of it but whatever it is it's the biggest
hand cannon I've ever seen. ..
FLASHBACK
Stran ger rises from the ground surrounded. by angry scum..nd he levels
what appears to be the BIGGEST FIREARM you've ever seen, we can't really
tell because it spits blinding FIRE so fast you can't get a good look at it, nor
the damage it does as BODIES FLY about the room, mostly in pieces, crashing
into this and that. KNIVES FLASH and get BURIED in the wrong chests,
BULLETS FLY and take out the wrong men. The place is a mad house and
the berserker in the middle i.s the faceless stranger doing WlSpeakably
impressive acts of violence, too fast for the human eye to register, but
enough to make you wonder if he's the devil twnseJJ ... and where'd he learn
all those tricks?
His SPURRED BOOTS swoop around the room like a high powered ceiling
fan, the SOUND of flesh being SLICED by the silver spur tips flashing like
crimson lightening.
SHORT BARTENDER
(doubting heavily)
Yo.u're telling me you stood there and watched all
this go on?
All Rogues turn to Short Bartender.
SHORT BARTENDER
You didn't even run for cover, or join in?
Buscemi is staring wide-eyed at Short Bartender like he's just not getting it.
BUSCEMI
What's joining in? I was frozen stiff! All I could do
was watch this.�. thing tear the p�ce apart! I mean
it was amazing! Cutthroat scum bags were coming
out of the woodwork, and dying much deserved
deaths ...
We see a few more inaeclible sprinkles of the show: BODIES HURLED out of
windows, corpses lil1i"Il'1G nm ROOF and striking the ground hard, bags of
toot and money spilling about ...
(CONTINUED)
"---·'
\ ...._,·:--· ,··
l 1�,
CONT.Il"-l"UED:
BUSCEMI
I mean, don't get me wrong, this was no class act
group of guys like you got in here ... _
.
Buscemi glances over his scumbag constihlents .. .
BUSCEMI
... not at all, I mean those guys were world class
turds, and I'm sorry but they got what they
deserved. It was judgement night in that place.
And the whole time ..• Th.e whole time this was
going on ...
FLASHBACl<
Death-like slow motion of the Stranger in action.
BUSCEMI
(voice over)
.. .I never saw the guy's face.
The rumble is. definitely happening, and the Rogues are as quiet as mutes,
and warm beer is the furthest thing from Short Bartender's mind.
BUSCEMI
raining
. . .Not once. I mean who could? 'Ole place was
blood.
CUI'TO:
Dark, hard to see Stylized Shot of the Stranger standing alone in a HE.AP OF
BODIES, blood DRIPPING from the ceiling in a thick sprinkle. The Stranger
slowly lowers himseli to the ground and grabs hold of a dying turd.
BUSCEMI
(voice over)
So he grabs one of these guys, the only one still
breathing. And starts getting information from
him. I heard 'em talking, so I started wallcing over
... real slow, just for a little peak. •. '
POV of Buscemi moving tow a.rds the Stranger, whose back is to Buscemi.
BUSCEMI
(v.o.)
... and I just knew ... by the whispering and all, I just
lcnew •. �this guy was giving up all the goods,
spilling his guts, confessing the world. He must
have told that stranger everything ...
(rogues exchange looks)
(MORE)
(CONTINUED)
CONTINUED:
BUSCEMI (cont'd)
... cause I was moving real slow, took me almost
three whole minutes to get from point A to B, and
when I got there that guy was still spilling it ...
The story comes to a temporary halt.
Buscemi's eyes are fixed on his empty mug. Short Bartender notices this and
immediately grabs the mug. and refills it with some brew, then slowly pushes
it across the counter to Buscemi. Compliments of the house. Buscemi brings
the soupy brew to his lips and freezes.
The room's eyes are on him. Buscemi studies the mug. Practically writes a
book about it.
BUSCE}.,ll
(finally)
Can I have a cleaner mug? Titis one's dirty.
Rogues exchange glances with Short Bartender, who is obviously insulted. I
mean the balls on this guy, asking for a clean glass to Short Bartender's face.
SHORT BARTENDER
Man, fuck you, that's the cleanest one I got.
Buscemi's knows he's lying. Bartender grabs the beer and dumps it into
another glass. Buscemi waits patiently, trying not to notice the cold hard
stares of his waiting audience. Bartender slams the new mug down in front
of Buscemi.
BUSCEMI
(drinks)
So anyway ... I get right near this guy, don't ask me
why rm doing this. I just wanted to ...
We see Buscemi cautiously walking up to the Stranger, who is aouclled on
· the floor with his back to Buscemi.
BUSCEMI
... shake this guy's hand, I mean one gunfight later
and the planet has SO l� world class turds to
worry about. I me� hallelujah.
Buscemi is right next to Stranger now, looking not unlike someone trying to
muster up courage to ask for an autograph.
BUSCEMI
And then, without warning, without any hint or
preview this guy whips around .... and sees me!
(C01'ITINUEO)
\ ,- ' ...... �., . �
COl\ITI:NUED:
The suspense is killing the Rogues.
BUSCEMI
And I... I see him!
SHORT BARTE1'1DER
You saw his face?
BUSCEMI
His face ... no.
{leans forward)
His eyes.
MARIACHI,
We see Buscemi's POV of the mostly visible face of the Stranger, the
who is looking deep into Buscemi's eyes, our eyes.
Mariachi releases the Bad Guy's throat, and rises slowly from the corpse
strewn floor. He has his .45 fixed on Buccemi, and stands emotionless.
SHORT BARTEN'DER
(voice over}
And.he didn't do a thing to ya?
What
BUSCEMI
was there to do? I suggested that this was
none of my business.
Buscemi shrugs his shoulders helplessly tD Mariachi, as if tD say his presence
was an accident.
BUSCEMI
(voice over)
... and he must have agreed, because he turned his
attention back to the guy on the floor, who right at
this time ...
We see the Bad Guy Mariachi extracted information from, reaching for a
nearby gun.
BUSCEMI
(voice over)
... was reaching.
Low•angle
turning
spooky shot of the Mariachi TOWERING over the camera, a slow
FAN over his head like some kind of HALO, as he aims his .45 into
the camera and FIRES.
(CONTINUED)
..
l"--, .. :
...... ____ .. -. ..
\,_., .
....
CONTIN1JED:
BUSCEMI
(voice over)
.. :..And the Stranger shot h1m.
. . -
All eyes are fixed on Buscemi, who searches deep into his mug for an'y
further recollections.
SHORT BARTENDER
And the bartender?
Buscemi looks up at Short Bartender.
BUSCEMI
What?
SHORT BARTENDER
The bartender. Was he killed?
The silence is broken by Laughing Rogue's short bunt of a laugh. But Short
Bartender isn't laughing.
BUSCEMI
(slowly, recollecting)
The Stranger paid for his drink and left. ..
Buscemi takes a gulp of brew . FLASHBACK
We see Stranger drop some coins in front of the nervous bartender, before
stepping over the dead bodies to get to the door.
BAR
Short Bartender looks slightly c:oclcy.
SHORT BARTENDER
( to one of the Rogues)
The bartender never gets killed.
The Rogue smiles.
Buscemi swallows his brew, then raises his· finger ...
BUSCEMI
Btn' ...
Short Bartender's smile fades ...
(CONTINUED)
i.. • ...___...
�---!•
'. ,•
\ .. � ..........
•, .
COJ\ITIN1.rED:
BUSCEMI
as the Stranger neared the door ... FLASHBACK
Mariachi strides to the door. The bartender raises a shotgun and leve1's it for
aim. Mariachi SPINS around and EMPTIES his .45 into the bartender) each
slug LIFTING the beermeister a few feet higher, until he's completely
AIRBORNE, crashing into his shelves of souvenir bottles. Mariac:hi sideholsters the gun, and disappears out the door.
BAR
Buscemi shakes his head in sorrowful remembrance.
BUSCEMI
O� yea, man. The bartender got it worse than
anyone.
He's finished with his beer, and slides the mug away. Another beer, in a
cleaner mug at that, is slowly pushed in front of him.
SHORT BARTENDER
This one's on the house, if you can r
emember his
face.
BUSCEMI
Thanks,
(nodding)
but no thanks. rm clearing on out of here
boys...
Buscemi lets out a silent belch.
BUSCEMI
... because I think. ..
He pushes himself away from the bar.
BUSCEMI
.. .he's headed this way ...
Short Bartender stares helplessly after Buscemi, who casually waltzes to the
door, the camera following his journey.
Thanks
BUSCEMI
boys, you all take· care.
He spins out the door. The camera follows the gazes of the dumbstruck and
sile�tly brooding Rogues up to Short Bartender. He doesn't look happy at all
He looks worried.
CUT TO:·
(__.,
'·'--·
i
�-
CBEPITS SEQUENCE
BLACK SCREEN.
A GUITAR is strapped on. Cose-up of TUNING I<N'OBS being tightened,
and �GERS loosening up. A HAND emerges from the darkness,
stnu:runing down over the TAUT STRINGS ... and the playing begins.
The MARIACHI is clean cut, dressed to kill, and playing in his element. He's
in a CLUB of some sort, a classy joint, and h'e plays fast and furious as the
CREDITS roll.
The SONG he plays is elaborate and features his virtuoso guitar work and
baritone voice. He ha.s two other musicians, CAMP A and QUINO standing
behind him. They're all playing guitars.
On Cam.pa's shoulder is a SMALL MONKEY, dressed in his own little black
and white mariachi OUTFIT with a sombrero riding on his back. He
STRUMS his own LI'ITLE GUITAR and then prances around collecting tips.
The song they are playing is catchy and energetic, and one would get the idea
that if it just got outside these walls onto a radio somewhere it would be a big
hit. The girls SCREAM a.s his fingers deftly force the guitar strings to sing
their beautiful melodies.
A FIGHI' has broken out at the other end of the bar, a fight over a girl it
seems, and someone has pulled a KNIFE. Mariachi sees this, and suddenly
LEAPS atop the bar counter. As he plays the intricate patterns that are
required at this point of the song, he walks aaoss the bar, kiclcing a few
glasses off now and again, making his way to the fight.
The KNIFE MAN has his back to Mariachi. Mariachi kneels down on the bar
with his guitar neck just BEHIND the Knife Man's head. Mariachi completes
a stunning and complex section of the song, accenting it by WHA.CI<ING the
back of Knife Man's head. The nearby men and women pull the knife away,
beat Knife Man to a pulp, then carry him out the bar.
The crowd CHEERS for the Mariachi as he walks back across the bar to where
he came from, continuing the song, wooing the girls, and keeping his balance
without missing a note. He's incredible.
Finally, after w�g over several hundred female admirers, all to the
agitation of their dates, he FINISHES the song in a grand display.
After such an outstanding performance, truly he deserves a standing ovation
to end all ovatiON. He holds his guitar up high above his head after striking
the final chord, and li5teI15 intently for the uproarious applauae that should
follow. He hears nothing ...
(CONTINUED)
-
"--<-
CONTINUED:
The Mariachi seems dumbfounded. No one moves. The place is completely
dead. All eyes STARE at him. He stands there, like an -idiof, waiting for the
belated applause. It doesn't come.
The c:REDITS continue over this.
Mariachi finally hears a sound: the lonely sound of-a single perspn
CLAPPING. The clap is slow and rhythmic, beginning faintly in the back of
the room. The clap grows LOUDER as the person moves towards Mariachi,
who strains to see that far into the darkness. __
Vvho could it be? The Mariachi doesn't wait to find out, he nods his head,
waves his hand, and says "Thank You" to his unseen friend.
The mystery person, a man in white, his rhythmic clapping now at full
audibility, STEPS OUT of the darkness. Mariachi realizes the man isn't
applauding him at all ... but rather CLAPPING A PACK OF MARLBOROS
AG.A.INST HIS HAND, trying to get a cigarette oul He frees one, puts it in his
mouth, and continues walking towards Mariachi. The man is MOCO.
Moco passes his henchman. BIGOTON, who is staring at Mariachi. Moco
STRIKES a match aaoss Bigoton's chin. and lights up his cigarette.
Mariachi lowers his a.rm... The CREDrIS are almost finished.
Someone places their HA1'ID on Mariachi's bade.. Startled, he spins to see
who it is.
DOMINO meets his gaze. He looks surprised to see her. She moves towards
him for a kiss as the last of the CREDrIS roll. As, he nears her lips, a loud
KN'OCI<ING sound is heard offscreen. Mariachi hears it, and shifts his eyes to
the directfon of the sound. Domino is still waiting for her kiss, eyes closed.
He turns his attention bade to Domino. Their lips are nearly touching now. A
kiss long overdue, between lovers of long ago.
The KNOCKING sound again. He finally turns around to see where it's
coming from and we ...
CUTTO:
INT. MARIACHI IN HOTEL BED· DAY
Mariachi wakes with a start, turning his head towards the door in a perfect MATCH cur with the previous scene.
This is definitely not the Mariachi we saw in the CREDITS SEQUENCE..
This Mariachi looks lik'e he's seen a few years of ha.Id mileage. He's not
completely awake, yet we can see he's changed. .. music is no longer a
priority or a source of happiness in his life. He's lost it
(CONTINUED)
\_ .. -·
\, ____ !
CONTINUED:
The
dirty
darkness of the room adds to the mood, a few light shafts piercing the
hotel room around him illuminates his iace.
The 1'NOCKING SOUND again.
He throws a g�ce to the chair where his DOG, a Pit Bull, sleeps SOW\�y,
peacefully, unbothered by the noise.
_ ..
Mariachi crawls out of bed. He STUMBLES to the door, leaning against it. He
takes a moment to regain his senses, catch his breath., and try to remember if
he was expecting_anyone today. He wasn
't.
His .45 rises from out of frame, aimed at the door.
MARIACHI
Who is it.
(softly)
No answer. The wind. Finally ...
IXJOR
. (o.s.)
Your pimp.
Mariachi opens the door a aack and shoves the gun outside.
Ouchf
IXJOR
{o.s.)
Mariachi guides the person into the room, the gun ban-el planted firmly on
the man's tempie. It's BUSCEMI.
BUSCEMI
Don't you think you're being a little cautious?
Mariachi smiles and puts the gun W\der his pillow as he goes back to bed.
BUSCEMI
You know, one of these days, you're gonna lay
down too hard on that thing and blow your brains
out!
MARIAQD
{motioning to his dog)
Shhh ....
Buscemi darts his ·head to the easy chair. The pit•bull is sleeping soundly.
(CONTINUED)
\ . ._....
.................. ·:
CONTINUED:
BUSCEMI
Sorry ... didn't even see the thing.
MARIACHI
(head on pillow)
Tell me the news.
Buscemi waits a moment before saying anything. Should he tell the t:tuth?
I
He spills it.
BUSCE:MI
He's there.
Mariachi lifts his head off the pillow a bit. He didn't expect to hear this.
BtJSCEMl
I mentioned his name ... and they freaked.
Mariachi sits up. He's letting it sink in. Things take a bit longer to register
this early in the afternoon.
MARIACHI
They reacted to Bue.ho's name?
BUSCE:MI
(nods)
I tell you. .. he's there. One second they weren't
listening to a word I was saying, soon as I mention
him, boom. They couldn't hear enough.
And suddenly they were interested in who you
were. So I laid the story down nice and thick.
MARIACHI
How thick?
BUSCE:MI
(confessing)
Pretty thick. Told them you were the biggest
Mexican rd ever seen.
Mariachi shakes his head in disbelief.
BUSCEMI
( confessing)
I was having trouble getting their attention. Okay I
blew it a little out of proportion, but they bought it
They're shitting bricks, I promise you.
(CONTINUED)
I
'
""-••.·:,.
CONTINUED:
MARIACHI
(thinking)
I guess I go in.
BUSCEMI
Yea. Well, personally ... I think you should
reconsider. There were some very dangerous
people in there, and those were just Buch.o's
watchdogs. Believe me when I say, you're
· committing suicide on this one.
(shrugs)
Just let it go. nus whole thing is just eating you up,
anyway.
MARIACHI
(thinking)
I dreamt about her again.,
Buscemi shrugs. He tried. He pulls out a paper wrapped wad of cash and
tosses it to Mariachi.
BUSCEMI
They'll give you the rest after he's dead.
MARIACHI
(looking it over)
That's it?
BUSCEMI.
The rest when he's dead, that's what they said.
MARIACHI
Why so little up front.
BUSCEMI
Because you're not gonna make it, that's why.
That's what rm trying to tell you. They know
you're in over your head on this, so why throw
away a lot of front money? I say when your
employer doesn't even think you'll make it you
should back out.
MARIACHI
It's something I was going to do anyway.
BUSCEMI
You're not going to make it. •.
Mariachi is studying his SCARRED HAND, a deep nast
scar aaoss it.
Healed, but not forgotten.
(CONTINUED)
I
\ .... ,_.�-.·. ' '
CONTil•Jt}ED:
MARIACHI
1 never expected to ...
BUSCEMI
Then what's the point?
Buscemi s1:ru�s.
MARIACHI
I swore on her grave I'd never·stop until it was
·over.
BUSCEMI
. You go through with this, and it'll be over, believe
me ... it will be over real quick.
MARIACHI
(shrugs)
One way or another.
BUSCEMI
(slightly fed up)
Well, that's it for me, rm out. You don't expect to
live much longer? Fine. I do. Seriously, if you run
into trouble on this and you need help? DON'T
Quino,
CALL ME, okay? Don't call me. Call Campa and
those guys are aa:zy, anyway.
. . '
Buscemi lets himself out the door. He points his finger and says one last
thing before leaving.
BUSCEMI
You're in over your head, amigo.
Buscemi Sl.A1t.if5 the door. Mariachi hangs on that last thought.
His dog wakes up. Mariachi watches him yawn.
INT. TARASCO BAR· DAY
CUI'TO:
This is the same bar from the opening scene, with the same Short Bartender,
the same Rogues, in the same seats. They're not loyal, regular customers ...
They work here. Short Bartender is on the phone.
SHORT BARTENDER
Bucho. We just talked to the Oro Verde Bar in
Saragosa. There was no shoot-out. Everything's
normal over there. 'They did say there was a guy in
{MORE)
(CONTINUED)
'••·'-"'•'I"'
CONTI1\l"L"ED:
SHORT BARTENDER (cont'd)
there telling the same bullshit story we heard last
night. So, I guess we can just forget about it.
EXT. BUCHO'S RANCH - DAY
We see a man on a phone. Casually dressed, sitting outside, eating his lunch.
We. see only his backside. The camera is behind him. All we see is the,back of
his head until the end of the scene. This is BUCHO.
BUCHO
You're not going to forget about anything, you're
going to keep your eyes open. We can't afford
having anyone snooping around. We're being
watched enough as it is.
SHORT BARTENDER
Of course we'll keep an eye out rm just saying we
shouldn't stop operating ju.st because ...
BUOiO
Damn right you're not going to stop operating. We
keep moving no matter what. Okay. Let me know
if you hear anything.
Bucho hangs up the phone. He turns to RIGHT HAND, his number one
henchman. Second in command of Bucho's world. We see Right Hand's
face, but not Bucho. His back is to U.S. .
BUCHO
I want a close lookout on all operatioN. If that
means double and triple checld.ng even our regular
customers, we do that
RIGHT HAND
(casual confidence)
ru take care of it.
BUCHO
If somebody comes walking in that shouldn't, I
want it handled without the place turning into a
shooting gallery.
RIGHT HAND
rll handle it ...
BUCHO
I'm trying to show these Colombian., that I can
handle the extra volume, so we're being watched
enough as it is. We haven't had any serious
think
trouble from the authorities· in a long time. So
about that ... before you start shooting people.
(CONTINUED)
\ ... ..._ .. -·
\___ • ' I
\. -.......__-.-. .
CO�'TINUED:
RIGHT HAND
You got it.
Right Hand is walking off to get started on his new orders.
BUCHO
You'd rather just shoot someone right?
Right Hand throws Bucho a sly smile. The call'.'era dollies around. We can
see Bucho's face now, and he loo.ks just llke·Andy Garcia.
BUCHO
(quietly)
Wouldn't we all.
EXT. MARIACHI ON TiiE HIGHWAY· DAY
CUT TO:
Mariachi is walking down the road with his guitar in his hand, jacket over
his shoulder, and Pit Bull at his side. They look great together.
MARIACHI
(voice over)
It's not ea$y being a vigilante. There's no money in
it. Ri!ally keeps you broke. Being a hit man pays the
bills. But you should never mix the two together.
Never. And that's where I went wrong.
We've been hearing a truck approaching. Mariachi puts down his case and
holds out his thumb.
NA VAJA'S TRUCK is barreling at Mariachi.
MARIACHI
{ voice over)
Of course if it had been up to me, rd have stuck to
playing mu.sic for a living.
POV of the truck as it passes Mariachi.
MARIACHI
( voice over)
But it wasn't up to me.
Close-up of NAV AJ.AS, in the passenger seat, eyeing Mariachi through his
side view mirror. He's Colombian.
Close-up of Mariachi's SPURRED BOOTS. A HUGE SCORPION walks up to
his boot, begins to climb over it.
(CONTINUED)
"----··
--
'-·--�· . '
CONTINUED:
The Pit bull watches as the scorpion meanders along the Mariachi's boot. He
does nothing.
.
• - -
Fortunately, the .scorpion changes it's mind. It climbs bade: down, spinning
th� spur as it reaches the ground and continues down � road.
Mariachi pi�-up his guitar c:ase and continues his walk-to town:
MILES,
Pit-Bull finishes relieving himself against the sign, SANTA CECILIA - 10
then trots over to
MARIACHI
join the Mariachi: __
Had I known what I know now, rd have never
gotten out of bed this afternoon.
EXT. IN 1HE TOWN • DAY
CUT TO:
Wide Establishing Shot of the city of Santa Cecilia. The STREETS are busy,
but not packed. Santa Cecilia is small and relatively quiet The tourism isn't
as heavy as in some of the other border towns.
EXT. ON A STREET NEAR DOWNTOWN· DAY
Navajas steps out of the tru� which drives away as he walks across street.
He stops at a PAY PHONE, pulls several coiN from his pocket and drops
them in. · -
· -
The camera decides to follow an OLD MAN who pas.ses by Navajas.
The Old Man crosses the street. When he reaches the sidewalk, he passes a
TOURIST buying fruit.
The camera stays on the fruit buying Tourist who then walks down the
sidewalk and is accosted by a VENDOR, a nice old fellow selling necklaces,
curios, jewelry, etc.
The Tourist tries to get away from the Vendor, when the camera decides to
follow a BOY with a GUITAR strapped around his bac.k, who skips between
the Towist and Vendor. We follow the Boy as he wan.den towards the
Tarasco Bar, pushing his way into the door.
Someone inside the bar grabs him and shoves him bac.k outside. Smiling, he
goes ANYONE
off to
UNDER
find new mischief, passing the sign: NO ENTRANCE BY
21. Members and Non-Members Only.
The camera continues its dolly into the bar.
IN"T. TARASCO BAR· DAY
Short Bartender is doing a little cleaning. Not much. Just enough so his area
isn't sticky. -
.
A slightly tipsy, all American COLLEGE GIRL, gets up from one of the 'tables
with her three friends. She walks up to the bar. Her friends huddle around
her. Tourists.
GIRL
_ (to bartender)
Excuse me. But I used to work in a bar. So I know
what it's like to wait on people and to bring th.em
the drinks they ordered and all that. And I just
wanted to bring to your attention that the service
here needs immediate improvement.
Short Bartender is doing a good job of holding in his laughter. In fact he's
doing a great job of looking almost ashamed.
SHORT BARTENDER
What do you mean?
GIRL
What do I mean?
The Rogues are getting some good smirks out of this. They're watching
closely for Short Bartender's reaction to this nonsense.
GIRL
(looking about)
Our waiter ... where is he? Don't tell me he's still in
the bathroom.
Short Bartender glances at the bathroom door. He settles his eyes bad:: on the
girl.
Two men walk in almost unnoticed and sit at the bar. The main one is PICK•
UP GUY. The man next to him is BUDDY. Bartender's eyes stay on the girl.
GIRL
Our waiter took our orders. Toole a long time
getting them. And then, he never came back to see
if we wanted anything else. We did. Nor did he
give us a bill. We've been waiting for a bill so we
can get the hell out of here.
One of the Rogues pulls up a GUN from under the table and pantomimes
shooting the girl for the bartender.
(CONTINUED)
(,
--_,
'
'
\ ___ ..
CONTINUED:
Bartender quicl<ly waves the suggestion away.
GIRL
We· should have just ... taken off, okay. But we
didn't.
She puts down several crisp bills.
GIRL
'That should be sufficient. Needless to say there
won't be much of a tip.
SHORT BARTENDER
If you're not a little nicer to me, I'm· not gonna ask
you out.
She turns and leads her group of silent followers to the door. Just before she
disappears forever, she turns back and says something under her breath, just
loud enough so it can be heard:
GIRL
... and your beer tastes like piss.
SHORT BARTENDER
(with a smile)
We know.
The room laughs. Short Bartender nods his head in disgust over the abuse he
took, and pantomimes a strangle hold. They all continue laughing.
SHORT BARTENDER
(laughing)
Bad service, �d beer. Don't people know not to
come here?
PICI<•UP GUY
Speaking of piss. ..
PICK-UP GUY and BUDDY are laughing too.
PlCK•UPGUY
Give me a mug full of your finest.
They both hand a BUSINESS CARD to Short Bartender who looks them over
before giving the cards to an ASSISTANT. The Assistant hurries over to the
pru>.ne and punches in some numbers.
The Assistant is speaking into the phone quietly, reading the information off
of the card. -Buddy watches the assistant intently.
(CONTINUED)
i
'-,--·'
'--., .•. • �. . . ,.
cor--.71NUED:
SHORT BARTENDER
(serving them their bee.rs)
This should only take a minute.
EXT. MARIACHI ENTERS TOWN - DAY
CUT TO:
A HORSE ORA \\TN CARRIAGE is talcmg it's time as it trots down the ,
middle of the street, while a huge Wl'm'E MACK TRUCK blasts it's horn
from right behind him. Just then, from saeen left... ·
.. .Mariachi enters the screen with his Pit Bull at his ankles. They aoss in
front of this ... The dog immediately spots a GROUP OF CHILDREN hanging
. out on the comer with BUCKE1S of WATER and WET RAGS. They're
alternately running out into the street during red lights to wash car windows
for a quarter. ·
Mariachi removes the dog's CHOKE COLLAR and TAG, and places them in
his �reast poclcet
The Pit Bull takes the cue, and nins aa-oss the street to join the Children,
quenching his thirst in their buc:ket of water. The Children take to him right
away, petting him and keeping him in good spirits. He's set.
Mariachi scopes the town. He sees the pleasant VENDOR with the curioso
tray walking around the streets, seemingly content and glad tD be alive. He
acts like he's selling the cure to cancer, rather than the fake gold chains, bolo
ties, and c:heap earrings that adom his �y.
Mariachi avoids him, and sits on the curb aaoss the street from the
TARASCO BAR. His guitar case sits beside him. He's checking the name of
the bar with the one he has saibbled on a piece of paper in his wallet. He
discards the paper, then reaches deeper into his wallet for a small
PHOTOGRAPH.
Close-up of the picture of OOMll'lO. He studies the photograph. He tries to
keep his mission clear in his head: what he's doing ... and why. Confused,
he's about to put the picture away when:
Close-up of a SMALL HAND reaching for his guitar case. Mariachi sp�
around, and SEIZES the person's wrist. Mariachi sees that it is a boy, NINO,
about nine years old, sitting on the curb next to the case.
NINO
I wanted to see the gwtar.
(CONTINUED)
·1 . -�··
[ ,' I
"-··--•1'";:, ;
I '-.....,. .. ·
co�·nNtJED:
MARIACHI
(releasing the Boy's wrist)
O_p you play?
NINO
Yes ...
Mariachi notices the Boy has a guitar strapped around his back. -
NINO
(bringing out his guitar)
Do you?
Mariachi sits on· that ques�on a bit.
� ...
He sees a man wearing a STRAW HAT, an ugly patterned burlap sack of a
shirt, driving a beat up GREEN CAR behind the bar. Straw Hat exits the car,.
and takes a BOX of what seems to be booze through a heavy BACK DOOR.
MARIAOD
A little bit.
NINO
Play something.
MARIACHI
Not right now.
NINO
This is my father's, but he doesn't play it anymore.
No?
MARIACHI
(turns back to the Boy)
NINO
There's not much work for a mariachi these days.
Now he just watches TV.
MARIACHI
Sorry to
(attention back to bar)
hear it.
NINO
(shrugs)
He was never that good, anyway .•.
Mariachi smiles. The Boy is a pint-sized version of Mariachi.
(CONTINUED)
. \..__ .
\ .
'·-f', :. ,,
CONTINUED:
NINO
Not as good as rm going to be. Listen to this .
The Boy plucks·out a familiar melody. The Mariachi keeps an eye on the bar,
but listens to the Boy with great patience. Finally... .
MARIAOD
Loosen your fingers a bit.
The Boy doesn't understand.
MARIACHI
Like this ...
Mariachi wiggles his fingers and takes over the strumming while the Boy
manages the fret. Mariachi's fingers DART over the strings in BLINDING
SPEED and accuracy. The Boy is dumbstruck by the brief yet impressive
display of true virtuosity.
MARIACHI
You know what I mean? Loosen them up.
NINO
How'd you do that?
He
DOOR
turns his attention baclc towards the bar. STRAW HAT exits the BACK
empty handed and enters the FRONT DOOR of the bar.
MARIACHI
(smiles at Boy)
If you want to get faster ... here's the seaet. Practice
this:
Mariachi puts the Boy's fingers on the strings and shows him how to do a
1WO FThlGER PICK. He then demonstrates the fret positioning. It's a simple
concept.
EXT. GIRL ACROSS nIE STREET· DAY
A young woman of about 26 years of age is walking down the walk on the
other side of the street. She is watching the mariachi teach a boy guitar. She
continues on her way.
EXT. MARIACHI ON SIDE'WALK • DAY
Mariachi is explaining the lesson. ..
MARIACHI
Practice that everyday, all day. Next time ru show
you how to play a tune, using what you've learned.
So practice.
(CO�D)
·
,--, . . . ··� ,·,' ·
COl-i-n-..uEO:
The Boy gets up and walks away.
MARIACffi
Practice.
The Boy PRACTICES as he walks.
Mariachi turns his attention back to the bar. Straw Hat EXITS and drives
away in the beat up old car.
The plea.sant expression Mariachi had on his face when the Boy was here is
gone now. He's deadly serious. Bac:k to the missi�n at hand.
CUI'TO:
INT. TARASCO BAR - DAY
Bac:k at the bar, Pic:k-Up Guy is in the middle of a joke, while Short Bartender
waits for verification.
PICK-UP GUY
This guy walks into a bar. Goes up to the bartender
and says, , bet you S300 that I can piss in that mug,
from over here ... and not spill a drop." The
bartender looks over at the mug, which is a good 10
feet away and says, -You're betting me that you can
piss in that mug ... way over there and not spill one
drop?" Customer says, "That's right." The
bartender, now he's t:hinldng ... this is a good deal.
He asks the c:ustomer, "And if you spill even one
drop you'll pay me three hundred dollars?"
Customer says,"That's right." So the bartender says,
"Okay. You're on."
The room is already lau�. An easy aowd. They must have been drinking
beer all morning.
PICK-UP GUY
So the guy pulls out his thing; righ� ... and starts
pissing all over the room, all over the bar... misses
the mug, doesn't even come close ... but he pisses
all over the bar, and even pisses on the bartender ...
Not one drop goes in the mug! So the bartender,
he's laughing. He's laughing the whole time our
guy's pissing all over the bar and �ys,. "Man. .. you
didn't even come close. You owe me $300 bucks
you fucking idiot." Our guy shakes his head
slowly ... smiles. -Yea, you're right. I owe you some
money ... Hold on just a second." He walks over to
(MORE)
(CONTINUED)
\"-' _ __.
-
CONTINUED:
-: PICl<-UP G_VY' (cont'd)
some other characters playing pool and a few
minutes later he comes back to the bartender and
gladly gives the bartender his $300 buclcs. The
bartender asks our guy what he's so happy aboat.
Our guy says/Well, see those characters playing �l over there? Well I bet each one of.them 5500
bucks that I could piss all over your bar and-piss all._
over you and you wouldn't even be mad ... you'd
be happy."
--
Uproarious laughter. Pick-Up Guy fee.ls good.
The phone rings. The laughter dies a bit. Short Bartend.er grabs the phone.
His eyes are fixed on Pick•Up Guy as he hears the news through the phone.
Silence.
Short Bartender hangs up the phone and wallcs on over to Pick-Up Guy. He
puts a hand under the counter.
SHORT BARTENDER
The verdict is in. ..
PICI<-UPGUY
What's
(shrugs)
the news, ami"go?
Pick-up Guy �es a swig of his beer.
Bartender swings around a .45 with a SD..ENCER and blows away BUDDY.
Note: The composition is a two shot of Pick-up Guy and Buddy, the bullet
crosses in front of Pick-Up Guy and knocks Buddy off his chair.
Pick-Up Guy freezes. Still has a mouthful of beer in his puffed cheeks.
SHORT BARTENDER
(to Pick-Up Guy)
Don't worryl you checked out just fine.
Short Bartender lowers the gun. Everyone gets a good laugh. Even Pick-Up
Guy gets a laugh, and manages to swallow his brew. He seems to be adjusting
his shorts.
PIO::-UPGUY
I knew rd check out. I've done business with
Bucho before.
Pick-Up Guy gets �P1 and casually glances over at Buddy being attended to.
(CONTINUED)
�--
•.
,' ',
l \...... . '
,•· ' �-R • ,
. .____,__.
CONTINlTED:
PICK-UP GUY
I just met this guy.
SHORT BARTENDER
(smiling)
� on in, we'll take care of him.
Bartender motions towards the bathroom, and Piclc-Up Guy nods a th�
you and takes the cue. Buddy's body is dragged out bade.
CtTrTO:
INT. INSIDE BA1HROOM • DAY
Piclc-Up Guy enters the bathroom, and wipes the sweat from his face in a
CLOUDY MIRROR before checking out the THREE STALLS. The last stall has
an OUT OF ORDER sign on it. He opens the door,.and steps up to what's left
of the TOILET BO\VL. It's almost completely covered with someone's lunch
and yesterday's dinner.
Pick .. up Guy grimaces at the overwhelming stench. Pic:k•Up Guy taps the
FLUSHER with his foot. As the toilet flushes, the commode moves forward,
and the WALL behind it moves with it Not very much, but just enough to
let someone slip in behind it. Pic:k•Up Guy looks around suspiciously before
ducking into the aack as the wall doses behind him.
· CUT TO:
EXT. 1RIO OF MARIACHIS - DAY
A trio of mariachis is wallcing up the street. ?vfariachi sees this and stands.
Mariachi, eyes never leaving the Tarasco Bar, walks into a smaller bar right
behind him.
INT. MARIA.Oil ENTERS AN01HER BAR - DAY
Mariachi finds a seat.
BARTENDER
Beer?
MARIACHI
Soda pop.
Bartender gives him a second look over, before finding the soda.
'
,_
.INT. MARIACHI GROUP ENTERS TiiE BAR
The Trio of mariachis enter as the bartender laughs and invites them in. The
cam� is on Mari�chi
_
the
_ �ho�e time. Y!e hear the bartender'� ·1augh and
SEE his hand waving, inviting m the Tr10 who walk past Manachi in: their
sequined clothing. The camera is still on Mariachi, who passively glar).ces
over his shoulder at the fancy duds.
The bartender puts the drink down and M�achi pays for it.
WE HEAR the offsaeen Trio of mariachis asking o!;her patrons if they want
to buy a song. We hear someone request MALAGENA. They begin to play as
Mariachi drinks his drink.
The camera closes in slowly on Mariachi, who is thinking about the girl the
song reminds him of: Domino.
DISSOLVE TO:
FLASHBACK
Mariachi scenes with Domino. Him at the ranch, holding up her dead body ...
His hand getting shot by Moco. Mariachi at the grave site of Domino. The
slab of a tombstone, if you look real close, looks like a domino. Faded dots
and all.
BACK TO MARIAOfi
Mariachi is starting to mouth the words of the song. He stands and walks
over to join the band. He stands beside them singing. The camera pulls back
and we see him standing alongside the trio. He glances over to them and
realizes that they're not Mexican. They're JAPANESE. They smile at hi:Jn as
they sing their song. He looks at the back of their jackets and sees the
embroidered name: LOS JAPONESES. He notices that the audience is
captivated by the novelty act He tu.ms and exits the building.
EXT. MARIACHI ON THE SIDEWAU< - DAY
The song MALAGENA is still playing. Mariachi stares at the Tarasco Bar. He
takes out an unusual COMB (everything Mariachi owns is unusual).
He combs his hair as if on his way to a job interview. He fixes his jacket. He
studies the comb. Obviously a gift from someone. Sentimental value firmly
attached. Mariachi tosses the comb into the street. He doesn1
t expect to come
out of this one alive, and he doesn't really seem to care. He picks up .his
guitar, casually does the SIGN OF 1HE CROSS, and strides across the street
towards the Tarasco Bar in Slow Motion as the song continues towards it's
crescendo.
(CONTINUED)
�--
t, .
........... •\ .
CONTINlJED:
We see the determination rising in his face ...
In a single take shot the camera is dollying back with the Mariachi in Slow
Motio� al'\d as the song hits and then holds the high note for what seems an
eternity, the speed returns to normal as Mariachi strides to the bar, tht high
note holding as he pushes the bar door open.
OJTTO:
INT. TARASCO BAR - DAY
Mariachi pushes open the door, and as the door hits the wall, the high note
ends. Cuts off, actually. All is silent
He stands at the door for a lost moment, SCOPING out the room. Short
Bartender sees him and notices the GUITAR CASE.·He looks from the case to
Mariachi's face several times. Mariachi begins his waJ.k towards the bar.
The other Rogues notice the case, and follow Mariachi with their eyes as he
walks past them to the counter.
SHORT BARTENDER
What
(suddenly)
do you want?
Mariachi stops in his tracks. He's in the middle of the room. Short Bartender
seems uneasy and overly cautious.
MARIACHI
rm loo.king for work.
SHORT BARTENDER
There's no work here.
Bartender's suspicious eyes are rapidly darting between Mariachi and the
guitar case he's carrying.
MARIACHI
Is there something to drink?
SHORT BARTENDER
Is there- something in the case?
Beat. A verbal standoff.
·MARIACHI
(shrugs)
My guitar. I'm a musician.
(CONTINUED)
'-._.,· '•,,
CONl'INl;"ED:
Mariachi is laying the guitar case on th� floor.
_ MARIACHI·
Are· you sure you don't want to hear me play_
before you say there's no work?
Before Mariachi can open the first latch, he has TWO GUNS pointed at his
head. • • -
SHORT BARTENDER
·�t away from that case! We just want to take a
look inside ... If it's what you say it is you can drink
all you want.·
MARIACHI
I told you. rm a musician, and this is my guitar.
Mariachi UNSNAPS one of the latches.
SHORT BARTENDER
Leave it alone!
(to the others)
�t him away from that case!
HANDS
Mariachi is violently jerked up into· a standing position. He RAISES HIS
... halfway.
ONE ROGUE has a gun on Mariachi's temple.
The O1HER ROGUE is OPENING the Guitar case. Short Bartender seems to
be at his wits end.
MARIACHI
( to the Case Opener)
Careful with that. It's an h4uloom.
SHORT BARTENDER
What is it?
MARIACHI
( to Short Bartender)
It's old.
The Case Opener UNSNAPS another·"tatch.
ALL EYES are on the CASE ...
Except for the Rogue with the gun to Mariachi's temple ... He's staring coldly
into Mariachi's eyes ... studying him.
(CONTINUED)
, .... _.�.
... �·;' ..
CONTn'i1JED:
SHORT BARTENDER
Hurry it up!
The last latch UNSNAPS. The CASE LID is opening ...
Mariaclti's eyes quickly SEARCH the room.
Short Bartender is leaning over the bar ... STRAWING to see ...
The Case Opener turns to Short Bartender.·
CASEOPENER
It's a guitar.
Short Bartender gets a clear view of the case. So do we.
It is a GUITAR..
The Rogue with the gun pointed at Mariachi's head looks to Short Bartender
for further instructions. Short Bartender motions for him to let him go.
Rogue LOWERS his gun, and begins to walk back to his seat ..
Mariachi takes a deep, nerves calming breath as the FAKE GUITAR TOP
silently begins to RlSE up on it's �GES, creaking ... slowly revealing an
arsenal of WEAPONRY beneath it .. No one sees this as it happens .
SHORT BARTENDER
rm sorry. But we've all heard stories of the bastard
that runs around with a guitar case full of guns.
We just had to be sure.
Mariachi takes another deep breath. We slide into slow .motion.
The Case Opener turns to close the case. He SEES the weapons that are now
magically before him.
CASE OPENER
It's HIM!!!
Mariachi raises his hands the FULL DISTANCE. The countdown begins ...
The R(X;t]E that had a gun on Mariachi turns and sees the WEAPONS in
the case. He throws Mariachi a cold, hard stare.
.The Case Opener pushes the case far away from Mariachi.
The Short Bart�nder SEES the weapons ...
(CONTINUED)
CON1Th1UED:
SHORT BARTENDER
Shoot him ...
Mariachi's arms are still up.
The Rogue staring coldly at Mariachi REA.OiES for his gun. ..
A low, CLICK·RELEASE SOUND is audible as two .4S's SHOOT UP from
Mariachi's sleeves, and into his waiting HANDS. Mariachi levels his guns at
Rogue... ·
ROGUE levels his gun at Mariachi ...
Mariachi desperately FIRES both pistols ...
Rogue's whole body is SNAPPING BACKWARDS, the heavy slugs dropping him to the floor with a loud CRASH.
Mariachi is JUMPED by the Case Opener.
Mariachi quickly flips him to the ground. Keeping a firm grip on his shirt
collar, he has a gun barrel shoved under Case Opener's throat.
Short Bartender DUCKS behind the counter.
Mariachi looks up to see ....
ALL the other seated Rogues LEAPING TO niEIR FEET, pulling HEAVY
ARmLERY from under the table. The sight, played out in balletic slow
motion, is a horrifying display by an imPQSSible force for one man to go up
against. There's just too many armed men. As they OPEN FIRE ...
Mariachi jerks the Case Opener to his feet so quickly that the Case Opener is
being SHOT ·by his OWN MEN as ...
Mariachi LEAPS to his case, SUDING aaoss the floor with it to the other side
of the counter where he takes cover.
Case Opener falls lifeless to the ground.
Some Rogues SHOOT everything in fear of turning out dead, while others
start around the counter, on a search and destroy mission.
Short Bartender holds his ground, aouched so low he's practically ki5sing
the floor.
CUT TO:
'
,_,
-
INT. Il'-J'SIDE HIDOEJ\J' ROOM - DAY
..
Pick-Up G'1y hears the GUNSHOTS, as do the two men P ACl<ING a
SUITCASE with MONEY. The walls are covered with all sons of strange
looking Mil..lT ARY WEAPONRY. . _
.
One of the money packagers, MONEY MAN #1 darts-towards the SECRET
WALL with an oversized ASSAULT WEAPON.
MONEY MAN #1
Don't let him out of your sight!
What the
-
heir's
PICK-UP
going
GUY
on?
Money Man #1 leaves through the secret door and waits in the bathroom
for the right time to exit into the main bar room. He's in no hurry to join
the fun.
MONEYMAN#2
(to Pick-Up Guy)
Friends of yours?
PICI<-UPGUY
I swear I have no idea what's going on out there!
Money Man #2 FIRES a round into Pick-Up Guy's head.
- '
j ... .
et.rrTO:
BAR ROOM GUN BRAWL
Mariachi BLASTS over the counter, then crouches and CRAWLS its
parameter. He meets up with the search and destroy guys and he
EXCHANGF.S GUNFIRE with them until they're dead.
Some Rogues are CLIMBING on the TABLES, trying to peer over the counter
as they fire away, hoping to hit something.
Short Bartender a-ouches into a tighter ball. BROKEN BOTil.ES and GLASS
falling around him.
Mariachi rises from behind the counter and pidcs off the easy pigeons
perched on the tables. His guns CLICK EMPTY as two men from under a table
BOLT UP blasting. Mariachi DIVES into the bartenders pit, bullets licking his
heels. .
Short Bartender sees Mariachi fall.
(CONTINUED)
t.
·--··
··, .. _,,,._·::�-
(
'---'
CON1Th"UED:
Mariachi, his eyes on Short Bartender, shuffles to his feet and CHARGES at
him.
Bartender dudes his head ...
Mariachi uses �hart Bartender as a step ladder, BOUNCIN'G off of his bad::
and t.£APING over the far side of the counter as BULLETS SPRA. Y at 'him
ham behind.
Mariachi hits the ground TUMBLING as the camera, glides aaoss the floor .
along with him� he rolls to his destination:
niE GUITAR CASE
. '
He drops in his EMPTY CLIPS and grabs two FRESH ONES.
Rising just as quickly, he RETURNS FIRE at the two guys. .. One of which
ducks and aawls around the counter.
The other, whose gun is empty, LEAPS atop the counter and onto Mariachi.
Both CRASH to the ground.
Mariachi's feet catch the guy at the chest, and the weight brings his legs down
to a springboard position, ready to launch. (see storyboard)
The Rogue tries to slice Mariachi's face with a BOOT I<NIFE.
Mariachi CATAPULTS the Rogue into the air, Rogue's knife swipe barely
missing Mariachi's face ...
Rogue flies backwards through the air ..•
Mariachi rises from the ground, BLASTING heavy rounds at the AIR.BORNE
Rogue, who sports ten lethal bullet wounds before he even hits the ground.
Mariachi spins around·to track the other Rogue, who is still aawling the
parameter of the counter, taking his time ..• in no hurry to die.
All is quiet. Marachi uses his ears to survey the whereabouts of the Rogue.
Bartender is quiet. A few tinkles of glass can be heard on the other side of his
counter.
Mariachi approximates the Rogue's whereabouts, and aims his gun at an
overhead CEILING FAN. He BLASTS the ceiling around the fan,� the
ceiling BR.EAKS AP ART from the impact of the bullets, DROPPING nlE
FAN onto the hiding Rogue, just as the Rogue was coming up for his last
shot.
(CONTINUED)
'
'
' '
.... "T'-.� J _, •
CO�"TIN"t.JED:
The still-turning FAN BLADES beat the hell out of the Rogue as he crumbles
to the floor. The blades POUND him all the way to the groWld. ·
Mariachi rounds the counter ... one gun aiming at the ground ... the other
held out in.front of him as the camera follows low and close.
As the fan dies down it continues to PUMMEL the Bad Guy every few·
seconds.
Mariachi sees this and stops the fan with a few bullet hits to the motor.
The fan dies.
The.bartender is imagining the worst. He has his eye on his GUN which is a
few feet away, under the counter.
Before he can make a decision on what to do ... a GUN BARREL lowers to his
head.
He does.
MAfUAon
Get up.
MARIACHI
rm sorry about all this, but fve heard stories of
people that run drugs out of their barsShort Bartender backs against the counter.
MARIACHI
.. Jor a man named - Bucho?
Short Bartender swallows hard.
MARlACHI
And you're going to tell me where I can find him.
Short Bartender can't believe what's happening. It's as if the bullshit story
Buscemi told was a premonition of things to come.
Mariachi has his BACK to the BATiiROOM.
CUT TO:
IN'T. rN'SIDE BA TiiROOM - DAY
The man that left the hidden money room, Money Man #1, is leaning
against the bathroom wall with his ear to the door. He has the oversized
assault weapon near his sweaty face. He looks incompetent enough.
(CONTINUED)
CONTINtJEO:
Mariachi has his gun on Short 'Bartender who is about to write information
down for Mariachi.
MARIACHI
... where he is, how many men he has around him,
phone numbers ... and I want you to hurry up.
The door CREAKS, and Mariachi swings his gun towards the door.
The Money Man LEAPS out of the bathroom.
Mariachi runs along one side of the bar and the Money Man runs along the
other side. They are blasting across the counter at each other as they run.
When a partition temporarily obscures them from each other's view,
Mariachi dives atop the smooth surface of the counter, sliding towards the
Money Man who is reaching the end of the counter.
Money Man SI<IDS to a slow motion stop.
Mariachi SUDES to a slow motion stop.
Each man ends up two feet away from each other with their guns pointed at
their faces.
Money Man fires. Click! Empty.
Mariachi fires. Click! Just as empty.
The Bartender appears &om behind Mariachi with his .45.
Mariachi sees him in time to roll off the counter as the Money Man is blown
away.
HANO
Bartender reacts at having shot his own man, then sees Mariachi's
gently pulling the guitar case into the shadows. Bartender backs away,
holding his gun loosely in his sweaty hands. Tense •.
Mariachi rises abruptly, his gun fixed on Short Bartender.
MARIACHI
You help me ... and I won't kill you.
Short Bartender raises the gun and shoves it to his temple. Mariachi can't do
anything from here.
MARIACHI
Wait ...
Bango. Too late.
(CONTINUED)
i.
-..._,,
\.-...,,
. . .
CONTINUED:
Mariachi pounds the counter furiously. -He never wins ....
He surveys � roomful of corpses. Damn.
MARIACHI
(under his breath)
Now what ...
He grabs a PAPER NAPKIN and saibbles onto it. He lays it on one of the
DEAD Rogues in tN! middle of the rpom. He grabs his case and walb out.
- - -et.rrTO:
. The HEAVY DOOR behind the bar opens. The MONEY MAN who shot the
Pick-Up Guy sneaks out. His name is TAVO, and Tavo watches as Mariachi _
crosses the street.
Tavo FOLLOWS Mariachi at a sale distance.
Mariaclti contin\les along at a BRISK PACE. He glances about. Looking for
anyone that might be a nuisance.
Tavo keeps a safe distance for a few.blocks, then closes the _gap.
The YOUNG WOMAN we saw eulier is buying some fruit at a fruit stand.
She takes her bag and walb on. This is CAROLINA.
Mariachi is walking RIGHT TOW ARDS her. They are niREE BLOCKS away
from each other.
Tavo is ONE. BLOCK behind Mariachi. His eyes are SQUINTING, trying to
find a break from the sunlight so he can get a good shot in.
Mariachi must think he's home free, because he's not glancing around
anymore. His eyes are fixed on what at this� appears to be a very
beautiful young woman abo�t 1WO BLOCKS away and closlng.
Tavo takes his GUN out from his shirt. He lets it hang at his side. His fingers
dance aaoss the grip •.. feeling the weight, adjusting his eyes to the sun. •. he
tries to find the moment. He picks up his pace.
Mariachi sees the girl as his lost love DOMINO. She seems to be walking to
him.
Carolina_ wonders why the man in a mariachi suit is looking at her so
intently. She brushes her hair with her hand.
(CONTINUED)
\.........__.. -
\, .
''-"'I::,,
CONTINUED:
Tavo pulls .a second gun from behind his waist. He walks with the guns at
starts
his sides. His fingers tickle the triggers, waiting for the right moment. He
to JOG.
Mariachi's eyes are fixed on the girl. His heart is poun4ing. Through � eyes
he sees Domino.
Tavo RAISES HIS GUNS as he jogs. Both barrels are AIMED at Mariac:hi's
back. Tavo doesn't want to chance firing at this distance. He must get� close
as he can. We �alize he is just as incompetent as the other money pa�ger.
That's probably why they work the bathroom.
........,._
The guns are BARRELING towards Mariachi at FULL SPEED. Tavo is trying
to shake as little as possible. There's no going back.
Carolina's
SCREAMS
sees the man RUNNlNG at Mariachi, she SEE.S the guns and
just as Mariachi SPINS and sees the barrels coming for his face.
Mariachi LEAPS atop Carolina and PULLS her to the ground, SHIELDING
FLESH
her with his body from the gun blasts that take a good size CHUNK OF
from his upper left arm.
Tavo TRIPS over them and CRASHES to the ground.
Carolina turns her head in time to see Tavo AIMING a gun right at her. She
sees Mariachi JUMP atop Tavo, PU�G the g1m downward.
The gun FIRES, and large pieces of CONCRETE burst up a foot away from
Carolina's face.
Mariachi
aiming
is struggling with the gwu:nan, the barrels alternating between
at Mariachi and aiming at Tavo. Finally Mariac:hi delivers a
devastating HEAD-BUl'T that temporarily SIUNS them both. Mariachi
shoves the pistols under Tavo's � pulls the triggers, and ends it.
Mariachi staggers to his feet, then falls into 'Carolina's arms. Blood pours
from his arm.
Carolina is looking around for someone that can help. Not on this street.
. -
She pua Mariachi's ann over her and helps him wallc. away.
MARIACHI
(wealcly)
I can't go to a hospital.
Mariachi gr�s the case with his good arm and off they go.
Tavo's body is left baking on the hot sidewalk.
CU!TO:
I
\ '-··
....
I
'--.··
EXT. NAVAJAS CHECKS our BAR- DAY
Navajas is under the awning of a CURIOSO SHOP. His gaze is fixed on the
COM:MOTION across the street at the Tarasco Bar. He sees a GROUP OF 1'-iEN
guarding it from the outside. Another group of men enter the bar.
Navajas walks over to a public phone. He drops a few quarters in and:calls.
ct.ITTO:
Il'JT. TARASCO BAR - .DAY
Low angle TRACKING SHOT of a pair of BOOTS making a beeline through
the strewn bodies across the Tarasco Bar floor.
The booted feet we've been tracking stop at the BODY in the middle of. the
room. The body with the NOTE left on it. A hand enters the frame and picks
up the note. Follow the hand up to a shot of a visibly upset BUCHO.
Right Hand Man comes up behind Bucho.
BUOiO
I said I didn't want this place to tum into a
shooting gallery .
RIGHT HAND
All the money is still in the back. The Pick-Up is
lying on the ground with a bullet in his head. Tavo
must have shot him.
BUCHO
Where is Tavo?
RIGHT HAND
He's not back there.
HENCHMAN
{to Bucho)
Tavo is out in the street. About five blocks north.
BUOiO
Tell him to get his ass in .here, I want to know what
happened!
HENCHMAN
He's dead, boss.
Bucho shrugs.
(CONTINUED)
\ �-·
\
. .._ . ,
�I .'
1.
\.,-· ....
COmINUED:
-
Right Hand releases one of those ill timed, uncontrollable short bursts of a
LAUGH.
BUOiO
�t's
(sternly)
so fucking funny?
As quickly as the laughing spell came, it disappears.
RIGHT HAND --
(shaking it off)
rm sorry. One of those stupid things that just
struck me as funny, I guess.
BUOiO
( very serious)
It's not funny.
RIGHT HAND
(just as serious)
I know that.
( changing the subject)
Whoever .it was didn't come for the money. It
wasn't the cops .•.
Bucho reads the note, then hands it to Right fland Man.
BUCHO
It was him.
Close-up of the handwritten note:
YOU'RE NEXT, BUCHO ... Love, El Mariachi.
Right Hand doesn't get it.
BtJCHO
{taking the note)
It's the aazy bastard that killed Mauricio a few
years bade. Some half-ass musician that carries a
guitar case full of weapons. He goes from town to
town asking questions, killing guys like ... me. I
don't need this. I really don't need this.
A few TEENAGERS, tourists, storm into the bar. They're laughing and
playing, looking for good times and cheap booze. They SEE the carnage
strewn about the bar, and they get real quiet.
BtJCHO
{taking the note)
It's the aazy bastard that killed Mauricio a few
years bade. Some half-ass musician that carries a
guitar case full of weapons. He goes from town to
town asking questions, killing guys like ... me. I
don't need this. I really don't need this.
A few TEENAGERS, tourists, storm into the bar. They're laughing and
playing, looking for good times and cheap booze. They SEE the carnage
strewn about the bar, and they get real quiet.
. -
... - .
{CONTINUED)
\,-.. .. '
.. _
CONTIN1JED:
BUCHO
Can't you see we're FUCJ<ING CLOSED!!
The teenagers back out slowly ... eyes glued to the bodies. They are green faced
. by the tiJ:ne the door closes on them. _ :
BUCHO
Somebody lock the door!
RIGHT HAND
Thei:e has to be something else to this. Why would
he come here looking for you?
BUCHO
I set Mauricio up in a small town .. Crazy, greedy
bastard. He killed the musician's girlfriend and
shot hi.s hand off. Figure this musician, who
already offed Mauricio, is either a revenge seeker,
(beat)
or ... maybe he's got nothing better to do.
Wider shot of the corpse filled room. Right Hand surveys the room.
BUCHO
Switch our pick-ups over to La Azteca. We can't
shut down, or the boys'll get suspicious.
RIGHT HAND
Bucho, we'll have to tell them about this.
BUCHO
Listen to me ...
RIGHT HAND
(shaking his head)
I don't know, Bucho ...
BUCHO
We gotta find this guy and get rid of him, quietly.
And we've gotta do it before they-hear about this,
or that's it for us. We'll need everyone on the
lookout for this guy.
RIGHT HAND
If he's left town?
BUCHO
He knows I'm here, now.
(crushes the NOTE)
He's not going anywhere.
(CONTINUED)
CONTIN1.JED:
Bucho lets the crumpled NOTE fail from his hand. It falls perfectly into the
gaping mouth of the corpse at Bucho's feet.
Two points.
CUT TO:
INT. CAROLINA'S BOOKSTORE - DAY
Extreme Oose-up of a slab of ICE. Sunlight filters th.rough it, illuminating
the thin lines of BLOOD that drip down il
Mariachi holds the jagged chunk of ice against his forehead. He's lying on a
counter top, feeling the effects of the heavy pain killers.
MARIACHI
What the hell'd you give me?
CAROLINA
Pain killers. rm operating.
MARIACHI
(groggily)
Where am l?
CAROLINA
Bookstore.
Carolina is digging deep into his arm using SHARP 1WEEZERS and a blood
soaked cloth.
CAROLINA
( clarifying)
Bookstore Cafe.
Mariachi is too groggy to notice Carolina is taking his arm apart looking for
the slug.
MARIACHI
(eyes looking about)
Where is everybody?
Carolina motions to the door. Mariadti follows her gaze, and sees that the
CLOSED sign is up.
CAROLINA
I closed early. So no one would come around.
Actually ... no one would be coming around here
anyway.
(CONTINUED)
\ .
--·
\
\
CONTINUED:
MARIACHI
(flinching)
Why's that?
CAROLn-J'A
Nobody reads.
.....
}·
He grunts slightly from the digging. The pain killers are wearing off.
Mariachi looks around. The ceiling is high and the books climb all the way
up to the ceiling. Unusual .. bizarre. How is anyone supposed to get up there?
MARIACHI
Is it yours?
CAROLINA
It's mine. The building's mine, too. rve got an
apartment upstairs, and a coffee shop through that
doo.r.
MARIACHI
Why a bookstore?
Thinks she's found the bullet. She pulls it up to the light to inspect it.
Nope. Chunk of meat She tosses it aside and continues digging.
CAROLll-J'A
nus town never had a bookstore. Least not since I
can remember.
Wipes her hands a little bit. She pours some more HOT WATER on the rag
from a COFFEE POT.
CAROLn-J'A
Parents passed away, left me this building and
some money. Anyway ... there were no bookstores.
(sarcastically)
So l get this bright idea ... MARIACHI
(really flinching}
Are you sure you know what you're doing?
She lifts up a MEDICAL BOOK turned to the page of the operation she's
following.
(CONTINUED)
�----· -
. -
,. :
CONTINUED:
CAROLINA·
(Mocking tone)
Why a bookstore?
Mariachi lets it sink in.
Carolina works busily on his arm. She eyes 'the GUITAR CASE.
- - -
CAROLINA
You won1
t find work in this town.
MARIACHI
Wbat?
She points to the case.
CAROLINA
Your guitar. No one hires musician's around here.
MARIACHI
I know .... l use it to pick up girls.
CAROLINA
Oh, really?
MARIACHI
yea .... OUCH!
CAROLINA
Sorry.
The camera is on his face, whic:h is wincing in silent pa.in. Beads of SWEAT
slide down his skin.
Carolina's
firmly
hand enters the frame holding the pair of tweezers. Grasped
by the tweezers is a BLOODY SLUG.
. CAROLINA
Check it out. 'This one had your name on it.
MARIACHI
You don't even know my name.
Carolina opens up a fresh pack of cigarettes and �ghts one up.
CAROLINA
You're right, l don't know your name.
She drags heavily on the cigarette.
(CONTINUED}
( ·,
,__. .,•
'•• �: ....
CO.l\i'TINUED:
MARIACHI
A smoker, huh?
CAROLINA
(releasing a huge puff)
Nope.
i
!
. .: .....
• I She shoves the cigarette deep into the bullet wound. Mariacru grits his teeth
and screams internally. Sounds like a long grunt to us.
MARIACHI
(lets out deep, painful breath)
Thanks.
CAROLINA
'The least I could do for you after saving my life ...
She lifts a big threaded NEEDLE into frame.
CAROLINA
Let's stitch you up.
Mariachi looks deep into the slab of ice that MELTS in his bare hand. There is
a bug frozen in it. We HEAR the needle pulling and tugging at his skin.
Mariachi is far away.
CUTTO:
EXT. BUCHO'S RANCH - DAY
One OSTRICH is chasing another around their run. Bucho is back at his
ranch. He walks by his HERD OF OSTRICHES with Right Hand who is trying
to talk to him.
RIGHT HAND
If it's the guitarist we're after he may not be alone.
What
BUCHO
are you talking about.
RIGHT HAND
Some of the men have been telling me stories
about this guy. He usually travels with a group of
hired guns that ause a lot of damage. Maybe we
should cut down on pick-ups until we quiet this
down.
{CONTINUED)
·• .... .., .. ·.
�-----·
CONTINUED:
BUCHO
We can handle this ourselves ... You .. will handle
this. I don't want anyone to even know we have a
problem. What, do I gotta do everything myself?
RIGHT HAND
I'll handle it.
BUCHO
Damn right you'll handle it. And where's my car?
Is it finished yet? How long do I gotta wait for this?
I could have built the thing myself by now.
RIGHT HAND
I didn't-like it so I sent it back to get a few things
worked on.
BUCHO
You saw it and you didn't tell me?
RIGHT HAND
It needed work, I promise you, you wouldn't have
been happy with it, it'll be better now.
BUCHO
I want my car-. and I want that bastard taken care
of.
RIGHT HAND
rn take care of it.
A RANCH HAND passes a couple of Ostrich eggs to Bucho. They're huge.
BUCHO
See this. You need huevos like these to work for
me. Or I have no use for you.
Right Hand walks off. Bue.ho hands the eggs back to the Ranch Hand.
BUCHO
Go make me an omelette.
INT. MARIAOU AND BOY • DAY
Mariachi is checking out his stitch job.
aITTO:
(CONTINUED)
\
'--·
'-··
-
CO!\.'TI1'-i'l.IED:
MARIACHi
(voice over)
If r had just looked closer at her dress, rd have
noticed that she sews aooked. Too late now.
. .
, :
He looks out th� window and sees the BOY practicing guitar as he cros�es the
street. -
_ I
The kid almost gets hit by a truck in the process. Mariachi reaches ·out to
warn him even though the kid can't hear him or see him . .Ihe truck skids to
a stop and blasts it's horn at the kid, who after the initial scare goes back to
practicing. A car in the other lane screeches to a stop as well, again he is
almost hit.
Mariachi tries to follow the kid by running to the other room, where he
opens the window, looks around first, then calls out to the boy:
MARIACHI
Hey, kid! Get over here!
NINO
r ve been practicing, listen to this.
MARIACHI
Get over here before you get run down! fll teach
you a song I just wrote.
Another CA.R j�t misses the kid and hits a curb. Mariachi almost has a heart
attack. ·
NINO
(crossing the street)
'f ou wrote a song?
.. MARIACHI
I was inspired.
NINO
(smiling)
Carolina, huh? Hold on.
The Boy wallcs around the building and knocks on the front door. Carolina
unlocks it and turns the Closed sign over so it reads OPE?>,1 from the outside.
CAROLINA
Hi, you're finally going to read some books, huh?
NINO
No, I'm finally going to get my guitar lesson.
(CONTINUED)
·,�--·
'---� .. :,
CONTINUED:
Mariachi enters the room.
CAR0Ln--1A
You're tutoring now?
MARIACHI
rm a musician.
NINO
What'.s
(rutting to the chase}
the song you were going to teach me?
MARIACHI
Play what I showed you.
The Boy plays the keys Mariachi taught him earlier. He's improved quite a
bit. Carolina is watching the_m.
MARIACHI
Okay, but instead of this note, play these three
here ...
Mariachi simply points out the strings to play, and hums along ...
MARIACHI
... and these four here. Practice those. It's the order
that you play them that makes.it the �ng. You've
got to keep the order straight
CAROLINA
What's going on?
MARIACHI
He asked me to help him, rve got to help him
right?
NINO
Where does this go?
Mariachi shows him the fingerings.
MARIACHI
He's my little brother. Isn't that right manito?
NINO
That's right.
Mariachi shows him the last notes.
. .
.. -:
(CONTINUED}
'--· ,,
1
\ --- -
COl\iTINUED:
MARIACHI
Don't forget those there. Good. Now practice that.
That's all.
NINO
When do I get the next lesson?
MARlACHl
After you've perfected that. And remember that's
my song. If anyone asks, you tell them I wrote it.
As the Boy wa.llc.s to the door, it hits him.
NINO
And who do I say you are?
Mariachi gives it a few seconds of thought. Carolina looks at Mariachi.
MARIACHI
rm your older brother, remember?
NINO
That's right. .. I forgot
MARIACHI
Manito. Practice.
NINO
ru practice, ru practice ...
Carolina can't help but smile. She locks t:he door and puts t:he CLOSED sign
on.
MARIACl-D
I tell you what. I'll leave my jacket and my guitar
here. I'll go out, make a few calls, make my plans.
ru come back for my things, and then I'll leave.
CAROLINA
Aren't you going to tell me what's going on?
Still charmed, she takes a key off of her key ring and hands it to him.
MARIACHl
No.
He leaves.
She locks the_ door. After he's long gone, she flips t:he dosed sign over so it
reads OPEN from the outside. She's about to walk away, but she comes back
to take another glance out the window. She checlcs out the street
(CONTINUED)
(
\___, .. · .
\, ...... � '
\ .. _,�,,,. ,, '
CO�"TIJ\FUED:
She flips the sign back over to CLOSED, and wallcs away.
CUT TO:
INT. TARASCO BAR- DAY
. . I
Some of Bucho's HENCHMEN are trying to clean the mess in the bar..
They've cleared the bodies out already, and are now trying to clean up the
pools of SPILLED BLOOD.
Close-up of a WET MOP slowly being lifted out of a bucket The mop,
dripping RED WATER, sloshes along the floor. It doesn't soak up the blood
so much as SMEAR it aroW\d. The mood is aeepy.
The door aeak.s opens. The Hench.men tum to see who it is ... and see the
NAV AJAS standing at the entrance, staring at them like a lifeless statue.
Very creepy.
E:iENCHMAN
We're closed.
Nav ajas stands motionless. He loo.ks de�d.
. HENCHMAN
Go on, get out of here.
A few long seconds pass. One henchman puts his mop down, but before he
can do anything Navajas has turned and is wallcing out the door.
CUT TO:
EXT. MARIACHI ENTERS THE TOWN aruROi • DAY
Mariachi walks about the town without his jacket and his guitar. He walks.
up a GRAND STAIRCASE, grand considering the condition of the rest of the
dilapidated town And enters the oruRCH.
INT. CHURCH-DAY
A PRIEST passes him by and goes into the CONFESSIONAL BOOTii.
Mariachi decides to sit in one oi the pews.
After a few moments of silent prayer, he approaches the confessional. He
glances around, then goes in.
MARIACHI
Bless me father for I have just killed a bunch of
drug dealers.
(CONTINUED)
I
"-·
CONTINUED:
BUSCEMI
No shit. Here, I gotta little donation for you.
· Through the confessional window Buscemi hands the Mari.achi a bundle of
money.
BUSCE:.MI
- That's the rest of your advance. They were
impressed with what you did �
t the Tarasc� Bar.
MARIACHl
I was luclcy. What makes them think ru stay lucky.
BUSCEMI
They know you want him dead as tnuch as they do.
Look be happy, if nothing else think of it as a going
away present. See you around, maybe.
Buscemi leaves the confessional. Mariachi sits there a bit, thinking.
When he decides to leave he is startled as he bumps into a MAN IN BLACI<.
Mariachi has his hand in ltis jacket before he realizes who it is, ready to check
out with guns blazing. The Man in Black is a real priest.
PRIEST.
rm sorry,� you want confession?
Mariachi thinlcs.
MARIACHI
Yea, but I better wait a little while longer, because
I'm on my way to do something not so good, and
rd have to come right back anyway._
PRIEST
Okay.
EXT. our ON 1liE STREET. DAY
Mariachi exits the church, stashing the money·.in his coat.
MARIACHl
(voice over}
I should have never taken money as a hitman for
something I was going to do anyway as a vigilante.
. Saews up your loyalties.
He scopes out the town courtyard, and sees the man in the ST.RAW HAT
who is walking briskly from the alley near the church.
(CO�D}
,_
\.._ ..
COJ\i'TINUED:
Mariachi squints his eyes, trying to remember where he saw this man before.
We see a flashback of the scene earlier in the movie when Straw Hat entered
the Tarasco Bar with a package and left empty handed. Mariachi decides to
follow him.
Sttaw Hat is walking towards the same beat up GREEN CAR, which is !parked
about a block away.
Mariachi tries to stay back a bit so as not to make Sttaw Hat suspicious.
Straw
turns
Hat must have sensed him, because right away he stops in his ttacks ...
... and SfARES right at Mariachi.
Mariachi stops ... and stares back.
Standoff.
Straw Hat turns and continues wallcing. He passes his beat up car, and puts
his car .keys back into his pocket
Mariachi picks up speed Straw Hat starts to run. M.ariaclu chases him.
EXT. STREET CORNER • DAY
Straw Hat bolts around a comer, and barely avoids the GROUP OF
CHILDREN who are sitting out on the ground, counting the money they're
earning washing car windows.
Pit Bull is with them, and he throws a few cautionary barks at Straw Hat
Straw Hat tumbles into oncoming traffic, BOUNCING over a few car hoods
on his way to the other side of the street.
Mariachi turns the comer and LONG JUMPS the group of children, landing
on a parked car, and from there falling butt backwards onto a moving vehicle
which sends.him crashing back to the sidewalk.
Mariachi pie.ks himself up and bolts down the sidewalk after Straw Hat.
Pit Bull darts after them. The children are concerned with their new dog's
welfare, and watch him as he bolts down the street after Mariachi and his
prey.
Stta w Hat is running down the sidewalk on the other side of the street
Mariachi is .keeping a close eye on him as he dodges pedestrians and street
vendors.
NA V AJAS is on a pay phone when he sees Straw Hat TEAR past him.
Navajas calls out to him by name:
(CONTINUED)
\ ,.___.,.,.
CONTINUED:
ENFORCER
SARDINA!!!!
Straw Hat doesn't hear anything. He darts aaoss another street.
Navajas spots Mariachi aaoss the street barreling down the sidewalk, �ith
Pit Bull hot on his heels, followed by a few of the children.
Navajas hangs up the phone and starts a half walk, half run after ther¾..
. '
Mariachi finally BREAKS across the street, dodging through the cars, ttying
not to get hit. He runs up the back of another car and DIVES for Straw Hat,
barely MISSING grabbing his burlap sac of a shirt
Mariachi aashes to the ground.
Straw Hat turns to see the defeated Mariachi and smiles triumphantly.
Out of nowhere Pit Bull bites Straw Hat's ass, sending, him aashing and
sliding into a parked car.
Pit Bull, panting, si.ts up on a step and takes a breather. When a Pit Bull
pants, his tongue hangs down and his massiye jaws are pealed back in what
looks like a huge grin. Pit Bull sits an4 grins.
Mariachi lifts the man up by his shirt...
MARIACHI
( choking in heavy breaths)
You didn't have to make a big show out of it
asshole, I just wanted to ask you a couple of
questio� ...
A COP comes running over to the two men with his BATON drawn. He tries
to break them up.
THE a-m...oREN finally arrive_ and they pet Pit Bull proudly. They start back
to their comer, and Pit Bull follows them.
POV of Navajas walking briskly towards the commotion.;,
Close-up of a small, shiny lHROWING KNlFE that he unsheaths from his
belt. He SPINS it smoothly in his hand. An expert thrower, you can tell. He
must play with these things all day.
POV of Navajas NEAR.D',JG them. Mariachi can be seen ARGUING with the
cop who seems to be threatening a bonk on the head with his baton. Mariachi
still has Straw Hat by the collar..
(CONTINUED).
-
\.
i \....___,, .
CO�"TINUED:
Mariachi
THROAT
SEES Navafas as he IliROWS his blade. It buries deep into the
of Straw Hat. •· _ -
Mariachi notices _the blade jutting from Straw Hat's throat. the cop ,ees this
too, and thinks Mariachi did it.
Mariachi LUNfiES for Navajas, who lHROWS ANOTiiER KNIFE.
The cop PULLS Mariachi back, thinking he's trying to escape.
Mariachi SffS Navajas OISAPPEA.RING from view in the-CAnmRING
CROWD. Now the cop has a GUN on Mariachi who PUNOiES the hell out
of the cop and takes his gun away, using it to PISTOL 'WHIP him.
Mariachi takes off after Navajas, LEAPJNG atop a still car to track Navajas's
direction. Navajas is walking briskly through the traffic before ducl<lng into
an.ALLEYWAY.
Just then, the car Mariachi is standing on start5-to drive away, taking him
with it. Mariachi JUMPS to a!l9ther moving vehicle going the opposite
direction and from there jumps to the street_running.
· The Children are still petting the Pit Bull proudly as they walk.
Pit Bull sees Mariachi in pursuit once more, and he darts out to the rurb, as if
about to run off·to help. He turns back and joins the children. He's done his
good deed for the day.
Mariachi cha!es after Navajas, but he's lost him. Mariachi stalks the area of
sidewalk near the alley where he last saw Navajas. He realizes he's still
carrying the gun out in the open, so he pockets it.
He wipes.his sweating _ brow with his hand. He moves his hand down his face
in deep thought, spreading thick BLOOD aaoss his skin.
He sees the blood dripping down his hand. He examines his arm, and follows
the bloody trail up to the silver lHROWING KNIFE that juts out of the back
of his blood-soaked upper arm. He never even felt the thing.
The camera does a slow dolly as he surveys the streets one last time, before
exiting the saeen with the knife still jutting.
· CUTTO:
Il'JT. BOOKSTORE • DAY
With Mariachi gone, Carolina talc.as this opportunity to check out his guitar
case. She takes his soiled jacket off of the case, and gently runs her fingers
over the latches. She hears a NOISE behind her. Tums.
(CONTINUED)
/�.
, ... ___ .. ·
I
\_..
CONTINl.iED:
Nothing.
-
She unsnaps each latch carefully, quietly. The last lid has a small lock built
in. She takes a pin from her hair and piclcs the lock. Easy. She opens the lid
_slow ly.She seems surprised by what she sees ... It's a guitar. i
'
She is about to -close the case, but stops halfway. She opens the case again. The
guitar looks funny in this light. She tries to pluck a string. 1
I
The string doesn't move.
The FAKE GUITAR TOP rises slowly, making a CREAKING SOUND that
makes her heart race with fear. She sees the arsenal of weapons slowly being
revealed ...
A HAND darts out from behind her and grabs her arm. She wants to scream
but doesn't.
Mariachi stares through her. She tries to pull away, but he TIGHTENS his
grip.
MARIACHI
(calmly)
t appreciate what you did for me. But ... you
shouldn't be .•.
He motio� to the mess she's m.alcing.
CAROLINA
I'm sorry. I wanted to find out what was going on.
You told me you were a musician
MARIACHI
I was a mmici.a.n.
CAROLINA
There was shooting at a bar, earlier.
The man who tried to kill you worked there.
Mariachi shrugs.
CAROLINA
What were you doing in the bar?
MARlACHI
Looking for someone who could lead me to Bucho.
CAROLINA
Who did you kill?
(CONTINUED)
--···
\, ., .
CO�'TINL!"f D:
MARIAOll
Everyone, l think.
CAROLINA
That's why you didn't want to go to the hospital.
MARIACHI
It was mostly self defense.
CAROLINA
I believe you. U you're not a regular customer
you're just asking for trouble.
MARIACHI
What do you know?
CAROLINA
I
selling
know that it's not a real bar, and that they were
more than booze.
She sees his sleeve full of blood. She follows the trail of blood to the knife.
What's
CAROLINA
all this?·
MARIACHI
I found someone else who could have led me to
Bucho, but ..
Carolina rolls up her sleeves.
CAROLINA
You killed him too.
(sighing)
On the table.
Mariachi slowly climbs on the table.
MARIACHI
Please, no smoking this time.
EXT. BtJCHO GETS HIS CAR - DAY
Cu"1' TO:
Close-up of BUCHO walking up into frame, looking right into the camera.
Bucho's POV as the front gate opens, allowing his new BLACK LIMOUSil'ffi
to cruise into the courtyard. RIGHT HAND begins to point out the Limo's
features to Bucho. Every detail.
(CONTINUED)
\
'-;-•'
CONTINUED:
RIGHT HAND
Bullet proof windows, sidings ... hood. Mirrors. The
ashtrays are bigger than the last ones.
The doors swing open and a Henchman demonstrates the GUN POR..TS.
Bucho nods approvingly, walking by the car, the camera dollying through the
features.
BUCHO
What's the progress on our vigilante??
RIGHT HAND
(as if he's forgotten already)
We haven't found him yet. ..
BUOiO
No? Well he's finding us. One of our pick-ups
was found with a knife in his throat. You know
what rm wondering?
Some of the Henchman take a cautious step backward.
BUCHO
(to the henchmen)
I'm wondering why the cops can find this guy, and
you can't!
No one says a word.
BUCHO
Anyone want to tell me why?
No one jumps at the chance. He walks past a couple of Henchmen and slaps
one of them on cue.
BUCHO
Because you're a bunch of
idiots
scheduled
that's why! there are no more pick-ups
today, except for the one on Juarez, stay
away from there. The rest of the town is game!
Take my car, and find him!
Right Hand looks over at Bucho's new black bulletproof Limo.
RIGHT HAND
ru take my truck.
(CONTINUED)
, ___ .
\.._ .,·
\
'---:·
co��1JED:
BUCHO
Take my car, get out there ... You see someone you
d.9n't know, kill him! He could be shooting up the
town right now.
The SUN ROOF bursts open. ..
A Henchman pops out with a MACHINE GUN aimed at Buchc.
Bucho appears slightly alarmed by this. Caught off guard.
RIGHT HAND
BW;let proof glass on the sunroof, works as a shield
for whoever i:5 firing from on top.
The Henchman is smiling.
Buc:ho pulls out his pistol and BLASTS three rounds at the Henchman The
bullets DEFLECT off of the bullet proof glass. The Henchman jumps at the
startling shots.
BUCHO
(Nodding approvingly)
It works. Now go and find him.
Right Hand shakes his head at the Henchman. •. who sinks slowly into the
sunroof.
CUT TO:
INT. MARIACHI ON IllE COUNTER - DAY
Close-up of the MEDICAL BOOK opened to a page on "Stitching an Open
Wound.·· Drops of BLOOD fall onto the page.
Mariachi winces in silent pain.
Close-up of a NEEDLE and THREAD going to work on his arm.
Close-up of the book, as Carolina's hand enters the frame to brush the blood
away from an instruction. She only succeeds in SME.ARJNG the blood aaoss
the pa-ge.
CAROLINA
(glancing over his guitar c:a.se)
I know who you are. You're the guy that you
_ always hear stories about
(CONTINUED)
\.... .. _.
"·--.-
COJ\i"TINUED:
MARIACHI
1bat's mostly what they are ... stories.
CAROLINA
So you don't really go around killing drug _dealers?
MARIACHI
The man I'm after is Bucho. I've taken out a few
others, but they've all led up t� him. He's the one.
We occasionally see the needle point work, but for the most part the camera
stays on our couple.
CAROLINA
Expect to do this all by yourseli?
MARIACHI
If trungs get rough, ru call in a few friends of mine.
CAROLINA
r ve heard stories about your friends, too.
You're gonna need them. You can't just come in to
a town and kill someone like Bucho. He's semi•
legit, runs a ranch, has several properties. And he's
got men all over the place.
MARIACHI
See, you do know a little bit.
CAROLINA
I have a k�:�em with what goes on around here,
yea. But · · g people is not my idea of improving
things. I'm not going to help you kill people.
Carolina sees the nasty SCAR aaoss his left hand. She points to it, interested.
CAROLINA
What happened to you here?
Mariachi takes a break from his trance to gaze abstractly at his mangled hand.
CUT TO:
FLASHBACK
MAURIOO pulls out a 9mm automatic pistol_and FIRES a single devastating
shot.
Mariachi flinches gTOtesquely as his hand comes apart. Before we can really
see the full effect we CUT ...
(CONTINUED)
\.., .. ,:T :�!
CONTINUED:
Mariachi pulling his hand away. He makes a fist.
MARIACHI
You don't want to know.
His eyes finally meet hers.
CAROLINA
Sure I do. I want to know why you would trade in
your life as a musician to do what you're doing.
MARIACHI
Trade in my life? They took my life.
CAROLINA
Who?
MARIACHI
The kind of people rm looking for. Bucho runs
operations all over Northern Mexico. Including
the
hand,
one that was responsible for destroying my
and killing the woman I loved U I could just
take him out ...
CAROLINA
You'd be satisfied? After him you'll want to go
after the guy above� then the guy above that
one, and on and on. You should deal with getting
on with your life, and let the cops handle it.
MARIACHI
Cops direct t:raffi_c.
CAROLINA
You're saying we don't have law and order around
here ...
MARIACHI
You have order, it just doesn't come from the law.
BACK TO:
He's run out of things to say. He shuts off and goes back to his daydream.
. CAROLINA
All done here.
She's tying up the thread.
(CONTINUED)
-
\ ,,
-----�·· ...
CONTINlJED:
CAROLINA
(waving the throwing knife)
ru add this to your collection.
He sits up. Grunting at the pain
While Carolifl! puts the knife back into the case, sh_!! finds an interesting
gadget. -
- .
CAROLINA
(holding it up)
So what's this do? --
Mariachi attaches a .45 automatic to the gadget, then straps the gadget to her
forearm using the leather strap.
MARIACHI
(pointing his finger at her like a gun}
Put your hands up.
She raises her hands, as if surrendering.
MARIACHI
Now count to ten. ...
CAROLINA
What?
MARIACHI
Never mind ... .3, 4, 5, 6 ...
CAROLINA
Oh, count to ten. ..
We INTERaJT between her glancing between Mariachi and the .45 attached
to the gadget.
Close-up of Mariachi countin.g. Cose-up of the gadget ...
MARIACHI
... 7, 8 ....
CAROLINA
What's it going to do?
MARIACHI
9, 10 ...
Carolina SQt.Jil'ITS her eyes a bit, then SCREAMS.
(CONTINUED)
\ __ . ·_·
'\, _ _,,, ..
CONTIN1JED:
CUCK! The gadget SNAPS, and the pistol FUES up into her HAND. Time
Release Pistol Popper. Carolina has her other .hand over her mouth. She
W'\Covers it when she realizes she's still intact
. Mariachi unceremoniously removes the gadget.
CAROLINA
( admiring- it)
Que padre: ..
He lays the gadg�t and gun back in the case. If you look close you can see
another .45 fitted into an identical gadget. The leather straps hang from both.
CAROLINA
Anything else interesting?
Mariachi pulls out a tiny gµitar case. About 5 inches across. She takes it in her
hands, admiring it.
CAROLINA
It's cute. Can I have it?
She opens it up. WEAPONS. Tiny weapons.
He takes the case, doses it gently and returns it tc the daddy case. She smiles.
MARIAOU
Belongs to a friend of mine.
She looks him over.
CAROLINA
Soft hearted killer .•.. Why don't you stay?
Mariachi looks in her ey�. He's standing a little too dose to her.
CAROLINA
(backing up a bit)
I mean, you're here enough as it is. You can take
that room. But tomorrow, you go.
Mariachi straps the gadget to his wrist and attaches the pistol.
MARIACHI
.First, rm going bade to the church. The man I
followed may have dropped something off around
there. Someone may come to pick it up, and ru
have a new lead.
(CONTINUED)
'-·
· .. ··-� -,·:. ', .
\ ,•
.__ .... _
C01'.7ThrUED:
He grabs his jacket, and sees that Carolina has sewn the bullet hole shut and
cleaned the blood off.
MARIACHI
You sewed it up. Thanks.
Carolina shrugs.
MARIACHI
Why a.re you helping me?
CAROLINA
I don't know.
Mariachi turns and leaves. The door closes and he's gone.
CAROLINA
( to herself)
Because I'm attracted to you, you're dangerous ...
and I'm bored.
....
curro:
EXT. NA VAJAS IN 1HE STREETS - DAY
Right Hand and his men cruise the city streets in the limo. At a stop light
little kids try and dean the windshield. The driver waves them away. They
try and clean it anyway. The driver turns on his wipers. The kids try and·
clean the wind.shield in between wipes.
RlGHTHANO
We should have taken my truck.
The other Henchmen feel out of place as well, except for one. He looks like
he's having a good time.
They slow down near alleyways. 'The men that are searching on foot climb
into the car after an area has been checlced.
Navajas is at a pay phone, watching the car go by.
EXT. BUOIOAT1HERANCH -DAY
Bucho gets a call. He picks up the phone.
BUCHO
Yea.
CUTTO:
(CONTINUED)
(_ . .
Bucho listens intentlv. He doesn't like what he hears . .,
BUCHO
Look. .. I didn't call about it sooner because ...
Bucho's face flushes.
BUCHO
... I knew I could handle it. He's in town and he's
got no place to go, we've got him.
Bucho doesn1
t like what he's hearing.
What
BUOiO
do you mean you've sent someone in
already? How long has he been here? Well who is
he? Where is he?
What
(pause)
are you tallcing about, we can handle this,
someone like that's just gonna tear the place up,
make a lot of noise!
{pause) Look, I gotta know who he is or the wrong people
will get hurt ... Next time, I promise ... ru tell you
about it sooner, but I knew we could handle
<click> ...
Buc:ho slams the phone down.
BUCHO
shit ....
He thinks for a whole two seconds before snatching the phone back up. He
stalls over the dialing ...
BUCHO
{to his men)
What's the number to the phone in my car?
His men exchange glances.
BUOiO
(to all his men)
Hey, fuc:khead.s! What's the number to the phone
in my car!
No pne seems to know. A few even say they don't know. A few others take
small, smooth steps bac..k.
{CONTINUED)
\._,,.. .·
--···•·:
CON1ThTlJED:
. . ..
Bucho pulls out a gun and FIRES a roUlld into the air. He has the phone .in
his other hand, shaking it violently.
WHATS
BUCHO
TifE 1'lt.JMBER TO TiiE PHONE IN MY
CAR!!!
EXT. MARIACHI GOES TO CHURCH • DAY
CUT TO:
Mariachi walks out an the-street He passes NA V AJAS, who is sitting in a
horse drawn cai:riage.
Navajas watches Mariachi" tum the corner, then starts after him.
Mariaclti walks towards the church in the far distance at his usual pace. No _
need to feel rushed, no need to look anxious.
Navajas produces another shiny steel TiiROWING I<NIFE. He effortlessly
flips it around in his hands. It makes a sound as it curs through the air.
TCHOOK TCHOOI<. He picks up his pace, but doesn't get too close to be
noticed ... Mariachi knows what he looks like now.
Mariachi is piclcing up his speed. 'l'.he church is a block away.
Navajas produces ANOTIIER BLADE with his other hand. He slices the air
with his knives alternately. TCHOOK TCHOOK. .. TCHOOK TCHOOK. The
sound is almost musical, the rhythm underscores the scene and heightens
the tension.
The scene builds as the blades TCHOOK faster and the gap between the two
men lessens. Navajas is about half a block away.
Mariachi's arms flail upward as a TiilJNK is heard, pushing him forward.
Mariachi tries to strain his head around to see the shiny metal protruding
from his back.
Navaja.s. flings a few more knives at Mariachi. One plants in his leg, the other
in his forearm as he tries to shield his face.
Navajas peels his shirt back, revealing· a BELT FULL OF .KNIVES.
Mariachi pulls himself up and tries to run into the alley.
Navajas throws four more knives in rapid succession at Mariachi. A few hit
with audible TiiUNKS.
A POLICE CAR pulls up and the cop that caught Mariachi the first time steps
out He is bandaged about the head. He looks pissed.
(CONTINUED)
coi--rrn-..UED:
Navajas tosses a few kruves his way. nruNI<, TiruNK. Down for the count.
Mariachi, with his arm raised, pulls the knife from his forearm as the .45
pops up from his sleeve and into his hand. In his other fist he's holding the
removed knives in a grollp to form one big bloody weapan. He's ready to
fight.
Navajas SEES Mariachi behind a TRASH CAN, but before he can thrbw his
death blades, and before Mariachi can rush out for the attack ...
... the BLACK LIMO pulls up behind NA V AJAS. The sunroof opens and a
Henchman RISES up through the roof.
HENCHMAN
I don't know you. ..
Navajas spins and LAUNCHES the blades just as Henchman RIPS Navajas
to shreds with accurate bullet hits to the chest.
The blade missiles plant deeply into the Henchman's face and neck. He
grunts as he falls back down into the Limo, his grip loc.ked tight on the trigger
of his gun which lowers INTO the Limo.
The men inside YELL as bullets BOUNCE around iNide the car.
Henchman's face and body are pummeled until his dead hand is FREED
from the trigger.
A few Henchmen climb out with their guns pointed.
Navajas struggles to stand, blood spilling from his mouth. He to�ses a couple
·of blades out and pegs the nearest Henchman.
The other Henchman shoots Navajas dead.
The Henchmen grab Navajas and the dead henchman, stuff them in the
trunk and drive off. They never even see the Mariachi, who's stumbling off
to the other side of the alley.
CUT TO:
EXT. BACKATTHERANOi-DAY
Bucho is on the phone. The camera is on him. We see no one else.
BUOiO
(quietly)
Hey. It's me again. About that guy you sent. ..
(pause)
I know, I just have one question. What's he look
like?
(MORE)
(CONTINUED)
CONTINlJ'ED:
. BUCHO (cont'd)
(louder, fed up)
Just so we know, so my guys don't get confused!!!
(long pause)
I know your guy's good, but in case we find him ...
acc:idently. I just want to cover all bases, alright?
Right Hand and his men are DRAGGING Navajas's body to the table.
:
BUCHO
Dark hair, dark skin. Yea, I figured that .. can you
give me a few more details. It will be worth our
while. Tattoo on right shoulder?
Bucho turns to see if he Navajas matches the desaiption. The Henchmen lift
up Navajas's sleeve. There's a TA1TOO of the Colombian flag on his arm.
BUCHO
What else ...
A necklace? A necklace, with two knives aossed ...
The men open Navajas's shirt They find a NECKLACE. They hold it up to
inspect it At the end are two CROSSED KNIVES.
BlJCHO
Any weapons?
The men wait for the next desaiption. ...
BUCHO
Thro�ing knives ...
Right Hand is about to look for the knives, stops, then simply points to the
corpse lying a few feet away.
TiiROWING
Bucho turns to
I<NIVES
see the dead Henchman lying on the ground with the
buried in his head and neck.
BUCHO
(repeating slowly)
.• .and a pocket full of coins to call you from pay
phones with progress reports ...
Right Hand pulls a handful of coins .from Navajas's pocket and dumps them
on the ground.
BUCHO
(scowling)
Okay, That should do it Thanks.
(about to hang up)
Yea, we'll stay out of his way ... Okay ... Bye.
(CONTINUED)
L-
-
\
CONTINL "ED:
Bucho hangs up.
FUCK!
BUCHO
Right Hand lets out another one of his ill-timed, sh�rt hursts of LAU�HTER.
He shakes it off quickly, his eyes widen and blink like ha. got so�ethil'\g in
his eye.
Bucho PACES about. He KICKS the Henchman's dead bod..J�
BUCHO
(to-Right Hand)
'This is what I was talking about We're being
watched'by our own guys. He's been here since this
morning, c.hec.king up on us. Bastards sent him to
check Up Ort US.
Bucho KICKS Navaja$' dead body.
BUCHO
The time to find this guy is now. Shoot first, check
pocket5 later.
EXT. MARIACHI AND nIE BOY - DAY
CUT TO:
Mariachi is against an alley wall, trying to catch his breath. He has makeshift
tourniquets around his forearm and leg.
Mariachi sees the BOY out on the street with his guitar. He's not practicing.
He's not doing anything. He's just standing there. Mariachi wallcs out back
from the alley. He calls out to the Boy.
MARIACHI
Manito!
The Boy sees Mariachi and waves. He nms · aaoss the street Mariachi looks
both ways. No one is around.
MARIACHI
Why aren't you practicing? I told you: everyday, all
day.
NINO
I can't play this guitar.
(CONTINUED)
�-
---�
CONTINtJED:
.MARIACHI
What
(beat)
are you talking about?
NINO
It'� my father's.
I have to go get mine. Come on.
Where
MARIACHI
are you going?
NINO
I'm going to get mine.
MARIACHI
(looking about, checking his wounds)
I'll wait here.
NINO
It's right over there.
Nino points aaoss the street, a block over.
MARIACHI
What's over there?
NINO
My
practicing.
guitar! Come on. I w�t to show you rve been
Ni.no stops in the middle of the street to turn around and call Mariachi.
NINO
Come on!
Mariachi runs out and grabs the kid just as the big white MACK TRUCK
nearly bowls them over. Mariachi delivers the boy safely to the other side of
the street.
The camera dollies with Mariaclti as he follows Nino, looking cautiously.
from side to side, back to front. Mariachi is in obvious pain.
NINO
It's over there.
Mariaclti is cautious. The camera· tracks down the street, the two of them
waiking along the sidewalk.
Mariachi's POV of the Boy walking ahead of him. Mariaclti stops.
(CONTINUED)
\._ . . .
C0!\/"111,iltED:
The Boy continues to the comer and peers around it. Two Shot of the two of
them standing there against the wall.
Qose-up of Mariachi looking over his shoulder. He starts walking again.
Mariachi POV as he walks towards the Boy, and taps him on the shdulder.
MARIACl-Il
Where's the guitar?
NINO
Wait a minute. It's coming.
Nino is looking around the comer. He tu.ms to Mariachi. Pushes him back a
little bit.
NINO
Stay back there. No one else is supposed to be here.
Mariachi smells a rat. He slowly reaches into his ex>at and finds his gun.
Low Angle Shot of the Boy peering around the com.er. Behind him we can
see the GUN lowering to Mariachi's side.
A beat up old VOU<SW AGEN Bug is puttering �t a distance.
NrnO
( easy going) See? Here it comes.
Extreme Oose-Up of Mariachi carefully sneaking a PEAK around the comer.
The Volkswagen slows to a aawl as it NEARS the sidewa.llc. Nino· walks out
to the edge of the side�alk and UNSTRAPS his guitar.
The window to the Volkswagen rolls down. An IDENTICAL GUITAR is
SWITCHED with the Boy's guitar.
NINO
(to the man in the passenger seat)
Thanks.
The car IDLES as the guitar is checlced. The car finally speeds off, TURNING
at the comer where Mariachi is standing. They SLAM on the breaks when
they see Mariachi standing behind the Boy.
Mariachi fingers the gun. Ready to start blasting if anyone breathes.
The car is idling. Wondering what to do ...
{CONTINUED}
'"--.-:'.: .
CON"IThilFED:
NINO
(to Mariachi)
See? Now this one I can play.
Nino notices Mariachi's gun ... then looks over to the stopped car. I
;
Mariachi THROWS Nino around. the comer to the ground. The car d¢>ors
swing open and Mariachi does a running dive, BLASTING all the way.
The bullets TE.AR UP the first man out the door, and Mariachi lands atop the
car, sliding till his feet KICK the second man leaping out the other door.
Mariachi lands on him and FIRES a blast deep in his gut, using his body to
help muffle the shot. Mariachi throws him down and checks the tiny car for
anyone else. No on�.
Mariachi grabs the switched guitar.
Nino is pie.king himself and HIS GUITAR off the ground. Mariachi grabs
him by the arm and carries him back behind an alley.
EXT. D'-1 TI-IE ALLEY - DAY
Mariachi drops the kid on the ground, takes the switched guitar and
SMASHES it against the wall.
Several WHITE BAGS fall to the ground.
Mariachi is furious. His face is hot, and he shakes with rage.
Nino nods ...
MARIACHI
(breathing hard)
This is your father's guitar?
MARIACHI
Is this why he doesn't work anymore? Too busy
ma.king you carry this stuff for him?
NINO
All I have to do is carry my guitar around. They
switch guitars every few weeks.
MARIACHI
What do you get out of it?
(CONTINUED)
\,.__.,
... ',.__.-·
NINO
(shrugs)
My father doesn't have to work. He sits home and
watches TV.
MARIACHI
What else does he do?
NINO
That's it. They drop stuff off af the house for a
while if it's a lot, or they swi� guitars if it's only a
little bit My ctad says they're getting smarter, so
they hid� it all over. Ladies with baby c:a.rriages,
churches. Ask Carolina. She'll tell you. She does
the same thing. She's richer than my dad.
The camera is on Mariachi. Rage.
EXT. MARIAOil AND CAROLINA- DAY
CUT TO:
Carolina has a PACK.AGE in her arms and is unlocking the front door to the
Bookstore. She turns and sees Mariachi striding at her with the face of a
madman
He GRABS Carolina gently but firmly. He PUSHES her towards the door. She
is resisting his sudden aggressiveness.
The VENDOR is ST AND�G aa055 the street He is WATOilNG CLOSELY
at what is happening. That jolly old smile he usually sports is nowhere to be
found. Right now, he's all business. _
VENDOR'S P.O. V.
Mariachi forces Carolina inside.
The Vendor walks off. A large trailer truck approaches, finally passing in
front of us, obscuring the Vendor from our view.
CUTTO:
INT. MARIAOil AND CAROLINA- DAY
Mariachi THROWS Carolina up against a wall, a .45 shoved firmly against
her throat.
MARIACHI
What have you told him?
(CONTINUED)
·� . .
C01'.'TINl;'"'ED:
MARIAC
(yelling)
You work for him, and I want to know what
you've said!
CARO
It's my job to look the ther w·ay, and rve done
that. As far as I'm cone ed ..• you don't exist.
Carolina's back is against the wall.
off camera. From this artg le all we
would seem to be Carolina.
ariachi SPINS and throws a punch right
see is Mariachi punching away at what
We switch to a two shot and see tha he is punching the bookcase right beside
her face. She's flinching but realizes he means her no real harm.
MARIA
All this time, you're te · g me, "let the cops
handle it. .. " And all thi$ time you've been
protecting the bastard. should kill both of you.
He PUSHES her away.
CARO
If I wanted to protect
were here. I didn't.
MARIAC
A
, rd have told him you
. Well, you sure don't w t him dead.
MARIAC
(shaking his hea furiously)
I'm going to stop this. m going to stop him.
CARO A
There are people above him with power you
wouldn't. believe. How ar are you prepared to take
this? fve tried to help ou but you'd rather be dead
than see what's really oing on.
(CONTINUED)
C 01'.!Thl.JED:
MARIACHI
I see that you're no better than he is.
CAROLINA
Look ... I don't sell the drugs, I don't move the
drugs. All I do ...
(she quiets down)
... is what I normally would do.
MARIACHI
Which
(impatient)
is ...
CAROLINA
I run a legitimate business. lbe bookstore, my
bookstore.
(Mariaclti laughs)
They only use this place as an occasional storage
until someone else comes and picks up ... whatever
they're storing. So, as far as rm concerned. .. that's
all I'm doing is renting out space.
MARIACHI
Renting space, that's all you're doing ... How much?
CAROLINA
The Back room.
MARIACHI
No ... How much does he pay you.
CAROLINA
(beat)
$150,000 a year. Cash.
Mariachi's face shifts. He stops what he's doing and lies defeated against the
counter. How can he get people that make that kind of money for doing
nothing to rally behind him?
Carolina sits down ·next to him. She lays her hand on top of his.
CAROLINA
I was trying to run this place, and it wasn't working
out. I would have had to close it down. I cfjdn't
want to have to go to the United States, find work ...
cleaning houses. I didn't open this place just to see
it fail.
Mariachi isn't listening _anymore. He's thinking of Domino.
(CONTINUED)
(_,,.. •, :
\, . '
-�::,. .·
--· . ' � .
-
CAROLINA
One day someone walked in with a Suitc.a'Se or
money, and said, "take this, and just keep doing
what you're doing. We'll leave some things in-the
back every once and a while, and they'll .get picked
up a few days later. You just go about yDui
business ... you won't be in any danger. For that you.
get $150,000 a year cash."
Mariachi doesn't seem to be hearing anything. He's staring.at his .45.
CAROLINA
Don't you-get it? Thes e guys want to blend in They
pay legitimate businesses to use them as fronts. At
least [ put the money to good use ... 'This town
never even had a bookstore until I built this place.
MARIACHI
And the customers are just lining up.
CAROLINA
(miffed)
Toe money keeps this place open. Some of it,
anyway. I stash the rest. Someday, ii things start
getting bad around here ... ru have the money to
leave.
MARIACHI
You're not impressing me ...
She quiets down.
CAROL.il'lA
Once I said yes, I was a part of it. They're not going
to let me quit. I could have refused it, but I wanted
this place to succeed. I created my own problem
and I'm dealing with it Why don't you quit?
MARIACHI
I swore I wouldn't give up until lt was over. l
didn't aeate this problem. Men like Bue.ho did. But
like you. .. rm dealing with it.
Maria chi aouches to the floor. It's dark out. Carolina joins him on the floor.
She places her hand on his.
CAROLINA
I can't convince you that there .is some good to
what I'm doing, and you'll never convince me that
(MORE)
(CONTINUED)
\
'--,.-··
-.. . ...___, .
COl\i-n:Nt:'ED:
. c�qLINA··(cont'd)
what you·re domg is good for anyone other than
yourself. So let's just drop it ... okay?
Carolina finally notices the tourniquets and blooa soaked clothes.
CAROLD'-JA
God, you're a mess again.
Mariachi notices the package on the ground.
MARIACl-ll
. (tired)
What's that?
CAROLINA
It was for you.
Mariachi lifts the package off the ground. It resonates. He lifts the guitar out
of the plastic bag. His eyes are on Carolina. He finally drops his gaze to see the
craftsmanship. It's good.
MARlACHl
Is it still for me?
CAROLINA
(smiles)
I didn't get you a �, since you already have one ..
He strums it lightly. Good sounding, too.
CAROLINA
I hoped I could convince you tp dear the guns out
of your case, and put this in it instead.
Mariachi looks up at her. She moves close to himCAROLINA
Play something ...
She grabs his hand. The mood sweetens.
We see his mangled hand.
MARIACl-ll
I can't play anymore. My hand is all saewed up.
CAROLINASo you improvise ...
(CON11NUED)
(
'y
'"1:_"-
CO�'TTh!u"'ED:
She straps on the guitar.
CAROLINA
Have you even tried? When things weren't going
right, what would you do? You'd play wouldn't
you. Now, when things don't go your way ... you
leave it all bottled up inside. \-Vhat do you do to
release ·it?
MARIACHI
Kill drug dealers.
She stares into his eyes. She straps on the guitar. Places her hand over his,
leading it to the strings.
CAROLINA
Put your fingers here. I think this would be better
therapy.
She starts to strum lightly with B01H of their hands. Her other hand is
taking care of the fret fingerings. She's starting off slow ... soft.
Mariachi seems a bit surprised that she knows how to play.
MARIACHI
You play?
CAROLINA
A little bit.
She's playing competently enough. You can almost make out the melody.
MARIACHI
You're skipping notes.
He points to where the fingerings go, humming the notes as he shows her
the correct placement.
Carolina again meets his gaze.
CAROLINA
You see? You're remembering already.
They're playing the song now. Her fingerings, and their strumming.
Mariacl\i begins to pick the strings, his fingers popping the taut strings in
clear, clean fl.ides_ They sound good. Mari.aclu is playing slowly. It's as if he's
hearing the notes for the first time. They don't .flow as easily as they used to,
when they meant nothing ...
(CONTINUED)
\
. -�� -�·
C01'1 "TINUED:
The melody is elaborate ... haunting. Carolina leans her head against his
shoulder.
She kisses the sid.e of his faa. He's lost in thought She kisses him again. He
isn't responding. Again she kisses him. He looks up at her. They kiss. Ifs
getting warm in here. They slowly drop out of frame. He strums an enq.ing to
the song as they disappear from the saeen.
The screen is empty. 'The theatre audience is trying to peer over the frame
line to see what's going on...
FADE our:
EXT. BUCHO SENDS MEN TO GET GIRL· SUNRISE
Bucho comes out of his hacienda. Right Hand and his men are gathered
around.
RIGHT HAND
He's hiding out in the bookstore. It seems what's
her name has been keeping our boy warm at night.
BUCHO
How do you know?
RIGHT HAND
We got a call from one of our point:men.
BUQIO
(to his men)
I don't want a lot of noise over this. I want it done
clean, I want it done neat. .. and I want it to look
like an accident.
RIGHT HAND
How do we do that?
BUCHO
It's a bookstore ... Bum it down.
INT. CAROLINA'S BED .. SUNRISE
Cose on Carolina. Asleep. Peaceful.
The SOUND of someone humming a familiar tune ...
CUT TO:
CUTTO:
I
'-·'
�'-..-.-· ..
The humming can still be heard on the·soundtrac.k. We SEE Bucho's
henchmen sneaking around the back. . .
BACK TO:
CARO.LINA
Sleeping peacefully as Mariaclti creeJ?s into-frame. He kisses her head, and
sings softly: · · MARIACHI
Estas son, las mananitas,
He gently pulls the sheet back, just a bit. .. Exposing her clean, silky shoulder.
He KISS£S her skin.
MARIACHI
Que c:.antaba, el rey David ...
He pulls the sheet bade a bit more. Her soft baclc glows in the morning light.
He KISSES the newly exposed area.
Carolina's eyes open.
MARIACHI
.. .inspirada.s y bonitas te las cantamos ...
More sheet lost, more beautiful bade exposed. More wonderful KISSES.
Carolina is aware, yet silent. Playing possum.
MARIACHI
... a ti ...
He RIPS the sheet completely off.
Carolina's FEET WHACK Mariachi upside the head. She laughs as Mariaclti
rolls off the bed, thudding heavily to the floor. Carolina� over the side
of the bed to view her handywork; Mariachi i.s on the ground.
CAROLINA
You lcnow. You'd be the man of my dreams if you
didn't carry those guns around.
(CONTINUED)
'-....,.-•
..
\ '
,,,_-·
CONTINUED:
MARIACHI
Maybe I'll give them up.
CAROLINA
(trying to hide her excitement)
Really?·
A noise off screen on the balcony.
Mariachi puts his finger to his lips, BEGGING for silence.
CAROLINA
(laughing)
What's wrong?
Mariachi rises slowly, finger pressed firmly to his lips.
Carolina holds her hands up in defense, laughing. Expecting a double cross.
Mariachi has his senses tuned towards the wn,.roow BEHIND 1-ilM.
He spots his guitar case across the bed ... yet he remains motionless.
CAROLINA
What is it?
MARIACHI
shhhhh.
The window CRASHES open with RAPID GUN FIRE.
Before Carolina can saeam Mariachi is DIVING over the bed. Carolina holds
the blanket up to shield her. She's defemeless in her bed.
The man at the window is now inside the room and AIMING a gun at
Carolina.
Mariachi BOLTS up from behind the bed with the biggest FIRE.ARM: you've
ever seen. Yes, the one from the Opening Scene. He really does have one of
those.
One blast sends the Bad Guy SOMERSAULTING backwards by the impact,
crashing him hard and twisted to the floor.
Mariachi spots a BACI<-UP man climbing the balcony. Mariachi and the BadeUp guy both SHOOT at the SAME TIME.
In mid-air a puff of SMOKE accompanies the SP ARKS and sound punch that
takes place at the center point BE1WEEN them.
(CONTINUED)
\,_,..·
'--a: -· '
CONTINUED:
A small METAL OBJECT ruts the floor.
�ariachi and the Bad Guy both notice it. Mariachi is first to SHOOT again.-He
hits Bad Guy square between the eyes, the impact sends him .somersaulting
over the balcony.
CAROLINA
Who the hell was that?
MARlACHI
We're getting out of here.
Half dazed, Carolina looks about the bed for something to wear.
CAROLINA
But ...
More HENCHMEN are SURROUNDING the building.
MARIACHI
( whispering)
Let's go!
More HENCHMEN coming around the BACK.
CAROLINA
(upset and disoriented)
I need to get dressed. ..
Mariachi grabs her by the arm and drags her off the bed.
ANGLE ON
·Their running feet. Mariachi has his boots on and is ready to go ... while
Carolina's BARE FEET pitter patter aaoss the floor. They stop at a
1vilSMA TCHED pair of SHOES and she slips them on as ...
Mariachi grabs his jacket and n!ROWS it to her.
As she slips on the jacket, Mariachi picks up the SMALL OBJECT off the floor
and inspects it as he walks towards her.
Clos�up of t,he two bullets SMASHED TCXiE1HER forming a tiny sculpture.
MARIACHI
Two bullets smashed together in mid•air. Never
seen that before ...
They barrel out the door as she buttons up. Jacket, panties, nusmatched
shoes. She's ready, record time.
(CONTINUED)
\
'-�-
'
'
·•, �,
..... __ _
-
CO!\."TIN"L""ED:
They BURST out the staircase door ... - MARIACHI
You look lovely ...
Tiiank
CAROLINA
you ... where are we going?
MARlACHl
Downstairs and out the front.· --
Down the stairs. They open the door where the main room of the bookstore
is· ENGULFED in flames.
CAROLINA
Oh Jesus ...
Mariachi grabs her and pulls her back up the stairs. He looks about for an
escape route. A mouse in a maze with starving-cats on his tail.
Carolina PRIES her arm from his fatherly grip, and snatches a .45 from his
belt. She grabs his a_rm and pulls HIM along.
c.AROLINA
You're following me. We're going up ...
A HENCHMAN appears at the top of the stun. Mariachi SHOOTS him
before the guy has a chance to take aim.
He falls, 11.J?vfBLING down the stairs.
Carolina gives him several sharp KICKS as he rolls past.
CAROLINA
( as she kicks)
Bastard! Bastard! Bastard!
As they climb up to the ROOF, Carolina looks over the side of the building
and watches the flames lick the walls.
They run to the OPPOSITE side of the roof where they can jump to another
building. He peers over the side. A few men WAITING down in the alley fire
a few rounds up at him. He pulls away as the conaete near his face COUGHS
up CHUNKS OF ROCK.
He puts his guitar case down and they both walk slowly back towards the
middle of the roof. He glances over his shoulder to see if anyone is climbing
up from the other side.
(CONTINUED)
,,
.......... 7
. .
: ,
CONTtNti'ED:
They scope their surroundings, trying to think of another way out of this.
There isn't any.
Mariachi and Carolina grab each other's arm and pull themselves close for a
_huge KISS as the camera slowly dollies in to a medium close-up._
They break apart from each other, exchanging desperate looks as Mari�chi
releases the empty clip from his gun.
A Shot at the ground level shows the empty clip hit the ground.
From this angle we see Carolina removing her mismatched shoes and
putting them in her coat pockets.
Mariachi shoves a fresh clip into _the gun and chambers a round as Carolina
breathes heavily, knowing what they have to do.
Without warning they both break into a sprint towards the edge of the
building.
Mariachi BLASTS ROUNDS over the side at the men below and ...
Carolina LONG JUMPS the chasm between the two buildings, landing on a
lower LEDGE of the ADJACENT BUD..DING.
Mariachi THROWS the guitar case over to her. She guides it to a spot beside
her and she chambers a r.ound in pistol.
Mariachi hops up to the ledge and BALANCES himself, ready for his jump.
Carolina starts BLASTING at the men below.
TI10 BAD GUYS have CLIMBED up the opposite side of the roof and start
SHOOTING at Mariachi's back. Mariachi nearly falls over as the bullets lick
his heels and take dlc.s of his ledge off all around him.
Mariachi shakily SWIN'GS around to RETURN FIRE, and almost falls over.
His heels are TEETERJNG on the edge. He bends his knees and pulls a
SECOND PISTOL out from his c:oat ...
He CATAPULTS himself off the building BACK\iVARDS, both guns FIRING
as he flies blindly to his destination. One of the Bad Guys on the roof is fatally
HIT during this feat.
Carolina looks up and almost double takes at the sight of Mariachi JUMPING
BACK\iV ARDS towards her.
The men below take this opportunity to fire up at the Mariachi as he flies.
(CONTINUED)
�.
. ,·
--.
,,,.__
,· .. ,,
I
' ---
'··
CO�""TIN"UED:
She ROLLS out of his way. He SLAMS down ha.rd next to her, GASPI�G for
the wind that was just knocked out of him, She grabs hold of him to keep
him from falling over the side.
The second Bad Guy nm.ows himself over the chasm and lands on ithe
HANDS.
ledge with his chest. He slides down, barely catching himself with BotH
He DANGLES precariously over the side.
' I
Both Mariachi and Carolina stare helplessly at the Bad Guy as he tries :
desperately to climb up. Blood seeps from the comers of h.is mouth. He looks
genuinely TERRIFIED, and quite pathetic. This dilemma disturbs Mariachi
and Carolina.
One of the Bad Guy's hands SUPS, and we can tell Carolina is pondering
saving the man. Mariachi is thinking the same thing.
Bad Guy brings his hand back up, only this time it has a GUN in it.
Our Heroes' expression changes from one of concern, to one of CONTEMPT.
They KIO< him off.
The camera FOLLOWS the Bad Guy all the way to the ground. As he hits the
ground with a grotesque thud, the camera then pans up to reveal the oth�
Henchmen, who are now prompted to fire several more shots at Mariachi
and Carolina.
Mariachi takes two GRENAD5 from his case and pulls the pins. He holds
them up for a few seconds then DROPS them over the side.
Two Henchmen below try to be slick, CATOilNG the falling objects. By the
time they realize what they've caught it's too late. BOOM.
Mariachi and Carolina climb up and LEAP to another building, then to yet
another.
etrrTO:
EXT. 1HE LIMO our ON TiiE SI'REE1S. DAY
The Limo pulls up a few blocks from the bookstore and Bucho steps out. He
watches the building BURN. His men come out and give a report.
EXT. MARIACHI AND CAROLINA ATOP A BUILDING· DAY
Close-up of Carolina watching the bookstore bum, as TEARS stream down
her face. Mariachi has his arms around her. They are on a safe perch a few
buildings away from Bucho.
(CONTINUED)
·'--•'
',
\., __
CONTINUED:
M.ARlACHI
I'm sorry, Carolina ...
Through her soaked eyes she sees Bucho. Surveying his handiwork.
CAROLINA
lhat's the bastard down there.
Mariachi sees the baclcside of Bucho.
MARIACHI
(moving quickly)
I can get a clean shot of him from here.
He grab� his case and finds a suitable weapon. He positions himself.
Bucho turns to get in his Li.mo. We get a good look of his face. So does
Mariachi. Mariachi stops short.
Bucho pauses at the door of his car to say something to another Henchman.
Mariachi is studying Bucho's face. Bucho STRIKES the Henchman and
POUNDS the hood of the car. We can tell by this exchange that Bucho knows
they escaped.
Mariachi
EXTREME
lowers his gun. His eyes are wide, his expression is one of
PA.IN'. He grips his head ·tightly, as if trying to squeeze a migraine
from his skull ...
CAROLINA
What are you doing?
Mariachi, confused, puts the gun down and stares bac:k �t her.
CAROLINA
What are you doing? Shoot the bastard!
MARI.Aon.
(realizing what she's saying)
. You didn't want me to kill anybody!
CAROLINA
. My whole life was in there! He destroyed it. He did
the same thing to you. We can do the same to him!
MARIACHI
If I shoot right now, they'll catch you. I don't care
what happens to me, but I want you to get away
safely.
(CONTINUED)
'--.---"
I '
\..__...•
CONTINu"'ED:
CAROLINA
I don't care what happens to me, he destroyed
eyerything! Shoot the bastard!
Mariachi does not understand this woman, and it shows on his face.
She sees that Bucho is already in the Limo and driving away.
. -
CAROLINA
Dammit he's getting away! You had the perfect
·chance!
'MARIACHI
I can't go on shooting everybody� you said so.
yourself. And I'm starting to believe you.
CAROLINA
I don't care what I said before.
MARIACHI
I'm getting you out of here.
He pulls her away from the sight of her burning building.
Il'JT. HOTEL - DAY
DISSOLVE TO:
Mariachi and Carolina in a room. Mariachi still seems to have the splitting
headache. He looks ill.
MARIACHI
We leave town. Take some the money you've
stashed and leave town.
CAROLINA
There is no stash money an�ore.
MARIAQll
You said ...
CAROLINA
It's gone. I had it hidden-in the books on the top
shelves of my bookstore.
Mariachi looks lilce he's lost all hope.
(CONTINUED)
----.,_ ,,'
',
CAROLINA
What about you. Any family?
MARIACHI
Parents gone.
CAROLThlA
Siblings?
MARIACHI
I had a brother. Lost him to drugs, too.
Mariachi thinks. His head must be splitting in half because he tries to crush it.
CAROLThJ'A
What about the friends you talked about?
MARIACHI
(thinking)
No, those guys are c:razy. Thetd shoot up half the
town and Bucho would still get away.
He pulls out the wad of CASH Buscemi gave him .. MARIACHI
I've got this, but it doesn't count.
CAROLINA
Where'd you get that?
MARIACHI
It's an advance to kill Bucho. Paid by the family of
a drug enforcement agent that Bucho had killed.
Buc:ho was never taken to justice so they want him
dead.
CAROLINA
I thought you were going after Bucho for personal
reasons.
MARIACHI
I am. But since they were willing to pay me for
something I was going to do anyway, I figured it
wouldn't hurt to come out ahead for once. But if I
don't go through with it, they're going to want this
bad.
CAROLINA
I don't think we've got a choice ... Something has to
be done. I can't go around wondering when they'll
aeep up behind me and put a bullet in my head.
(CONTINUED}
'
'
\., .... _,. '
CONTIN'tSED:
He finally stands and slowly walks over to the phone. He lifts the receiver
and searches his mind for the number. He finds it and pWlches it in.
MARIACHI
Campa? Que onda, wey. Is Quino there? Where is
he? How fast can the two of you get to Santa
Cecilia? Good. Same thing as in Piedras. Yea. Hurry
it up. No, ru be looking for you.
(beat)
Because you're easy to spot.
The bullets shine in the light. Carolina is almost entranced.
MARlACI-ll
Thanks, Campa. And, hey ...
The camera dollies in.
MARIAOD
... bring your guitars.
Carolina slowly looks up at Mariachi, who puts down the phone and turns to
meet her gaze. The music froths, then boils over ...
CUT TO:
EXT. BUCHO'S RANCH - DAY
Right Hand and his men are standing around like idiots. 1bey've missed
Mariachi again, and Bucho is ... enra�? Is that a strong enough word?
BUOiO
It's one thing if you can't find someone running
around a city, hiding any place he chooses. I cam
understand that. What I can't understand is how
WHERE
you can let him geT A WAY WHEN YOU KNEW
HE WAS!!!
Bucho's men are silent.
BUCHO
The time to get this guy is right now! What do I
pay you for! Do I gotta do everything myself?
Right Hand is humiliated. His men shuffle nervously knowing this could be
their last stand.
BUCHO
You take my car! You drive around ... When you
see someone you don't know ... you shoot them!
How hard is that?!
(CONTINUED)
·'--:····
' .
\, __ ·' . ,c...
--·
··�
-
CO?'-."TIN"L'ED:
Bue.ha grabs Right Hand's GUN from· his belt. He SURVEYS the courtyard.
One of the men that screwed up is standing at what Re -feewis a safe distance
from Bucho. About 20 YARDS AWAY.
Bucho SINGLES. him out.
BUCHO
(acting out the scenario)
LOOI<! Who's that over there?!
Everyone looks at the 20 Ya.rd Henchman.
. BUCHO
I don't know him!
--
Tl)e 20 yard Henchman looks con.fused. Right Hand doesn't want to watch
this.
BUCHO
rve never seen him before! Look! HE'S
CARRYING A GUN! That must be him!
Bue.ho raises his gun and FIRES at the 20 yard Henchman, the bullet taking
part of his head to the growui. His lifeless body follows.
BUCHO
(to Right Hand)
How hard- is that? It's that easy!
Bucho shoves the gun back behind Right Hand's belt.
A GROUP of Henchmen, stunned by the sudden loss of their comrade, a.re
standing at what they think is a safe distance from Bu� at 30 yards.
BUCHO
(another scenario)
LOOI<! Over there!! Buying a taco! I don't know
those guys!
Bucho grabs the gun back from Right Hand's belt.
The GROUP of Henchmen at 30 yards SPIN AROUND and LEAP over some
BARRElS for cover.
Bue.ho FIRES at them. He misses.
BUCHO
(back to Right Hand)
How hard is that, hah?!
(CONTINUED)
\.�-••'
cor--. -rn,Ft.TED:
Bucho shoves the barrel against Right Hand's forehead.
BUOiO
BANG!
11_unk
(lowers the gun)
you can handle that? Or do I gotta do
everything myself?!
Right Hand takes the gun and replaces it behind his belt.
RJGHTHAND
fll h·and.le it. rm taking my truck.
Right Hand storms towards his TRUCK, a big Monster Truck, almost like a
tank, a Macho Mobile, a real man's vehicle.
BUCHO
You're taking my car! That's what we bought it for!
Right Hand turns around and walks back to the Limo. They all pack in.
BtJCHO
Hurry Up!
As they're cruising away in the 1-in'.to, Bucho takes his pistol and FIRES at
them. The bullet deflects off the trunk, and the Limo PICKS UP SPEED.
CUT TO:
EXT. BUS ARRIVES IN TOWN • DAY
A passenger bus rides towards the camera, blurred almost beyond· recognition
by the heat waves that bakes the air. It pulls up to a beaten curb and chokes to
a stop. A short skirted young woman walks down the sidewalk to the stopped
bus. The camera walks beside her, never leaving her legs. From here we can
see the bus door slide open allowing CAMP A to exit. He is dressed in a black
mariachi SUIT, slightly worn, and carries a GUITAR CASE. He also has the
MONKEY on his back, also dressed in his own little mariachi SUIT. Campa
sees the woman. Love at first sight. He noels to her politely and she boards
the bus. He searches the city for a path that will take him to the rendezvous
point.
EXT. SHOESHINE CORNER· DAY
A man in another slightly worn mariachi suit rounds a comer occupied by a
couple of saaggly KIDS with SHOE SJ-m.ra BOXES. They attack him with
offers of a boot shine. He lays dowJ\ his two small CUITAR CASES and props
a boot onto the shine box. The other kid offers to do the other boot, so he
stands on that one as well. This is QUINO.
·\___,.. '.
lJ',JT. MARIACHI GETS DRESSED FOR 1HE SHOW - DAY
Mariachi, having just bathed, seems to be getting dressed for an important
concert. The song he taught Nino plays softly, simply in his head. He doesn't
expect to come out of this one alive. The song aoss fades into ...
EXT. NlftO PLAYS TiiE GUITAR • DAY
i
Close-up of tennis shoed FEET walking along the sidewalk at a low angle.
The camera CRANES upwards to reveal Nino practicing the song Mariachi
taught him. He's gotten so good at it that he's adding his own variation to it.
We can tell by the look on his face that he knows Mariachi will like it.
Note: The soundtrack builds around this little tune he's playing,
incorporating it, eventually drowning it out in a suspense filled crescendo,
before returning back down to the singular sound of the Boy's guitar. The
music builds as the scene builds.
EXT. GUITAR FIGHTERS ARRIVE· DAY
Cose-up of TIRES riding past the camera. We crane up to see the BLACK
LIMO cruising the streets. Right Hand and his men are LOADING their
weapons ... surveying the sleepy town's landscape for any sign of Mariachi.
EXT. GUITAR FIGHI"ERS - DAY
Close-up of a pair of B001S walking steadily through a deserted street. The
· camera CRANES up to reveal CAMPA as he heads towards the rendezvous.
Close--up of the newly shined boots of QUINO as he searches for �e others.
Here on out, Campa and Qu.ino will be referred to as the GUITAR
AGHTER.S.
EXT. 'MARIACHI • DAY
Close--up of SPURRED BOOTS walking steadily down a different street. We
CRANE up to reveal Mariachi. The camera dolly's ahead of him, giving us a
low front angle view of him as he searches for his Guitar Fighters.
MONTAGE
Different ANGLES, of IMAGES building rhythmically with the swelling
music BOOTS ... the LIMO ... the Boy's TENNIS SHOES .... The GUITAR
CASES ... the Boy playing GUITAR .. The WEAPONS loading in the LIMO ...
everything drops to:
The little song on the guitar. The camera is tight on the GUITAR PLAYING,
then cranes up, up, way up to show the ENTIRE STREET LAYOUT and the
situation the Boy is walking into.
(CONTINUED)
\ -.., ..
. .
�-
CON""!'Th.1.TED:
The two GtJIT AR FIGHTERS enter the frame and stop. From BE:-ll.ND the
camera, Mariachi enters and dominates the FOREGROUND- The Guitar
Fighters see him.
Mariachi takes his place beside them. The visual is comical, yet oddly
threatening. They a.re all deadly serious.
The Limo turns the comer, and STOPS dead in it's tracks. The Guitar
Fighters are waiting at the other end of the street.
. .
All is quiet. The Llmo idles. The Guitar Fighters are motionless. The rest of
the street is empty.
INT. INSIDE 11iE LIMO .. DAY
Right Hand and his Henchman have their eyes fixed on the THREE DARK
STRANGERS.
HENCHMAN
I don't know those guys ...
Right Hand grabs � phone. He PUNCHES in the number to Bucho's Ranch.
RlGHTHAND
Bring my Truck and everybody you can carry down
to the comer of Sabinas and Moros. Bring MY
Truck! Huny up .
HENCHMAN
There's only three of them.
RIGHT HAND
Just in case ...
nrE BOY rounds the comer, the camera following behind him.
Mariachi hears the TUNE and turns to see where it's coming from.
The Boy, concentrating on his music, doesn't see the LIMO behind
him ... By the time he sees the Guitar Fighters .•.
The Limo's sunroof BURSTS OPEN, and Henchman BOLTS up with a
MACHThJ'E GUN.
Mariachi opens his case as it drops to the ground, grabbing the big gun as the
two other Guitar Fighters take positions.
Slow motion of the Monkey diving off the shoulder of one Guitar Fighter as
he takes cover behind the other.
(CONTINUED)
\ .._, .. •
\ .......... _,.
. .
:-.
The Sunroof Sniper OPENS FIRE.
. . ...
Dirt KICKS up_around the Guitar Fighters.
- The Boy drops the guitar at the sound of the PIERCING BlT.tLETS and takes
c:over.
Mariachi RETURNS FIRE as does ...
GUITAR FIGHTER #1
This Guitar Fighter's GUITAR CASE is different. He doesn't have to open
the lid. The FRONT PANEL on the guitar SLIDES open, exposing the
BARREL. He siJl:tply aims the ENTIRE CASE. The barrel at the front of the
case SPITS the bullets. He �ply waves the guitar wherever he wants to
shoot.
The Limo is RIDDLED with bullets from Machine Gun Guitar Fighter's case_
All of which DEFLECT off the bullet proof swface. The Sunroof Sniper had
DUCKED into the Limo during the return fire, but now he bolts up for
another round as the Limo starts CRUISmG forward.
GUITAR FIGHTER #2
The second Guitar Fighter steps up to the. plate with HlS ase. His guitar is
different from the others as well. He simply SWINGS his case up to his
shoulder. It seats comfortably there, and in this position the case looks like a
ROCKET LAUNCHER He adjusts the weight, squats 'and FIRES. A loud,
dean MISSILE ejects &om the front panel and EXPLODES across the hood of
the Limo. This seems to �ause some major dents and topical damage, if not
shake up the men inside quite a bit.
The Sunroof Sniper is scared SHITLESS at this new development. The men
inside are. trying to get the phone to work. They are all shaken up.
The driver tries to restart the engine. The side doors BURST open and a few
men SCRAMBLE out, running for cover among the buildings and parked
cars.
The Machine Gun Guitar Fighter ANGLES his guitar c:ase in the direction of
the foot soldiers. He squeezes the HANDLE of- his guitar and ...
Close-up of the guitar, as. the panel SLIDES open once more. The barrel
rapidly spits bullets that TEAR UP the foot soldiers taking cover behind a car.
for
The
cover.
Boy wants to get
It is about ten
his
feet
guitar,
away.
which he had dropped earlier when�
MISSILE GUITAR FIGI-ITER lowers his guitar case to normal carrying
position.
(CON11NUED)
�--·
·, ___ .
Machine Gun Guitar Fighter gives a HAND SIGNAL directing Missile Guitar
Fighter to aim a little lower trus time ...
The Limo ROARS to life.
The Boy is eyeing his guitar, waiting for the right moment to crawl to it.
With the case hanging at his side, Missile Guitar Fighter re-arms the
launcher by SNAPPI'NG the case downward. It makes a RELOADI'NG sound.
He then smoothly 5\-VThTGS the case up to his shoulder, then squats almost
balletically. The move is beautiful to watch.
The Sunroof Sniper re-emerges as the Limo makes a hasty retreat. Sunroof
Sniper OPENS FIRE. Too late.
Missile Guitar Fighter SQUEEZES the handle, launching another lvfiSSILE
that strikes at the Um.o's underbelly, the EXPLOSION sends the Lnvf O
somersaulting into the air towards an overhead camera, where it hangs for a
moment before aashing down on it's hood, it's fiery weight CRUS�G the
Sunroof Sniper still hanging out of the sunroof.
Missile Guitar Fighter tu.ms away from the wreckage chuckling ... He stops
when he sees Right Hand's TRUCK filled with armed HENCHMEN that
Right Hand cailed earlier, speeding at them from BEHIND ...
The Boy aawls to his guitar.
The Henchmen TI.JMBLE out of the truck and SCA ITER in different
directions, taking cover, and OPENING FIRE on the Guitar Fighters.
Mariachi DIVES for cover behind his guitar.
Bullets DEFLECT off of the bullet proof lid on ·Mariachi's open case.
Mariachi jumps back into the tight group formation with fresh clips and
RETIJRNS FIRE on the Henchmen.
Machine Gun Guitar Fighter SPRAYS the area with bullets. Many men go
down in his bullet sweep ... while others are killed by the cars that EXPLODE
when Missile Guitar Fighter blasts a MISsn.E their way.
Missile
FIRES
Guitar Fighter RE·AR.MS his case, SWINGS it to his shoulder and
again.
One Henchman sees the guitar aimed in his direction and turns to run.
POV of the MlSSILE as it BURSTS out of the case, SPINNThlG wildly towards
the RUNN1NG Henchman, finally BLASTING the Henchman and sending him FL YING up to a second balcony. The BLAST takes a whole side of the
building with it.
(CONTINUED)
'---··
( ,... ___ '
\__.
CO�""TINlJED:
Right Hand STAGGERS out of the Limo wreckage as the camera dollies back
with him at a dutch angle ... His head BLEEDS as he trips over himself in
disorientation.
One wild Henchman CHARGES atop a BURNING CAR and BLASTS. Missile
Guitar Fighter.
Missile Guitar Fighter SNAPS backward with the IMPACT of the bull�ts
FIRES,
punching through his body. As he DROPS backwards to the ground, his case
sending a MISSil..E straight up JNTO TiiE AIR. !
Machine Gun Guitar Fighter shows a brief moment of remorse towards his
fallen comrade, maybe half a second's worth, then RETIJRNS FIRE to the
man aboard the flaming car, who is RIPPED TO SHREDS before falling flat
onto the metal bonfire.
Mariachi presses his back against Machine Gun Guitar Fighter's and they
walk together in the tight two man formation, one covering the other.
MISSILE P.O.V.
The CAMERA is the MISSILE as it falls bade to the earth, straight down
towards the dying MISSILE GUITAR FIGHI'ER who is laying spread eagled in
the dirt, staring STRAIGHT UP into the oncoming MISSILE.
The camera is now on Machine Gun Guitar Fighter who strides
determinedly towards the HIDING Henchman AS Missile Guitar Fighter
EXPLODES in the background (see storyboard). Machine Gun Guitar Fighter
hardly flinches ...
Mariachi is turning his attention to the spot where he last saw Nino.
HANDEDLY
Machine Gun Guitar Fighter is doing a good job of almost SINGLEtaking out the Henchmen that are HIDING behind the
cars.
Mariachi's eyes DART about. ... He finally sees the Boy lying
motionless on the sidewalk aaoss the street, partly obscured by a
TELEPHONE POLE. His BLOODY HAND is outstretched to the
GUITAR lying beside him. The fire spread around by the explosion is
nearing him.
Mariachi RUNS out halfway aaoss the street. He stops in his tracks,
pondering for the moment if he should abandon the Guitar Fighter to help
the boy or stand his ground and back him up.
Guitar Fighter stares at him as if this shouldn't be an ussue. 'Stand you're
ground' his eyes seem to say.
(CONTINUED}
\
...........,,.
\."r.'.. '
-
CONTil'JUED: .
Mariachi runs for the boy.
- -
Bullets FLY as Machine Gun Guitar Fighter stands his own ground .
Mariachi huddles against the bleeding child, whose face is riddled with
confusion and pain. -
!
- - '
- i
unrelenting
Machine Gun Guitar Fighter RIPS some more Bad Guys to SHREDS w1th his
GUNFIRE.
Several Henchmen RETURN DEADLY FIRE that PUNCHES through
Machine Gun Guitar Fighter ... sending him CRASHING to his knees. But
before he goes ...
He mTS his Guitar Case up and BLASIS a few more Bad Guys.
A SHARPSHOOTER fires the DEATH BLOW to Guitar Fighter's head from
50
CASE
yards away. Machine Gun Guitar Fighter dies where he kneels, with his
still gripped tightly in his hand...
. The Monkey climbs atop his dying master. The bleeding Guitar Fighter
breathe his last breath. The Monkey sees the Henchmen heading towards
Mariachi.
Mariachi lifts the kid in his arms and tries to any him away.
The Monkey climbs into Mariachi's guitar case and finds his own little guitar
case that Mariachi showed Carolina earlier .
The last few Henchman slowly creep out from hiding, out from the bu.ming
wreckage of parked cars, and proceed to find the Last Mariachi.
The Monkey opens his guitar case and finds a small PISTOL, then darts down
the street towards the Henchman in front of the group.
The Hencluna.n sees the tiny aeature darting towards him and before he can
react the Monkey leaps to the man's chest and grabs his collar. With the
other hand he shoves· his tiny pistol into the Henchman's face and fires.
The tiny blast blinds the Henchman, who falls back clasping his bloody £ace.
The other Henchmen are stunned as the Monkey leaps under a car and
scurries for an opening.
The Henchmen look about for the Monkey who may pop out at any time.
The
turns
Monkey pops up onto the hood of the car right behind a Henchman who
in time to see the little gun barrel leveled at his faee. The Monk.ey blasts
him and sends him streaming into the groW\d.
(CONTINUED)
...
·. :
cor--..·nNtrED:
Someone tries to sneak up on the Monkey whose other pistol, in his left
hand, darts out and blasts the man in the face. The Monkey aims both pistols
at the man and fires repeatedly until the Hen�an falls.
t,.,fore Henchmen come up and the Monkey surrenders ... he holds_his hands
up and then lev�ls a gun barre! at his own head for a quick suicide, obviously
to avoid being captured and taken in for questioning. The Henchmen hold
their fire and watch intently for the Monkey to do himself in. l
Before an eye can be batted the Monkey re-aims his guns at the Henchmen
and blows them aVf ay ...
CLOSE SHOT of MISMATCHED SHOES darting from be.hind a building and
climbing into Right Hand's Trude:. CAROLINA starts it up and peels back
�thlt
The Henchmen turn to see who of their men is starting a retreat.
The Truck kicks forward, accelerating quiclcly and charging for the
Henchmen left on foot
They try and scra�le out of Carolina's way, but she's POUNDING at the
accelerator ... on her way to hell.
She smashes most of them against the parked car where the Monkey made
his stand. The few Henchmen left are shot down by Mariachi.
The truck SKIDS to a stop near Mariachi and the boy.
Mariachi CARRIES the wounded Boy and lays him in the bed of the truck.
Carolina slips to the back and Mariachi climbs up front.
We can see an ARMED MAN, out of focus and in the background, STAGGER
out from the sidewalk towards the truck.
Carolina SCREAMS at the sight of Right Hand, who can barely hold himself
up, firing shots at Carolina.
Mariachi GUNS the truck around to face Right Hand.
Right Hand's empty gun die.ks uselessly at Mariachi.
Mariachi pounds the accelerator, rwuung over Right Hand whose last sight
is of ttis beloved truck speeding towards him.
As Mariachi continues on to the clinic across town, we see the Monkey climb
up to his dead master's chest, where he sits, and rests.
DISSOLVE TO:
\ "--·· .-'
\ . ...._ _ _.� __ ,·
INT. HOSPITAL - DAY
MONT AGE of the hospital hooking up the Boy for a last attempt rescue.
NEEDLES, MONITORS, and other CRUDE LOOKING MACHINERY are
brought in.
'
I
Mariachi TEARS through the hospital, trying to build up the hate nece$sary
to go through with this final step.
Carolina is silent.
Mariachi is wired like nothing we-'ve yet seen.
Mariachi STORMS into the operating room. The nurses try and get him to
leave. He sees the Boy dying on the table as they huddle around him.
He marches down the hall. He SEES images from his past. The pain, the
death, the loss. The senseless killing. The monster he has become in order to
destroy a monster. He knows what he has to do, and it scares him. He storms
past Carolina.
Carolina watches in disbelief as he bursts out of the hospital. She bolts to her
feet and RUNS after him.
CUT TO:
SHOWDOWN
EXT. BUCHOS RANCH - DAY
Close-up of Bucho's phone as it RINGS. The camera pulls back slowly, to
reveal Buc:ho SITTING next to it. Not answering it. Bucho is surrounded by
the few men he has left. They all have their guns ready for whatever should
happen.
HENCrOAAN
Maybe you should answer it.
BUCHO
Maybe you should do your job and shut the fuck
up.
HENCHM:AN
(long pause)
I figure it could be Right Hand.
BUCHO
U Right Hand has something to tell me he'll come
here. Otherwise it's safe to assume that he's dead,
and that someone is simply calling to tell me ... tha.t
I've screwed up the entire operation.
(MORE)
(CONTINUED)
(
.'---:-- .
CONTINtrED:
BUClio (cont'd)
(voice rising)
To tell me that not only could I not handle the
business, but that I managed to destroy half the
town, completely blowing the use of this and all
surrounding towns which I controlled ...
(anger at top level)
It's safe to assume that it's someone calling to tell
me that there are a hundred hit men headed my
way, to show me what happeJl:5 when you fuck up!
Bucho is ou� of his seat now, and the Henduna.n has backed away
considerably ...
Bucho spins aro�d and SHOO'IS THE PHONE .
... which stops ringing.
EXT. ON THE ROAD- DAY
et.rrTO:
Mariachi and Carolina barrel down the dusty road to BUCHO'S RANCH.
CAROLINA
All .I know is that it's two miles north of here. I
don't know the entrances, or best way to get in.
You must realize ... that he has contacts in these
houses all along here. He knows we're coming.
MARIACHI
I know.
CAROLThlA
What's the plan?
MARIACHI
No plan. We ride in and say hello.
CAROLINA
So he's just gonna let you wallc in there?
MARIACHI
He will.
CtJTTO:
EXT. BUCHO'S RANCH - DAY
\.._, .. ·
_ One of the �chman walks towards Bucho, but is sure not to get too close.
'
I
\, ... v�•, • ,.
HENCHMAN
Right Hand's truck is headed towards the north
entrance.
Bucho finishes a drink.
BUOiO
Then let's go-to the north entrance.
EXT. OU1SIDE THE RANCH· DAY
CUT TO:
Mariachi is checking the place out. Th.ere seeim to be only one way in from
this road.
MARIACHI
Drive up to the door, and rn get out. If things go
bad, I want you to get out of here. Don't wait.
CAROLINA
Yea, well ... rm going with you.
Mariaclti and Carolina step out of the truck and walk towards the gate. He
has his guitar case. Other than that, they're unarmed.
As they near the gate, it opens. Mariachi and Carolina step inside the fortress
slowly.
Bucho is standing there waiting for them. He has his gun aimed at them. So
do his men.
Mariachi continues inside. Carolina holds back just a bit. She's having
second thoughts about this.
Bucho is studying Mariachi, not believing his eyes.
Carolina picks up on the weirdness of the moment. Mariachi walks in like
it's any day.of the week, placing his guitar case on the ground. He stands
beside it ... keeping his eyes on Bucho.-
BUCHO
Manito?
Mariachi is emotionless. Bucho is in disbelief.
(CONTINUED}
\'---··'
\____.
· ,
CO�'UED:
BUCHO
What the hell are you doing here?
Mariachi shrugs defiantly.
BUCHO
(thrown off guard)
You're
think I'm
the one trying to kill me? All this time ... I
looking for the devil himself ...
(beat)
And all this time ... it was my own fucking brother.
Axe you out of your sick fucking mind?
MARIACHI
I didn't know it �as you, Cesar. I only found out
this morning.
Cesar {Bucho) is dumbfounded.
Realization finally hits Carolina, who closes her eyes with regret
CESAR
You were the last person I thought would C()me
through that door.
Buc:ho extends his arms, walks up to Mariachi, and embraces him. The other
Henchmen are wondering what the hell is going OJL 'They close in a little bit
Mariachi's eyes are fixed on Carolina. Bucho breaks the embrace. He holds
Mariachi's face in his gun filled hands.
CESAR
You know how much trouble you've caused me?
He presses a GUN BARREL against Mariachi's cheek.
CESAR
Let me tell you in non-tec:hnicaJ terms. You've
fucked me. The men I work for, the men that run
this entire countryside, put their -faith in me when
I told them I could handle this operation. And
now, because of you. .. they're probably sending a
hit squad over to do me in.
Mariachi doesn't flinch. His eyes are on Carolina. Carolina is distraught She
cries silently for Mariachi. She knows she pushed him to this.
CESAR
I oughta kill you right now ... You disgraced me.
(CONTINUED)
'
\ �-�
\ __ .. ·
C0!'-7IN1JED:
MARlACHI
You disgraced. us.
CESAR
Why? Because I was the only one that wanted to
move up in the world?
MARIACHI
We always knew you were up to no good Cesar .
... Never thought you'd go this 'far.
CESAR
So my little brother comes here to teach me a
lesson? Show me· right from wrong? You're a
guitar player ... What the fuck is a guitar player
doing killing my men? Ruining my business ... MARIACHI
Your men killed the woman I loved.
CESAR
Mauricio did that. That has nothing to do with me.
MARIACHI
He worked for you. You put that aazy bastard in
that to� he was your responsibility.
CESAR
And you killed·him, so what do you want &om
me? Mauricio was aazy. I'm sorry about that. He
was good at rwuung the business and that's why I
put him there. We don't set out to kill innocent
pepple.
MARIACHI
You just buy innocent people. You don't kill them
until you've run out of use for them.
Cesar glances at Carolina.
CESAR
rm sorry ... Okay? I'm sorry.
(beat)
Will you forgive me, Manito? You think I'd do
anything against y own brother on purpose?
Mariachi .says nothing. Cesar turns his attention back to Carolina.
(CONTINUED)
'----�
'
'---
i
\_r.,.•
. ,..
CONTn,rtrED:
CESAR
But. who's this? Isn't she the woman you lovenow? You see? When I take something away I
replace it with something else- She's all yours,
Mariito. Isn't she a piece of work? She runs one of
our best fronts.
-
Cesar looks deep into her eyes.
CESAR __
I mean. .. she used to run one of our best fronts .
. CAROLINA
(quietly)
Bastard.
CESAR
Sorry about your bookstore ... I was afraid you
might run off with this guy. I had lo make sure
you'd bring him to me .... Had I known it was my
kid brother I'd have acted differently.
MARIACHI
You have to answer for the lives you've ruined.
Not just mine. Everyone's.
CESAR
(his temper is back)
If you want to right air the wrongs, be my guest!
Walk into any government official's office, put a
bullet in their head and you·u be killing someone
involved in what's going on. You have no idea
how far this trail leads. I work for very powerful
people. And I was moving up, jumping through
their hoops, trying to prove that I could be one of
them. When all ol a sudden. .. you come along and
make me and my operation look incompetent. You
have ruined me, manito.
MARIACHI
Something had to be done. Bro� or no brother
you've gone too far.
- ... , &
A few Henchmen are walking along the wall behind them. Two more flank
just a few yards behind Carolina and Mariachi.
CESAR
Look at you ....
(beat)
(MORE)
(CONTINUED)
I
'••---::-
i, '
'-.--··
CO l\i ""Ill\il.fED:
. CESAR (cont'd)
You came here to kill me. Like you said: Brother or
no brother... -
·
(beat}
Papa wouldn't be so proud of you anymore.
You were his little guitarrista ... his little
m�achi ... And now you're just a piece of shit
like me.
Mariachi raises his head. He stares right int'? Cesar.
Cesar notices that .Mariachi's HANDS are fidgeting too close to his sides.
CESAR
Manito ...
Carolina is ready to run out of the gate and get the hell out of here.
CESAR
Manito ... put yom hands up.
Mariachi closes his eyes. He doesn't want this. We can see he doesn't want
this. His look on his face is begging his brother not to do this.
Cesar aims· his gun at Mariachi.
CESAR
Put them up.
Mariachi raises his hands HALFWAY. His eyes are filling with tea.rs.
CESAR
I'm sorry manito, but as good as you've become, I
know you'll never work for me.
Mariachi takes a deep breath, and then raises his hands up all the way.
CESAR
And anyone that doesn't work for me ... works
against me.
Mariachi breathes deeply as the countdown begins ...
CESAR
And where you're going, you won't be needing
her ...
Cesar points the gun at Carolina.
(CONTINUED)
co:r,rrIN1.JED:
A tear rolls down Mariac:hi's face. As he whispers ... MARIACHI
5, 6,, 7, 8 ....
Carolina turns slowly to Mariachi. Realizing, she looks back to Cesar.
Goodbye,
CESAR
Carolina ...
Carolina DIVES to the ground. Cesar is caught by surprise, and RE-AlMS the
gun down at her.
Medium shot of Mariachi as his two .4S's SHOOT UP from his sleeves into
his W AITIN'G HANDS.
Cesar sees this and re-aims his gun AT MARIACHI.
SUPER SLOW MOTION as Mariachi LEVELS his pistols and FIRES. The
bullets mercilessly tear at his brother's flesh until he drops into the dirt like a
bloody rag.
Carolina LEAPS to her feet and grabs the guns behind Mariachi's waist, she
SPIN'S around and BLASTS the two Henchmen behind them. Another
Henchman is atop the wall and running towards her for a closer shot. Her
back is to him.
Carolina spins in time to shoot enough bullets to take him d� along with
everything around him. She's not the most accurate shooter, but she shoots
enough bullets that one eventually finds her target.
Carolina sees Mariachi, who is crouched on the ground, holding � dying
brother in his arms.
Close-up of Cesar, his mouth gaping and shuddering .•. as if trying to say
something. He chokes on the silent words ... before breathing his last breath.·
Mariachi holds his dead brother, and aies.
Carolina puts her hand on his shoulder as Mariachi stares at the ground
through the tears that wash down his face.
MARlACl-ll
(voice over)
Everyone I've killed ... was someone's father ...
someone's son. .. someone's brother ...
Mariachi looks into his brother's face, and makes the sign of the c:ross with
his gun, then lifts his brother off of the ground. The sun is setting as
Mariachi carries his brother out the gate.
DISSOLVE TO:
\
�-
\ ... , __ .'
\�-
·..., .--
INT- HOSPITAL- NIGHT
The small hospital clinic is operating as usual. The patient of the moment .is
the little Boy with the guitar on the bed beside him, and a life support hookup. He's unconscious. Mariachi is at Nino's side, continuing with his
NARRATION.
MARIAOll
We pay for our crimes. One w�y or another, we pay.
Mariachi plucks a tune on Nil\o's guitar. Teaching himself a new variation
trying
to the original song. Carolina is watching them from the doorway. She's.
to say what she's been wanting to say for hours.
CAROLINA
rm sorry for ... pushing you to go after him.
Mariachi looks at her as if it's something he's trying to put behind him.
CAROLINA
Why didn't you say anything?
MARIACHI
( continuing with the song)
You wouldn't have let.me go through with it
{plays some more)
And I had to decide for myself.
Carolina accepts his answer.
MARIACHI
There's no such thing as an easy payback. But I did
the right thing.
(motioning to Nino)
He's my brother now. The younger brother I never
had. Someone full of hope, ideals ...
(smiles)
talent.
Nino is silent. Carolina is crying.
Nli\o's FATI-IER enters the room. Mariachi sees him and. stands. He brushes
Ni.i\o's hair one last time.
MARIACHI
Practice.
Nino hears nothing. On his way out, Mariachi grabs the father by the arm in
a tight grip.
(CONTINUED)
;
l
·'-,---
\---···
\-... •
.........
C0!'-."11N1.i'ED:
MARIACHI
Don't destroy his dreams ... just because you
cquldn't fulfill yours.
. . .
Mariachi's about to leave it at that. but decides to give the back of Dad':s head
a nice hard shove. He walks out of the room, and Carolina follows.
IN THE HALI:W AY
Where
CAROLINA
are you going?
He pulls out the_ SMASHED BULLETS SCULPlt.TRE. He's made a necklace
out of it. He places it aro� her neck. He kisses her.
MARIACHI
Far away ...
Mariachi gives her the paper wrapped wad of advance money. He walks
down the hall, as she looks on. He leaves the hospital, and the darkness
outside swallows him. Carolina sits on a � dropping the money down
on the bench besid, her.
DISSOLVE TO:
EXT. THE CITY STREETS OF SANTA CECILIA • SUNRISE
Mariachi walks through the town one last time. He has his guitar c:ase at hjs
side, dressed in his full Mariachi garb. He passes the comer where the
CHILDREN are setting up for their day's work. His Pit Bull is with them.
Mariachi pulls the choke collar from his breast pocket. It dangles at his side.
MARIACHI
{ to his dog).
Time to go.
Pit Bull follows Mariachi, who is walking ahead. The children call their Dog,
who STOPS in the street. He l�ks back betw�n Mariachi and the Children.
Mariachi shrugs, and walks up to the dog. He pets him, looks into his eyes ...
Then TOSSES the choke collar to the Children.
MARIAOD
(to his dog)
See ya around.
Mariachi wanders off and the Pit Bull ren.uns to the children. Neither looks
back.
CUTTO:
\
... ,,-.--; �.
EXT. MARIAOfi ON TiiE ROAD· SUNRISE
Mariachi is walking down the same road he entered the town from. A truck
is parked up on a hill. It's BUSCEMrS TRUCK.
BUSCEMI
You did real good. Got your money right here.
'They're real happy with what you did.
Keep
MARIACHI
it. You shouldn't get poi for killing your
own family.
BUSCEMI
(confused)
Suit yourself ...
What
MARIACHI
would you do with a guitar case full of gwlS?
BUSCEMI
Sell it. Why, you giving me your case?
MARIACHI
Nope, rm selling you my guns.
BUSCEMI
(handing him a bill)
Fifty bucks.
Mariachi takes the bill and dumps the guns into the bed of the truck.
BUSCEMI
(seeing the quantity)
Alright here's another SO. Wanna lift?
Mariachi nods a definite "no."
What
BUSCEMI
ate you gonna do now?
Mariachi shrugs.
BUSCEMI
You're a driven man. .. See ya.
Bus�emi drives off. The truck leaves the saeen, revealing Carolina. who is
speeding up behind Mariachi in the Monster Truck. She stops next to·
Mariachi. Mariachi is closing the empty case.
(CONTINUED)
CONTINUED:
CARO!.mA
What did you do with your toys?
MARIACHI
Sold 'em.
CAROLINA
Giving up the gun?
Mariachi nods a yes.
CAROLINA
Hop in.
Mariachi is about to open the door.
CAROLINA
Wait. You swear?
Mariachi holds up his right hand and puts his left on his heart.
MARIACHI
I swear.
CAROLINA
(smiling)
Okay. Hop in. ..
CUCJ<! A .45 pops up from his sleeve and into his hand. Carolina turns and
sees it
MARIACHI
(shrugs)
Just in case.
He climbs in the front seat
We see •t:he SCORPION walking in front of the truck. His stinger is raised
high, ready to strike. The trudc drives right at it, missing it by an inch.
The Monkey pops up from the bed of the truck and shoots hi.s little pistol.
The Scorpion explodes. The truck fades into the RISING SUN. Niflo's
SILHOUEI IE ... larger than life, superimposes over this image, by entering
the frame from the left agaimt the orange sky. With his guitar, he plays the·
tune he practic ed throughout the movie. The mu.sic score rises, integrating
with his little song ... as the a-edits roll. The picture fades.
END

`).then(e => console.log(`Chupa essa manga ${e}`)).catch(console.error)