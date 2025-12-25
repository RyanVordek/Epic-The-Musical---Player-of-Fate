
/* ========= EPIC Player - Letras Automáticas ========== */

function parseLRC(lrcString) {
    if(!lrcString) return [];
    const lines = lrcString.split('\n');
    const result = [];
    for (const line of lines) {
        const match = line.match(/\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\](.*)/);
        if (match) {
            const min = parseInt(match[1]);
            const sec = parseInt(match[2]);
            const ms = match[3] ? parseInt(match[3]) : 0;
            const text = match[4].trim();
            const time = min * 60 + sec + (ms / 1000);
            if (text) result.push({ time, text });
        }
    }
    return result;
}

const LYRICS_DB = {
    "bWIgy-Ls-SU": parseLRC(`[00:05.64] Alright, my brothers, listen closely
[00:09.68] Tonight, we make the Trojans pay
[00:13.64] Ten years of war, they've killed us slowly
[00:17.78] But now we'll be the ones who slay
[00:21.54] Think of your wives and your children
[00:25.84] Your families wonder where you've been
[00:29.99] They're growing old and yet you're still here
[00:33.59] Do what I say, and you'll see them again (yes, sir!)
[00:35.95] Diomedes will lead the charge
[00:38.15] Agamemnon will flank the guards
[00:40.11] Menelaus will let our mates
[00:41.63] Through the gates to take the whole city at large
[00:44.06] Teucer will shoot any ambush attack
[00:45.95] And little Ajax will stay back
[00:47.65] Nestor, secure Helen and protect her
[00:49.60] Neo, avenge your father, kill the brothers of Hector (yes, sir!)
[00:52.46] Find that inner strength now (whoo!)
[00:54.40] Use that well of pride (whoo!)
[00:56.39] Fight through every pain now (whoo!)
[00:58.16] Ask yourself inside
[01:00.08] What do you live for? What do you try for?
[01:01.97] What do you wish for? What do you fight for?
[01:03.92] (What do you live for? What do you try for?)
[01:05.82] (What do you wish for? What do you fight for?)
[01:08.77] Penelope
[01:12.57] Penelope
[01:15.54] And Telemachus
[01:20.26] I fight for us
[01:22.11] I fight for us
[01:24.06] (What do you live for?) Penelope
[01:25.98] (What do you try for?) Telemachus
[01:27.96] (What do you wish for?) I'm on my way
[01:30.05] (What do you fight for?) Attack!
[01:33.68] 
[01:51.63] Who was that?
[01:56.04] A vision
[01:57.80] Of what is to come, cannot be outrun
[02:01.78] Can only be dealt with right here and now
[02:06.04] Tell me how
[02:07.79] I don't think you're ready
[02:11.73] A mission to kill someone's son
[02:15.68] A foe who won't run
[02:17.41] Unlike anyone you have faced before
[02:22.56] Say no more
[02:23.96] I know that I'm ready
[02:25.96] (I don't think you're ready)
[02:29.53] 
[02:34.92] It's just an infant
[02:39.15] It's just a boy
[02:42.83] What sort of imminent threat does he pose, that I cannot avoid?
[02:49.72] This is the son of none other than Troy's very own Prince Hector
[02:55.14] Know that he will grow from a boy to an avenger
[02:59.00] One fueled with rage as you're consumed by age
[03:02.50] If you don't end him now, you'll have no one left to save
[03:06.41] You can say goodbye to (Penelope)
[03:10.82] You can say goodbye to (Penelope)
[03:14.53] I could raise him as my own (he will burn your house and throne)
[03:18.29] Or send him far away from home (he'll find you wherever you go)
[03:22.28] Make sure his past is never known (the gods will make him know)
[03:25.67] I'd rather bleed for ya (he's bringing you)
[03:27.85] Down on my knees for ya
[03:29.60] I'm begging please (oh, this is the will of the gods)
[03:33.60] 
[03:35.73] Please don't make me do this, don't make me do this
[03:40.04] The blood on your hands is something you won't lose
[03:43.46] All you can choose is whose
[03:46.92] `),

    "hNdvp9Qo8PA": parseLRC(`[00:10.15] I look into your eyes and I think back to the son of mine
[00:22.60] You're as old as he was when I left for war
[00:34.66] Will these actions haunt my days? Every man I've slain?
[00:41.47] Is the price I pay endless pain?
[00:46.51] Close your eyes and spare yourself the view
[00:52.58] How could I hurt you?
[00:57.85] I'm just a man who's trying to go home
[01:04.52] Even after all the years away from what I've known
[01:09.83] I'm just a man who's fighting for his life
[01:16.41] Deep down, I would trade the world to see my son and wife
[01:21.97] I'm just a man
[01:29.79] But when does the comet become a meteor?
[01:34.09] When does a candle become a blaze?
[01:37.09] When does a man become a monster?
[01:42.02] When does a ripple become a tidal wave?
[01:46.03] When does the reason become the blame?
[01:49.08] When does a man become a monster?
[01:54.05] (When does the comet become a meteor?)
[01:57.94] (When does a candle become a blaze?) Forgive me
[02:01.00] (When does a man become a monster?) Forgive me
[02:05.99] (When does a man become a monster?) Forgive me
[02:17.22] I'm just a man
[02:24.61] `),

    "x3KOt-3T73c": parseLRC(`[00:14.38] Six hundred men
[00:17.27] Six hundred men, under my command
[00:20.45] With only one goal in mind
[00:22.99] (Make it back alive to our homeland)
[00:25.53] Six hundred men
[00:28.47] Six hundred miles of open sea
[00:31.96] But the problem's not the distance
[00:34.05] (It's what lies in between)
[00:35.73] And Ithaca's waiting (Ithaca's waiting)
[00:38.35] My kingdom is waiting (the kingdom is waiting)
[00:41.24] Penelope's waiting (waiting) for me
[00:46.00] So full speed ahead
[00:51.96] Full speed ahead
[00:57.17] Captain!
[00:58.01] (Eurylochus)
[00:59.38] Six hundred men (six hundred men)
[01:02.45] Six hundred men, with big mouths to feed
[01:05.71] And we've run out of supplies to eat
[01:08.03] (Curse the war, our food stores depleted)
[01:10.71] Six hundred men (six hundred men)
[01:13.48] Six hundred reasons, to take what we can
[01:17.09] So captain what's the plan
[01:18.99] (Captain, what's the plan)
[01:20.89] Watch where the birds fly (watch where the birds fly)
[01:23.52] They will lead us to land (they will lead us to land)
[01:26.63] There we'll hunt for food
[01:28.58] My second-in-command (second in command)
[01:31.15] Now full speed ahead
[01:32.84] We're up, we're off, and away we go
[01:35.40] (We're up, we're off and away we go)
[01:37.39] Full speed ahead
[01:39.22] (We're up, we're off and away we go)
[01:41.58] Captain!
[01:42.35] Polites!
[01:43.92] Look! There in the distance
[01:46.61] I see an island, I see a light that faintly glows
[01:50.82] Maybe they're people, lighting a fire
[01:53.79] Maybe they'll share some food, who knows
[01:56.27] Something feels off here
[01:57.85] I see fire, but there's no smoke
[02:00.54] I say we strike first
[02:01.81] We don't have time to wait
[02:03.65] So let's raid the place and -
[02:05.30] No
[02:06.38] Polites gear up
[02:08.46] You and I'll go ahead (you and I'll go ahead)
[02:11.98] We should try to find a way no one ends up dead
[02:15.65] We don't know what's ahead
[02:17.38] Give me 'til sunrise
[02:19.92] And if we don't return
[02:23.35] Then six hundred men can make this whole place burn
[02:27.66] Now full speed ahead
[02:33.71] (Full speed ahead)
[02:37.26] 
[02:39.35] Full speed ahead
[02:40.65] We're up, we're off and away we go
[02:43.33] (We're up, we're off and away we go)
[02:45.18] Full speed ahead
[02:47.34] (We're up, we're off and away we go)
[02:49.19] (We're up, we're off and away we go)
[02:51.02] Full speed ahead
[02:51.89] `),

    "-oMZw8DQbaI": parseLRC(`[00:08.81] You can relax, my friend
[00:11.69] Huh?
[00:12.71] I can tell you're getting nervous
[00:15.12] So do yourself a service
[00:18.00] And try to relax, my friend
[00:20.04] I'm fine, Polites
[00:22.45] Think of all that we have been through
[00:24.80] We'll survive what we get into
[00:28.02] I know that you're tired of the war and bloodshed
[00:30.62] Tell me, is this how we're supposed to live?
[00:32.85] Look at how you grip your sword, enough said
[00:35.12] Why should we take when we could give?
[00:37.77] You could show a person that you trust them
[00:39.90] When you stop and lower your guard
[00:42.69] Here we have a chance for some adjustment
[00:45.05] Give it a try, it's not that hard
[00:47.18] I'm telling you
[00:48.29] This life is amazing when you greet it with open arms
[00:52.95] Whatever we face, we'll be fine if we're leading from the heart
[00:57.64] No matter the place, we can light up the world, here's how to start
[01:02.34] Greet the world with open arms
[01:04.44] Greet the world with open arms
[01:06.54] (Welcome)
[01:07.98] Stay back (stay back)
[01:11.54] My friend, greet the world with open arms
[01:16.11] We're only here for food (food)
[01:20.17] Six hundred friends are waiting for us to show our faces (food)
[01:25.62] Stay back, I'm warning you (food)
[01:29.62] If we don't get back safely
[01:32.04] My men will turn this place into blazes (here you go)
[01:37.76] See?
[01:38.37] This life is amazing when you greet it with open arms
[01:43.29] Whatever we face, we'll be fine if we're leading from the heart
[01:47.98] No matter the place, we can light up the world, here's how to start
[01:52.72] Greet the world with open arms
[01:54.82] Greet the world with open arms
[01:57.28] My friend, I wish that I could say that I agree
[02:02.08] But look at the way this fruit is glowing and filled with glowing seeds
[02:07.00] It took me a while to notice just what kind of fruit they eat
[02:11.31] It's a lotus, it controls your mind and never lets you free
[02:16.66] That's what we'd get with open arms
[02:20.83] Lotus eaters
[02:22.46] I'd like to show my friend that kindness is brave
[02:25.82] Could you tell me where there's other food to eat?
[02:29.45] (The cave)
[02:30.85] A cave!
[02:32.28] You're saying there's a cave where we could feast?
[02:35.67] And where do we sail to find this food-filled cave?
[02:39.16] (East, that way)
[02:40.97] Thank you!
[02:43.16] (Welcome)
[02:45.72] This life is amazing when you greet it with open arms
[02:51.01] I see in your face, there is so much guilt inside your heart
[02:56.15] So why not replace it and light up the world, here's how to start
[03:01.14] Greet the world with open arms
[03:03.28] Greet the world with open arms
[03:06.25] Greet the world with open arms
[03:10.29] You can relax, my friend
[03:12.05] `),

    "oB8lqgO9e24": parseLRC(`[00:03.24] Have you forgotten the lessons I taught you? (Athena)
[00:10.14] Have you forgotten to turn off your heart?
[00:13.58] This is not you
[00:16.42] 
[00:19.14] I see you changing from how I've designed you
[00:23.69] 
[00:26.01] Have you forgotten your purpose?
[00:28.87] Let me remind you
[00:32.92] Goddess of wisdom
[00:36.82] Master of war
[00:40.74] My life has one mission
[00:44.16] Create the greatest warrior
[00:48.77] I had a challenge, a test of skill
[00:52.79] A magic boar only the best could kill
[00:56.68] One day a boy came for the thrill
[01:00.52] A boy whose mind rivaled the boar's own will (let's go)
[01:06.02] Maybe one day he'll follow me
[01:09.38] And we'll make a greater tomorrow
[01:12.98] Then they'll see I know he'll change the world
[01:16.50] 'Cause he is a warrior of the mind
[01:21.90] Maybe one day I'll reach him
[01:24.86] And we can build his skills as I teach him
[01:28.83] If there's a problem, he'll have the answer
[01:33.06] He is a warrior of the mind
[01:37.98] 
[01:45.82] Show yourself
[01:48.25] I know you're watching me
[01:49.95] Show yourself
[01:53.28] I can see you
[01:55.17] How can you see through my spell?
[01:57.16] Ha-ha, I was lying, and you fell for my bluff
[02:02.57] Well done, enlighten me, what's your name?
[02:06.36] You first and maybe I'll do the same
[02:10.22] Nice try, but two can play this game
[02:13.92] Nah, don't be modest, I know you're a goddess
[02:16.25] So let's be honest, you are Athena (Athena)
[02:19.94] Badass in the arena (arena)
[02:21.98] Unmatched, witty, and queen of (and queen of)
[02:23.75] The best strategies we've seen
[02:25.50] If you're looking for a mentor, I'll make sure your time's well-spent
[02:29.32] Sounds like a plan, goddess and man, bestest of friends
[02:32.28] We'll see where it ends (okay)
[02:33.63] Maybe one day they'll follow me
[02:37.39] And we'll make a greater tomorrow
[02:41.05] Then they'll see I know we'll change the world
[02:44.63] 'Cause we are the warriors of the mind
[02:50.17] Maybe one day we'll reach them
[02:52.97] And we can build their skills as we teach them
[02:56.75] If there's a problem, we'll have the answer
[03:00.76] We are the warriors of the mind
[03:06.06] I still intend to make sure you don't fall behind
[03:09.55] Don't forget that you are a warrior of a very special kind
[03:13.36] You are a warrior of the mind
[03:17.82] 
[03:20.92] Don't disappoint me
[03:22.17] `),

    "nDQyFHmuQls": parseLRC(`[00:08.77] Over here!
[00:11.03] Look at all this food, look at all these sheep
[00:17.28] I can't believe this cave has all this for us to keep
[00:22.61] I've gotta hand it to you both, this is quite the treat
[00:29.44] There are enough sheep here to feed the entire fleet
[00:35.02] It's almost too perfect, too good to be true
[00:41.01] Why would the lotus eaters pass up on all this food?
[00:46.06] Who are you?
[00:48.28] 
[00:59.76] Hey there
[01:01.91] 
[01:05.26] We're just travellers
[01:08.41] We come in peace
[01:10.57] You killed my sheep
[01:13.75] 
[01:16.62] My favouritе sheep
[01:19.95] 
[01:23.19] What gives you the right to deal a pain so deep?
[01:29.03] Don't you know that pain you sow is pain you rеap?
[01:35.02] Time to drink
[01:36.97] Your blood over where you stand
[01:39.99] Your life now is in my hand
[01:43.30] Before I'm done
[01:44.81] You will learn that it's not so fun to take
[01:48.92] You came to my home to steal
[01:52.02] But now you'll become my meal
[01:55.10] A trade, you see?
[01:56.89] Take from you like you took from me
[02:00.26] There's been a misunderstanding
[02:03.16] We never came here to steal
[02:05.74] But now that I see we've done some damage
[02:09.01] Maybe you and I could make a deal
[02:12.28] I'll give you our finest treasure
[02:15.21] So long as we leave alive
[02:18.02] You can keep the world's best tasting wine
[02:21.94] Wine?
[02:23.04] Have a drink
[02:24.91] One sip and you'll understand
[02:27.95] The power that's in your hands
[02:31.19] A wine so fresh
[02:32.83] You'd never wanna eat human flesh again
[02:37.06] Then we shall be on our way
[02:40.05] No bloodshed in here today
[02:43.29] A trade, you see?
[02:44.72] A gift from you and a gift from me
[02:50.86] Ah, I'd like to thank you
[02:55.17] Stranger, what's your name?
[02:58.55] My name is Nobody, Nobody, Nobody
[03:10.06] Nobody, for your gift I've one to reply
[03:17.70] I'm so glad we see eye to eye
[03:23.07] Yes, you shall be the final man to die
[03:31.83] What?
[03:34.80] Watch out!
[03:34.92] `),

    "rND9-qeA7Lo": parseLRC(`[00:00.18] (Polyphemus)
[00:02.97] 
[00:06.16] (Polyphemus)
[00:08.30] 
[00:12.18] My brothers
[00:13.94] The rest of our fleet, they wait at the beach
[00:16.89] And if we're defeated, they're good as dead
[00:20.62] Straight ahead
[00:21.75] That is who we're fighting
[00:23.36] (Polyphemus)
[00:24.71] No backup
[00:26.35] No chance for support, so draw out your swords
[00:29.45] Our foe must be thwarted right here and now
[00:33.03] Show me how great is your will to survive
[00:37.78] Six hundred lives at stake
[00:40.95] It's just one life to take
[00:44.29] And when we kill him, then our journey's over
[00:47.50] 
[00:50.32] No dying on me now
[00:53.54] Defeat is not allowed
[00:56.68] We must live through this day, so fight, fight, fight
[01:02.71] 
[01:08.45] Surround him (surround him)
[01:10.13] Attack from behind, keep distance in mind
[01:13.23] And stay in his blind spot
[01:14.88] And strike his heels (strike the heels)
[01:18.05] Show him that we're deadly (ha, ha!)
[01:21.06] Exhaust him (exhaust him)
[01:22.67] Don't let him get close
[01:24.22] He's strong but he's slow
[01:25.81] He can't land a blow if we're out of reach
[01:29.31] Find a breach
[01:30.64] Stand up and fight for your lives
[01:34.16] Six hundred lives at stake
[01:37.32] It's just one life to take
[01:40.42] And when we kill him, then our journey's over
[01:45.83] (Push forward) no dying on us now
[01:49.91] Defeat is not allowed
[01:52.97] We must live through this day, so fight, fight, fight!
[01:59.79] 
[02:14.62] Captain
[02:15.94] Enough
[02:18.22] 
[02:21.13] He's got a club
[02:22.69] He's got a club!
[02:25.95] What are our orders?
[02:27.99] Captain?
[02:29.24] Captain!
[02:31.52] 
[02:39.79] You've hurt me enough
[02:43.07] Six hundred lives I'll take
[02:46.18] Six hundred lives I'll break
[02:49.28] And when I kill you, then my pain is over
[02:55.50] You're dying here and now
[02:58.63] Escape is not allowed
[03:01.77] You won't live through this day, now die, die
[03:04.05] `),

    "NGxrhdgAg18": parseLRC(`[00:12.63] Captain!
[00:15.17] Captain!
[00:16.76] Captain!
[00:18.15] We must move quickly, we don't have much time
[00:24.03] He didn't notice I mixed lotus in his wine
[00:29.15] Mark my words now, this is not the end
[00:34.95] But captain, what'll we do with our fallen friends?
[00:39.61] Remember them
[00:41.46] When the fire begins to fade
[00:43.87] For the fallen and afraid
[00:46.41] We are not to let them die in vain
[00:50.18] Remember them
[00:51.75] We're the ones who carry on
[00:54.61] The flames of those who've gone
[00:57.23] And our comrades will not die in vain
[01:01.11] I need all our hands on his club
[01:03.77] This is how we're getting out of here
[01:06.09] Use your swords to sharpen the stub
[01:09.19] And turn it to a giant spear
[01:10.99] (Let's kill him!)
[01:11.72] His body is blocking the path
[01:13.93] If we kill him, we'll be stuck inside
[01:16.98] Captain, where do we attack him?
[01:19.36] We gotta stab him in the eye
[01:21.54] (Yes sir!)
[01:22.20] Remember them
[01:23.89] When the fire begins to fade
[01:26.42] For the fallen and afraid
[01:29.48] We are not to let them die in vain
[01:33.05] Remember them
[01:34.32] We're the ones who carry on
[01:37.31] The flames of those who've gone
[01:39.92] And our comrades will not die in vain
[01:43.89] Now!
[01:48.47] Scatter!
[01:54.95] Who hurts you?
[01:58.74] There are more of them?
[02:00.51] Who hurts you?
[02:04.45] Hide
[02:05.80] Who hurts you?
[02:08.29] Captain, we should run, wait
[02:10.97] Who hurts you?
[02:13.58] Captain, please, wait
[02:15.94] It was nobody, nobody
[02:21.49] If nobody hurts you, be silent
[02:25.42] Don't go
[02:29.46] Let's grab the sheep and away we go
[02:35.97] Have you forgotten the lessons I taught you?
[02:39.21] He's still a threat until he's dead
[02:42.85] Finish it, no
[02:46.85] No?
[02:47.73] What good would killing do?
[02:50.58] When mercy is a skill
[02:52.74] More of this world could learn to use
[02:55.69] My friend is dead, our foe is blind
[02:58.32] The blood we shed, it never dries
[03:01.04] Is this what it means to be a warrior of the mind?
[03:05.18] Don't!
[03:05.75] Hey, Cyclops!
[03:07.83] When we met, I led with peace
[03:10.43] While you fed your inner beast
[03:13.28] But my comrades will not die in vain
[03:16.95] Remember them
[03:18.55] The next time that you dare choose not to spare
[03:22.47] Remember them
[03:24.32] Remember us
[03:27.11] Remember me
[03:30.51] I'm the reigning king of Ithaca
[03:35.84] I am neither man nor mythical
[03:39.36] I am your darkest moment
[03:45.72] I am the infamous
[03:48.82] Odysseus
[03:53.03] `),

    "xrFaGilus6o": parseLRC(`[00:11.79] You were reckless, sentimental at best
[00:15.62] That's not a teaching of mine
[00:17.43] You've grown soft, your dead friends can attest (hey!)
[00:21.48] Put your emotions aside
[00:23.65] You're a warrior meant to lead the rest
[00:27.14] I don't know where I went wrong
[00:29.10] But I warned ya and you failed the test
[00:33.39] So now I'm gone
[00:34.82] This way, you'll know what your place is
[00:37.68] This way, you can't cross the line
[00:40.65] This way, when all is over
[00:43.52] You'll keep yours and I'll keep mine
[00:46.51] This way, you won't disappoint me
[00:49.32] This way, you won't waste my time
[00:52.49] This way, I'll close the door
[00:55.27] Consider this as my goodbye
[00:58.65] That's just like you, why should I be surprised?
[01:02.64] Selfish and prideful and vain
[01:04.71] Unlike you, every time someone dies
[01:08.65] I'm left to deal with the strain
[01:10.60] What's a title that a goddess could lend
[01:14.38] If I'll never sleep at night?
[01:16.46] I'll remind you, I saw you as a friend
[01:20.28] But now we're done
[01:22.04] This way, you're out of my head now
[01:24.78] This way, you won't plague my life
[01:27.62] This way, when all is done
[01:30.35] And you're out of sight and out of mind
[01:33.76] This way, you get what you wanted
[01:36.61] This way, you can save your time
[01:39.55] This way, you close the door
[01:42.45] And have your damn goodbye
[01:44.93] You're not looking for a mentor
[01:47.78] I'm not looking for a friend
[01:50.74] I mistook you for a general
[01:53.59] What a waste of effort spent
[01:56.52] At least I know what I'm fighting for
[01:59.74] While you're fighting to be known
[02:02.58] Since you claim you're so much wiser
[02:05.45] Why's your life spent all alone?
[02:08.63] You're alone
[02:11.00] 
[02:14.93] One day, you'll hear what I'm saying
[02:17.69] One day, you might understand
[02:20.85] One day, but not today
[02:23.35] For after all you're (just a man)
[02:26.88] This day, you sever your own head
[02:29.52] This day, you cut the line
[02:32.51] This day, you lost it all
[02:35.21] Consider this as my goodbye
[02:38.45] Oh, oh, oh
[02:41.36] Consider this as my goodbye
[02:44.42] Oh, oh, oh
[02:47.32] This is my goodbye
[02:50.23] Oh, oh, oh
[02:53.21] Consider this as my goodbye
[02:56.17] Oh, oh, oh
[02:59.12] This is my goodbye
[03:00.93] `),

    "sRntPU_s-gI": parseLRC(`[00:23.09] These waves and tides have grown in strength and size
[00:28.26] Is it nature or divine, or a blessing in disguise?
[00:33.28] Our home's in sight
[00:35.77] This storm's our final fight
[00:38.52] There's no time to die
[00:40.22] Comrades (sir!)
[00:42.17] Brace for a storm (storm)
[00:48.16] The likes of which we've never seen before
[00:52.34] Brace for a storm (storm)
[00:58.36] With home so close, we must keep pushing forward
[01:02.51] Full speed ahead
[01:03.86] Head towards the island, but avoid the crashing waves
[01:08.58] Tread where the tide is flat and then you will be saved
[01:13.76] Captain, we will capsize with these waves, our fleet will fail
[01:18.86] Have them follow my ship, I'll ensure that we prevail
[01:23.83] Storm (storm)
[01:28.74] We're taking too much damage to survive
[01:33.10] We'll beat this storm (storm)
[01:38.88] At this rate, we won't make it out alive
[01:42.94] Captain, look
[01:45.82] 
[01:47.89] An island in the sky
[01:53.03] Eurylochus, grab the harpoons
[01:55.78] As many as you can find
[01:58.31] What do you have in mind?
[02:01.06] We're gonna shoot for the sky
[02:02.75] What?
[02:04.46] Storm (storm)
[02:09.72] Everyone grab a harpoon and aim it high
[02:14.45] Storm, storm
[02:19.53] We're shooting for the island in the sky
[02:24.02] In the sky
[02:25.07] `),

    "ZxQHl2fVJ-s": parseLRC(`[00:07.13] Please don't tell me you're about to do what I think you'll do
[00:13.34] You've heard the legends of the island in the sky
[00:16.73] This proves they're true
[00:19.79] We're in the home of the wind god
[00:21.89] We don't know for sure
[00:23.09] How many floating islands have you seen before?
[00:26.76] This is the home of the wind god
[00:28.96] And what's your plan?
[00:30.43] I'm gonna climb to the top and ask 'em for a hand
[00:34.44] You could be caught off guard and lose your life
[00:38.24] Or piss off this god and infuse us with strife
[00:42.32] Don't forget how dangerous the gods are
[00:46.07] Have faith, friend, we've come this far
[00:49.08] Yes, but how much longer 'til your luck runs out?
[00:53.10] How much longer 'til the show goes south?
[00:56.64] How much longer 'til we all fall down?
[00:59.70] You rely on wit, and people die on it, whoa
[01:03.97] I still believe in goodness
[01:07.16] I still believe that we could be kind
[01:10.87] Lead from the heart, and see what starts
[01:14.08] And what will we do when it tears us apart?
[01:18.03] Where is this coming from, my friend?
[01:21.90] I just don't wanna see another life end
[01:25.23] You're like the brother I could never do without
[01:28.50] And suddenly, you doubt that I could figure this out?
[01:31.92] Captain, how much longer 'til your luck runs out?
[01:35.93] How much longer 'til the show goes south?
[01:39.54] How much longer 'til we all fall down?
[01:42.54] You rely on wit, and people die on it, woah
[01:46.51] How much longer 'til the snake breaks free?
[01:50.16] How much longer 'til your great days cease?
[01:53.48] How much longer 'til your strength takes leave?
[01:56.76] You rely on wit, and people die on it, whoa
[02:01.09] Thank you for the concern, but brother, I can assure you
[02:05.97] Our journey is almost done
[02:08.05] I understand that we're tired, I understand that we're fazed
[02:12.68] But don't forget how much we've already faced
[02:15.14] I took 600 men to war and not one of them died there
[02:19.52] In case you needed a reminder
[02:22.63] If you'd like to speak more, let me pull you aside then
[02:26.68] I need to talk to you in private
[02:36.38] I can't have you planting seeds of doubt
[02:39.94] I can't have you disagreeing each route
[02:43.47] I need you to always be devout and comply with this
[02:48.15] Or we'll all die in this
[02:50.34] Okay?
[02:53.60] Okay
[02:55.96] Thank you
[02:56.61] `),

    "Z-Y0iMmFzFE": parseLRC(`[00:11.72] Great wind God, Aeolus, I don't know if you know this
[00:17.45] But our path to home is blocked by an impenetrable storm
[00:23.64] I ask for your assistance, so we at last can go the distance
[00:29.61] Can you cast the perfect winds for us and aid our journey home?
[00:36.25] Ha-ha-ha, I am the wind, twisting and turning
[00:40.58] I give the fire enough to stay burning
[00:43.43] Let's play a game (a game?)
[00:45.16] That's what I'm serving, and if you win, you will get what you're yearning (deal)
[00:49.85] Take a look right here at this bag
[00:52.59] It has the winds of the storm all trapped
[00:55.52] All you gotta do is not open this bag
[00:58.46] Sounds too easy, what's the catch?
[01:00.37] Ha-ha-ha, keep your friends close and your enemies closer
[01:04.55] (Never really know who you can trust)
[01:06.66] If they wanna get the bag open, you gotta say, "No, sir"
[01:10.40] (Sometimes killing is a must) what?
[01:12.57] 'Cause the end always justifies the means
[01:16.13] Friends turn into foes and rivalries
[01:19.00] So, keep your friends close and your enemies closer
[01:22.47] Never really know who you can trust, never really know who you can trust
[01:28.85] Captain, what's happenin'? What's trapped in that bag?
[01:31.92] Somethin' dangerous, friends, we mustn't lag
[01:34.10] It's treasure (what?) Bye-bye
[01:37.65] Open the bag (let's see what you got)
[01:40.01] No, do not
[01:41.67] Everybody listen closely
[01:43.51] See how this bag is closed, that's how it's supposed to be
[01:46.76] This bag has the storm inside
[01:49.08] We cannot let the treasure rumor fly (we'll try)
[01:52.49] Keep your friends close and your enemies closer
[01:55.47] Never really know who you can trust (never really know who you can trust)
[01:57.60] Now they wanna get the bag open so they can have closure
[02:01.43] Sometimes sneaking is a must (sometimes sneaking is a must)
[02:03.91] 'Cause the end always justifies the means
[02:07.21] (Everything's changed since Polities, so)
[02:10.48] Keep your friends close and your enemies closer
[02:13.40] Never really know who you can trust (never really know who you can trust)
[02:16.95] For nine days, I've stayed wide awake
[02:19.35] Tryna make it home with no storm or tidal wave
[02:22.85] I remain unopposed, the bag is still closed
[02:25.85] And I'm getting closer to you
[02:28.88] (Penelope) I can't wait to make some new memories
[02:34.02] (Telemachus) time for me to be the father I never was
[02:39.82] Just keep your eyes open
[02:41.93] Why are my eyes, and my heart, and my soul so heavy?
[02:45.58] Just keep your eyes open
[02:47.93] I keep on trying to embrace you both, why won't you let me?
[02:51.80] Just keep your eyes open
[02:53.62] So much has changed, but I'm the same, yes, I'm the same
[02:57.83] Just keep your eyes open, keep your eyes open
[03:01.78] Wake up
[03:03.27] Wake up, Odysseus, they're opening the bag, wake up
[03:11.75] No
[03:13.49] Keep your friends close and your enemies closer
[03:16.63] Never really know who you can trust (never really know who you can trust)
[03:19.37] Storm, full speed ahead
[03:22.36] Where's the storm taking us?
[03:24.15] I said to keep the bag closed, but you weren't compliant
[03:27.33] If I had to guess? You're heading to the land of the giants
[03:31.15] Storm, storm
[03:37.44] Help me close the bag (but sir, it's too late)
[03:40.00] We can save whatever wind is left to use another day, come on
[03:57.56] Odysseus of Ithaca
[04:02.87] Do you know who I am?
[04:04.91] `),

    "3dzBlSeCJNg": parseLRC(`[00:10.99] Poseidon, Poseidon, Poseidon, Poseidon
[00:18.13] Poseidon, Poseidon, Poseidon, Poseidon
[00:25.50] In all my years of living
[00:28.26] It isn't very often that I get pissed off
[00:31.39] I try to chill with the waves
[00:33.47] But damn, you crossed the line
[00:36.18] 
[00:39.09] I've been so gracious
[00:42.24] And yet, you hurt this son of mine
[00:46.60] That's right, the cyclops you made blind, is mine
[00:52.31] No
[00:53.39] I'm left without a choice and without a doubt
[00:57.21] Guess the pack of wolves is swimming with the shark now
[01:00.42] I've gotta make you bleed, I need to see you drown
[01:04.20] But before you go, I need to make you learn how
[01:07.33] Ruthlessness is mercy upon ourselves
[01:10.95] (Ruthlessness is mercy upon ourselves)
[01:14.40] Ruthlessness is mercy upon ourselves
[01:19.32] Ourselves
[01:21.62] You are the worst kind of good 'cause you're not even great
[01:28.15] A Greek who reeks of false righteousness, that's what I hate
[01:35.12] 'Cause you fight to save lives, but won't kill and don't get the job done
[01:42.36] I mean, you totally could have avoided all this had you just killed my son
[01:47.90] But no
[01:50.49] You are far too nice, mercy has a price
[01:54.05] It's the final crack, we're bound to break the ice now
[01:57.48] You reveal your name, then you let him live
[02:01.29] Unlike you, I've got no mercy left to give 'cause
[02:04.15] Ruthlessness is mercy upon ourselves
[02:07.74] (Ruthlessness is mercy upon ourselves)
[02:11.34] Ruthlessness is mercy upon ourselves
[02:15.95] Ourselves
[02:19.04] And now it is finally time to say goodbye, today you die
[02:25.38] Unless, of course, you apologize
[02:28.84] For my son's pain and all his cries
[02:33.41] Poseidon, we meant no harm
[02:35.87] We only hurt him to disarm him
[02:39.72] We took no pleasure in his pain
[02:43.13] We only wanted to escape
[02:48.64] The line between naïveté and hopefulness is almost invisible
[02:55.76] So close your heart, the world is dark and
[02:59.37] Ruthlessness is mercy
[03:02.39] Die
[03:03.28] Ruthlessness is mercy upon our- (Captain, Captain)
[03:06.82] Ruthlessness is mercy upon our- (Captain, Captain)
[03:10.12] Ruthlessness is mercy upon our- (Captain, Captain)
[03:13.88] Ruthlessness is -
[03:16.49] 
[03:22.98] What have you done?
[03:25.30] When does a ripple become a tidal wave?
[03:28.60] 43 left under your command
[03:31.26] When does man become a monster?
[03:35.98] 
[03:38.93] I am your darkest moment
[03:45.46] The monster that always draws near
[03:51.35] 
[03:53.52] Any last words?
[03:56.25] All I gotta do is open this bag
[03:58.75] What?
[04:00.92] 
[04:15.68] Remember me
[04:17.57] `),

    "Mz2ASoe6OG0": parseLRC(`[00:19.10] Captain, I have something that I must confess
[00:24.66] Something that I must get off my chest
[00:28.50] Until it is said, I cannot rest
[00:31.89] 
[00:34.30] (Captain?) Eurylochus, go make sure this island is secure
[00:38.76] (But captain) there's only so much left we can endure
[00:43.68] Whatever you need to say can wait some more
[00:46.77] Of that, I'm sure
[00:49.32] (Okay)
[00:53.39] 
[01:02.02] Eurylochus, back so soon?
[01:04.37] Where's the rest of your crew?
[01:06.27] And by the gods, what happened to you?
[01:10.44] We came across a palace
[01:12.66] Inside we heard a voice
[01:14.81] It seemed to show no malice
[01:16.96] To greet it was our choice
[01:18.58] But nothing could prepare us for the power that awaited inside
[01:24.16] (What did this palace hide?)
[01:26.75] Sir, since we left home, we've faced a variety of foes from a wide range of places
[01:31.63] Gods, monsters, you know the roster, hostile creatures that we could resist
[01:35.74] But this was a hell of a twist, 'cause we are weak to a power like this
[01:39.30] (What was it?) A woman
[01:41.38] (What?) She had us in just two words
[01:43.94] "Come inside" (damn)
[01:46.69] Welcome to the best part of your lives
[01:50.93] Go ahead and rest wherever you like
[01:53.98] I've got you, don't worry, Circe's got you now
[01:58.41] (Only I stayed outside, but the rest went in)
[02:01.06] Take a seat
[02:03.55] Let me bring you all something to eat
[02:07.26] I bet you're tired from the years spent on your feet
[02:10.92] I've got you, don't worry, Circe's got you now
[02:15.65] (By the time they ate, it was far too late)
[02:18.33] For inside the meal (think of your past)
[02:20.52] She had cast a spell (and your mistakes)
[02:22.65] They began to squeal (they'll be the last)
[02:24.61] And grow snouts and tails (mistakes you'll make)
[02:26.90] She changed them
[02:27.92] I've got all the power, yeah, I've got all the power
[02:31.42] No, I'm not a player, I'm a puppeteer
[02:33.53] No, I don't play, I puppeteer, yeah
[02:35.99] They transformed (this is the price)
[02:37.58] And it wasn't quick (we pay to live)
[02:39.88] She turned our men (the world does not)
[02:42.05] From men to pigs (tend to forgive)
[02:44.10] She changed them
[02:45.03] I've got all the power, yeah, I've got all the power
[02:48.64] No, I'm not a player, I'm a puppeteer
[02:50.76] No, I don't play, I puppeteer, yeah
[02:52.99] (We have to go save them) no, we don't
[02:57.38] Look at all we've lost and all we've learned
[03:00.50] Every single cost is so much more than what we've earned
[03:04.89] Think about the men we have left before there's none
[03:09.06] Let's just cut our losses, you and I, and let's run
[03:13.14] Of course, I'd like to leave now, of course I'd like to run
[03:17.49] But I can hardly sleep now knowing everything we've done
[03:21.49] There's no length I wouldn't go if it was you I had to save
[03:26.23] I can only hope you'd do the same
[03:31.30] I can hear her still (no one will find)
[03:33.46] And her voice deceives (their way between)
[03:35.59] What if she can't be killed? (My nymphs and I)
[03:37.77] Will you choose to leave? (Their loving queen)
[03:39.89] (I don't know)
[03:40.84] I've got all the power, yeah, I've got all the power
[03:44.30] No, I'm not a player, I'm a puppeteer
[03:46.41] No, I don't play, I puppeteer, yeah
[03:48.49] She's a clever witch (this is the price)
[03:50.51] And she's hard to slay (we pay to love)
[03:52.72] It's a game of wits (we draw the line)
[03:54.70] But you don't have to play (watch from above)
[03:56.83] I have to try
[03:57.95] I've got all the power, yeah, I've got all the power
[04:01.40] No, I'm not a player, I'm a puppeteer
[04:03.52] No, I don't play, I puppeteer, yeah
[04:05.37] `),

    "xkIBM71E0_w": parseLRC(`[00:11.07] I must say what a brilliant speech you gave
[00:15.16] Who goes there?
[00:16.37] Just a friend who could help you save your men
[00:20.56] A foe like Circe is not to be messed with
[00:23.22] You want to beat her?
[00:24.51] You'll need the blessing of a certain god
[00:27.15] Divine intervention
[00:28.64] Someone who's not afraid to send a message
[00:33.28] Hermes?
[00:36.85] Wouldn't you like a taste of the power?
[00:39.39] Wouldn't you like to use more than words?
[00:41.72] Deep in the night, the fight lasts for hours
[00:44.08] You can be hurt or you can beat her
[00:46.63] Wouldn't you like to have some of the magic?
[00:49.18] Wouldn't you like your outcome preferred?
[00:51.55] Deep in the night, the fight can be tragic
[00:53.83] I'll help you conquer her
[00:55.97] She can turn you into an animal that'll end up on her plate
[01:00.87] She can all but make you fall in love like you're on your hundredth date
[01:05.85] She can conjure up a monster that'll grind you to the bones
[01:10.66] She has all the ways to haunt you when you take her on alone
[01:16.06] Wouldn't you like a taste of the power?
[01:18.56] Wouldn't you like to use more than words?
[01:20.96] Deep in the night, the fight lasts for hours
[01:23.22] You can be hurt or you can beat her
[01:25.79] Wouldn't you like to have some of the magic?
[01:28.23] Wouldn't you like your outcome preferred?
[01:30.65] Deep in the night, the fight can be tragic
[01:33.04] I'll help you conquer her
[01:35.08] Oh-oh, here in the root of this flower
[01:39.03] There lies such a power to take her on
[01:42.32] You must consume and digest it
[01:44.04] Then you'll manifest a being of your creation
[01:47.20] All you need's imagination
[01:49.68] Though it's only for a moment
[01:52.17] 'Til you've beaten your opponent
[01:55.32] And I call this root, "Holy moly"
[02:00.03] Wouldn't you like a taste of the power?
[02:02.52] Wouldn't you like to use more than words?
[02:05.01] Deep in the night, the fight lasts for hours
[02:07.39] You can be hurt or you can beat her
[02:09.92] Wouldn't you like to have some of the magic?
[02:12.33] Wouldn't you like your outcome preferred?
[02:14.88] Deep in the night, the fight can be tragic
[02:17.16] I'll help you conquer her
[02:19.62] Wouldn't you like a taste of the power?
[02:22.12] Wouldn't you like to use more than words?
[02:24.69] Deep in the night, the fight lasts for hours
[02:27.09] You can be hurt or you can beat her
[02:29.50] Wouldn't you like to have some of the magic?
[02:31.93] Wouldn't you like your outcome preferred?
[02:34.36] Deep in the night, the fight can be tragic
[02:36.76] I'll help you conquer her
[02:40.29] Hermes
[02:42.32] Thank you
[02:43.78] Don't thank me, friend
[02:45.18] You very well may die
[02:48.76] Good luck
[02:49.53] `),

    "km6NITbLVHc": parseLRC(`[00:11.05] Lady of the palace, sorry that I ask this
[00:14.19] But I hope that I've been misinformed
[00:17.08] I sent out some scouts to take a look around through here
[00:20.53] And they wound up at your doors
[00:23.16] Through the years, we seldom get a warm welcome
[00:26.00] So I must ask just to be sure
[00:29.07] Did you do something to them?
[00:30.88] Who, me?
[00:32.41] All I did was reveal their true forms
[00:35.17] You turned them into pigs
[00:37.20] Huh
[00:38.25] I don't know who you are, nor why you're here
[00:41.64] But let me make this one thing clear
[00:44.35] I've got people to protect
[00:46.27] Nymphs I can't neglect
[00:47.77] So I'm not taking chances, dear
[00:50.14] If you make one wrong move, then you're done for
[00:53.07] Anything I don't approve, then you're done for
[00:56.27] I could put a spell on you, and you're done for
[00:59.18] Boy, you better run, or soon you will be done for
[01:02.03] I don't mean to tip your scale but
[01:04.23] You will fail at placing any spells on me
[01:08.18] I just ate a flower, one that claims your power
[01:11.16] So you better cower now and flee
[01:13.92] You must be a liar
[01:15.58] Mortals can't acquire
[01:17.12] Moly without dire consequence
[01:20.06] Then I must be a god like you
[01:22.10] 'Cause I got this root from the ground with my bare hands
[01:25.87] Hermes gave it to you, didn't he?
[01:27.43] Okay, fine, yes, but regardless
[01:29.86] You and I are now evenly matched
[01:32.76] Our fates are intertwined, they're attached
[01:35.11] I've got people to protect
[01:37.29] Friends I can't neglect
[01:38.53] So now, there is no turning back
[01:41.22] You've made your one wrong move, now you're done for
[01:44.17] I will be the one to prove that you're done for
[01:47.02] Not even a spell saves you, 'cause you're done for
[01:50.23] Oh, you better run, or soon you will be done for
[01:55.05] 
[01:58.14] You've lost
[01:59.73] My nymphs are like my daughters
[02:02.19] I protect them at all costs
[02:05.69] The last time we let strangers live
[02:08.50] We faced a heavy loss
[02:11.67] You've given me no reason to bestow you with my trust
[02:17.76] But everyone's true colors are revealed in acts of lust
[02:23.83] I'm not sure I follow
[02:23.99] `),

    "uXdLAOBANGE": parseLRC(`[00:00.76] There are other ways of persuasion
[00:04.79] There are other modes of control
[00:08.47] There are other means of deceit
[00:12.49] There are other roads to the soul
[00:16.34] There are other options of passion
[00:20.10] You have so much left to learn
[00:23.81] Want to save your men from the fire?
[00:27.69] Show me that you're willing to burn, whoa
[00:32.41] Oh, well, who's to say, with all the mistakes I've made (don't be afraid)
[00:35.72] That they will be the last (think of your past)
[00:37.60] Mistakes I ever make? (Don't break when)
[00:39.73] There is so much power, so much power
[00:43.75] But there's no puppet here
[00:48.50] This is the price we pay for love (I'm just a man)
[00:52.42] There is the line never enough (I'm just a man)
[00:55.72] So much power, so much power (forgive me)
[00:59.05] But there's no puppet here (I can't)
[01:11.12] Back at home, my wife awaits for me
[01:14.56] She's my everything, my Penelope
[01:18.50] And she's all my power, all my power
[01:23.09] But it's been 12 long years
[01:26.25] Oh, 12 long years since I have seen my wife
[01:30.48] And now the God of Tides is out to end my life
[01:34.79] So I beg you, Circe, grant us mercy
[01:39.15] And let us puppets leave
[01:47.04] Ah, Poseidon, eh?
[01:50.14] There might be a way to evade him
[01:54.24] There might be a way to get home
[01:57.84] Though this other way's very dangerous
[02:02.08] It might be your one final hope
[02:06.34] I know of a brilliant prophet
[02:10.21] Problem is this prophet is dead
[02:14.48] I can't get you home, but I'll get you to the Underworld instead
[02:22.32] I'll release your men, and I'll get you to the Underworld instead
[02:32.22] Wait, you're helping us?
[02:34.15] There are many ways of persuasion
[02:38.36] There are many modes of control
[02:42.18] Maybe showing one act of kindness
[02:46.29] Leads to kinder souls down the road
[02:50.18] I remember actions of passion
[02:54.12] I have been in love once before
[02:58.12] Maybe one day, the world will need a puppeteer no more
[03:05.88] Or maybe one day, the world will need a puppeteer more
[03:11.28] (So much power, so much power)
[03:14.90] (But there's no puppet here)
[03:19.10] (No, she's not a player, she's a puppeteer)
[03:21.06] (No, she's not a player, she's a puppeteer, yeah)
[03:23.93] `),

    "cyqul8pKHko": parseLRC(`[00:03.01] Friends, Circe's instructions were clear
[00:08.02] No matter what we hear
[00:11.59] Full speed ahead, until we find the prophet
[00:15.67] My comrades, this land confuses your mind
[00:20.55] So no matter who we find
[00:24.24] Full speed ahead, until we find the prophet (good)
[00:30.09] 
[00:44.11] All I hear are screams, every time I dare to close my eyes
[00:50.45] I no longer dream, only nightmares of those who've died
[00:56.70] Nothing's what it seems (nothing's what it seems)
[00:59.98] And here in The Underworld, the past seems close behind
[01:05.56] This land confuses your mind
[01:10.68] When does a man become a monster?
[01:16.94] 558 men who died under your command
[01:24.48] Captain! Captain! Captain! Captain!
[01:29.82] Why would you let the cyclops live when ruthlessness is mercy?
[01:35.65] All I hear are screams, every time I dare to close my eyes
[01:41.66] I no longer dream, only nightmares of those who've died
[01:48.01] Nothing's what it seems (nothing's what it seems)
[01:51.05] But in The Underworld, the past seems close behind
[01:55.85] I keep thinking of the infant from that night
[01:59.13] I keep thinking of the infant from that night
[02:02.28] This life is amazing when you greet it with open arms (Polites)
[02:08.64] Whatever we face, we'll be fine if we're leading from the heart
[02:14.89] No matter the place, we can light up the world
[02:18.93] Here's how to start
[02:21.14] Greet the world with open arms
[02:23.88] Greet the world with open arms
[02:29.55] Polites
[02:34.03] Waiting
[02:37.53] That voice, it can't be
[02:40.38] Waiting
[02:44.15] Mom?
[02:46.65] Waiting
[02:50.37] Odysseus, when you come home I'll be waiting
[02:56.22] Even if you're the last thing I see, I'll be waiting (I'm right here, mom)
[03:02.01] Can't you see? (Waiting) I'm waiting
[03:10.01] I took too long (I'll always love you)
[03:16.04] And I ventured too far (I'll stay in your heart)
[03:22.66] While you were waiting, waiting, waiting
[03:35.62] 
[03:38.62] Bye mom
[03:43.32] All I hear are screams (all I hear are screams)
[03:46.53] Every time I dare to close my eyes
[03:49.51] I no longer dream (I no longer dream)
[03:53.07] Only nightmares of those who've died
[03:56.02] Nothing's what it seems, nothing's what it seems
[03:59.33] But in The Underworld, your past is always close behind
[04:04.43] Your past is always close behind
[04:07.98] Down in The Underworld
[04:09.45] `),

    "BZ8qL5P270Q": parseLRC(`[00:07.13] I am the prophet with the answers you seek
[00:14.14] Time, I've unlocked it
[00:17.44] I see past and future running free
[00:21.52] There is a world where I help you get home
[00:28.47] But that's not a world I know
[00:33.28] What?
[00:34.90] I see a song of past romance
[00:38.74] I see the sacrifice of man
[00:42.10] I see portrayals of betrayal
[00:46.27] And a brother's final stand
[00:49.56] I see you on the brink of death
[00:52.87] I see you draw your final breath
[00:56.77] I see a man who gets to make it home alive
[01:02.83] But it's no longer you
[01:09.50] This can't be
[01:11.44] We've suffered and sailed through the toughest of hells
[01:15.00] Now you tell us our effort's for nothing?
[01:19.02] I see your palace covered in red
[01:26.13] Faces of men who had long believed you're dead
[01:33.54] I see your wife with a man who is haunting
[01:40.64] A man with a trail of bodies (who?)
[01:47.01] I see a song of past romance
[01:50.46] I see the sacrifice of man
[01:53.88] I see portrayals of betrayal
[01:58.06] And a brother's final stand
[02:01.39] I see you on the brink of death
[02:04.97] I see you draw your final breath
[02:08.55] I see a man who gets to make it home alive
[02:14.68] But it's no longer you
[02:27.74] `),

    "4Q0Un9PQ0wk": parseLRC(`[00:04.53] How has everything been turned against us?
[00:09.42] How did suffering become so endless?
[00:15.16] How am I to reunite with my estranged?
[00:20.06] Do I need to change?
[00:23.74] 
[00:25.76] I'm surrounded by the souls of those I've lost
[00:30.82] I'm the only whose line I haven't crossed
[00:36.38] What if the greatest threat we'll find across the sea
[00:42.22] Is me?
[00:43.99] What if I'm the monster? What if I'm in the wrong?
[00:49.23] What if I'm the problem that's been hiding all along?
[00:54.32] What if I'm the one who killed you every time I caved to guilt?
[00:59.77] What if I've been far too kind to foes, but a monster to ourselves?
[01:05.20] What if I'm the monster?
[01:08.90] Is the cyclops struck with guilt when he kills?
[01:11.31] Is he up in the middle of the night?
[01:13.72] Or does he end my men to avenge his friend
[01:16.73] And then sleep knowing he has done him right?
[01:19.40] When the witch turns men to pigs to protect her nymphs, is she going insane?
[01:24.80] Or did she learn to be colder when she got older and now she saves them the pain?
[01:30.17] When a God comes down and makes a fleet drown
[01:32.97] Is he scared that he's doing something wrong
[01:35.05] Or does he keep us in check so we must respect him
[01:38.32] And now no one dares to piss him off?
[01:40.67] Does a soldier use a wooden horse to kill sleeping Trojans 'cause he is vile?
[01:45.71] Or does he throw away his remorse and save more lives with guile
[01:50.33] If I became the monster and threw that guilt away
[01:55.74] Would that make us stronger? Would it keep our foes at bay?
[02:00.94] If I became the monster to everyone but us
[02:06.22] And made sure we got home again, who would care if we're unjust?
[02:11.76] If I became the (monster)
[02:15.08] Oh, ruthlessness is mercy upon ourselves (monster)
[02:20.63] And deep down I know this well
[02:23.27] I lost my best friend, I lost my mentor, my mom
[02:26.46] Five-hundred men gone, this can't go on
[02:28.80] I must get to see Penelope and Telemachus
[02:32.42] So if we must sail through dangerous oceans and beaches
[02:36.27] I'll go where Poseidon won't reach us
[02:38.37] And if I gotta drop another infant from a wall
[02:40.76] In an instant so we all don't die
[02:43.26] Then I'll become the monster
[02:46.71] I will deal the blow
[02:48.88] And I'll become the monster
[02:51.63] Like none they've ever known
[02:53.90] So what if I'm the monster lurking deep below?
[02:59.47] I must become the monster, and then we'll make it home
[03:06.56] (Monster)
[03:09.52] Penelope
[03:11.70] (Monster)
[03:14.05] Telemachus
[03:16.82] (Monster)
[03:19.28] Oh, ruthlessness is mercy upon ourselves
[03:22.42] (Monster)
[03:26.37] I'll become the monster
[03:29.60] `),

    "-u_-wpcpY-0": parseLRC(`[00:07.52] Penelope
[00:11.23] Penelope
[00:14.95] Don't you miss me?
[00:18.93] More than you know
[00:21.30] Then jump in the water and kiss me
[00:24.99] Penelope, I've told you this before
[00:28.99] You know I'm afraid of the water
[00:32.67] I'll make sure that you are safe and sound
[00:36.47] Come play with me and our daughter
[00:39.13] And let's watch our love leave the ground
[00:43.45] Oh, I would
[00:45.15] But I'd be suffering trying to float the whole time
[00:49.22] I would take the suffering from you
[00:53.08] Ooh, as good as that sounds, right here I'm just finе
[00:56.69] I can take the suffering from you
[01:00.41] You know that I prеfer my feet on the ground
[01:03.74] I will take the suffering from you
[01:08.51] Fine, but only if you answer a question or two
[01:13.27] Of course
[01:14.27] Okay, so let's say I was on the run or hiding
[01:17.27] From, I don't know, Poseidon
[01:18.87] And let's say he blocked the way home
[01:20.33] With giant waves and giant storms
[01:22.21] Oh no
[01:22.74] How am I to evade him?
[01:24.60] How am I to get home?
[01:26.53] Which route should I take?
[01:28.13] Where am I supposed to go?
[01:29.94] He will chase you high and low
[01:33.35] So find a place he'd never go
[01:36.71] The one way you'll get home
[01:39.76] Is sailing where he's scared to roam, oh
[01:42.79] It's through the lair of Scylla
[01:46.56] No
[01:47.69] This is your only way home
[01:50.87] The lair of Scylla
[01:52.75] But Scylla has a cost
[01:54.88] Well, you asked and now you know
[01:58.25] Now jump in the water!
[02:00.03] Penelope, why?
[02:01.93] You know I'm too shy and terrified
[02:04.99] I would take the suffering from you
[02:08.67] Oh, for you I would die, but can't you let me stay dry?
[02:12.24] I can take the suffering from you
[02:15.86] You should come onto the ship
[02:18.25] We'll jump at the same time
[02:19.74] I will take the suffering from you
[02:25.21] Ah, the things I do for you
[02:28.47] `),

    "x2r7dKWFbP8": parseLRC(`[00:02.83] Let's cut the charade, you are no wife of mine
[00:08.56] You've been tryin' to take my life this whole time
[00:13.85] I know underwater, there are packs of you hiding
[00:19.29] Yeah, I know exactly what you are, a siren
[00:22.68] 
[00:25.32] My real wife knows I'm not scared of the water
[00:30.56] And my real wife knows I don't have a daughter
[00:36.47] But while you were so focused on turning my men into snacks
[00:42.15] You didn't notice that your friends got snatched
[00:44.46] What?
[00:45.60] We are a different beast now, we are the ones who feast now
[00:51.37] No more of us deceased, 'cause we won't take more suffering from you
[00:56.73] We are the man-made monsters, we are the ones who conquer
[01:02.40] You are a threat no longer, we won't take more suffering from you
[01:08.07] We've been away from home for about 12 years or so
[01:13.55] First, we slayed in our own war, and now, we're here with more foes
[01:19.02] While on the run from Poseidon, we found a ship with no crew
[01:24.30] I realized nearby, there were sirens, singing sailors to their dooms
[01:30.45] We filled our ears with beeswax, that's how we resist your song
[01:35.81] You pretended to be my wife, so I just played along
[01:41.57] I read your lips and phrases, scanning for information
[01:46.61] Sirens know about every route and horizon
[01:49.26] Now I know how to get back to my island
[01:52.58] We are a different beast now, we are the ones who feast now
[01:58.39] No more of us deceased, 'cause we won't take more suffering from you
[02:03.97] We are the man-made monsters, we are the ones who conquer
[02:09.30] You are a threat no longer, we won't take more suffering from you
[02:14.53] Spare us
[02:16.71] Oh, spare us, please
[02:18.81] Why?
[02:19.39] So you can kill the next group of sailors in this part of the sea?
[02:22.60] Nah, you wouldn't have spared me
[02:24.75] I made a mistake like this, it almost cost my life
[02:28.16] I can't take more risks of not seeing my wife
[02:31.15] Cut off their tails! We're ending this now
[02:33.85] Throw their bodies back in the water
[02:35.88] Let them drown (no)
[02:37.32] He is a different beast now, he is the one who feasts now
[02:42.82] No more of us deceased, 'cause he won't take more suffering from you
[02:48.33] He is the man-made monster, he is the one who conquers
[02:53.98] You are a threat no longer, he won't take more suffering from you
[02:58.43] Kill them all
[02:59.30] Oh, whoa-oh-oh, oh, whoa-oh-oh, oh, whoa-oh-oh
[03:04.22] Kill them all
[03:04.73] Oh, whoa-oh-oh, oh, whoa-oh-oh, oh, whoa-oh-oh
[03:09.68] Kill them all
[03:10.47] Oh, whoa-oh-oh, oh, whoa-oh-oh, oh, whoa-oh-oh
[03:14.95] Kill 'em all
[03:17.49] Oh, whoa-oh-oh, oh, whoa-oh-oh, oh, whoa-oh-oh
[03:20.13] Odysseus
[03:20.64] `),

    "PTGWC85tLfg": parseLRC(`[00:06.38] The lair of Scylla
[00:11.24] This is our only way home
[00:17.08] Deep down
[00:20.02] You're quiet today
[00:21.85] Deep down
[00:24.96] Not much to say
[00:26.31] Deep down
[00:28.45] You hide a reason for shame
[00:31.05] I've got a secret I can no longer keep
[00:35.43] Deep down
[00:37.69] You know that we are the same
[00:40.14] I opened the wind bag while you were asleep
[00:45.79] Leaving them feeling betrayed
[00:50.32] Breaking the bonds that you've made
[00:52.84] I'm so sorry
[00:54.98] There is no price we won't pay
[00:57.55] Forgive me
[00:58.93] We both know what it takes to survive
[01:04.03] Full speed ahead (full speed)
[01:06.58] Full speed ahead
[01:09.86] Full speed ahead
[01:12.15] Deep down, we only care for ourselves
[01:17.67] Eurylochus, light up six torches
[01:21.33] Deep down, we're lonely demons from Hell
[01:27.01] Captain, something approaches
[01:32.71] Hello
[01:35.31] 
[01:54.34] Row for your lives!
[01:56.56] Drown in your sorrow and fears
[02:01.42] Choke on your blood and your tears
[02:05.92] Bleed 'til you've run out of years
[02:09.63] We must do what it takes to survive
[02:15.11] Give up your honor and faith
[02:19.67] Live out your life as a wraith
[02:24.43] Die in the blood where you bathe
[02:28.03] We must do what it takes to survive
[02:39.33] We are the same, you and I, I
[02:46.48] `),

    "x_xJEfDB7y0": parseLRC(`[00:16.18] Tell me you did not know that would happen
[00:20.15] Say you didn't know how that would end
[00:24.23] Look me in the eyes, and tell me, captain
[00:28.27] That you did not just sacrifice six men
[00:32.57] Use your wits to try and say I'm crazy and mad
[00:36.35] That this is all some trick the gods have sent
[00:40.66] Tell me you did not miss home so painfully bad
[00:44.46] That you gave up the lives of six of our friends
[00:48.75] When we fought the cyclops, you were quick to hatch a plan
[00:52.66] And when we fought with Circe, it was you who left behind no man
[00:56.72] But when we saw this monster, we didn't take a stand
[01:00.49] We just ran
[01:02.93] Say something
[01:04.65] I can't
[01:10.64] Then you havе forced my hand
[01:14.39] Eurylochus
[01:15.23] Lower your weapon, no can do
[01:17.42] You miss your wifе so bad, you trade the lives of your own crew
[01:21.44] Don't make me fight you, brother
[01:23.40] You know you'd have done the same
[01:25.68] If you want all the power, you must carry all the blame
[01:30.67] Eurylochus, Eurylochus, Eurylochus
[01:34.72] Odysseus, Odysseus, Odysseus
[01:38.53] There is no price he won't pay
[01:41.62] I am not letting you get in my way
[01:50.51] My brothers, why?
[01:53.89] How are we supposed to trust you now?
[01:57.71] Now your time has come, your luck's run out
[02:01.83] Now, the time has come to shut you down
[02:05.57] You relied on wit, and then we died on it
[02:09.25] Whoa
[02:15.32] Agh, my head
[02:18.12] Where are we?
[02:21.98] Some island, the first one we found
[02:26.19] It's bursting with cows just roaming around
[02:29.80] Begging us to eat, so much meat
[02:34.14] And hunger is so heavy
[02:38.36] This statue
[02:40.36] The god of the sun
[02:42.39] Don't know where it's from
[02:44.42] But here's where we found all these cows to hunt
[02:49.18] Right in front, and hunger is so heavy (hunger is so heavy)
[02:54.98] Please don't tell me you're about to do what I think you'll do
[03:02.06] Ody, we're never gonna get to make it home
[03:05.73] You know it's true
[03:07.33] You don't know that's true
[03:09.44] This is the home of the sun god
[03:11.97] I'm starving, my friend
[03:13.65] But if you kill his cattle, who knows what he'll send?
[03:17.49] This is the home of the sun god
[03:20.08] I'm tired, my friend
[03:21.43] But we're so close to home, this can't be where it ends
[03:27.46] How much longer must I suffer now? (Please don't do this)
[03:31.30] How much longer must I push through doubt? (I need to get home)
[03:35.57] How much longer must I go about (Eurylochus)
[03:39.38] My life like this, when people die like this? Whoa
[03:43.61] How much longer must we suffer now? (Reconsider)
[03:47.77] How much longer must we push through doubt? (We can get home)
[03:51.70] How much longer must we go about (Eurylochus)
[03:55.65] Our lives like this when people die like this? Whoa
[03:58.34] I'm just a man (Eurylochus, no)
[04:10.05] You've doomed us
[04:12.97] You've doomed us all, Eurylochus
[04:16.37] Captain?
[04:20.24] We need to get away from this island now
[04:23.37] Grab an oar with all the strength your arms allow
[04:27.47] These cows were immortal, they were the sun god's friends
[04:31.28] And now that we've pissed them off, who do you think he'll send?
[04:35.43] Full speed ahead
[04:37.13] Full speed ahead (faster)
[04:39.58] Full speed ahead (faster)
[04:41.56] Full speed ahead
[04:46.32] We're too late
[04:47.48] `),

    "cAId1J7msWI": parseLRC(`[00:28.12] Pride is a damsel in distress
[00:34.22] Hiding away where only I can undress her
[00:39.93] Try all she can not to confess
[00:44.81] In the end, it's all the same once I apply all the pressure
[00:51.37] Thunder, bring her through the wringer
[00:57.42] Show her I'm the judgment call
[01:00.23] The one who makes her kingdom fall
[01:03.33] Lightning, wield her, use and yield her
[01:09.38] Show her what she can't conceal
[01:12.15] For true nature will be revealed
[01:16.19] Tell me, Odysseus
[01:18.85] If I were to make you choose
[01:21.79] The lives of your men and crew or your own
[01:25.27] Why do I think they'd lose?
[01:28.18] Enlighten me, King of Ithaca
[01:30.98] Since hunger was far too great
[01:33.60] I wonder who'd take the weight of the damned
[01:37.23] And suffer a gruesome fate to the
[01:39.57] Thunder bringer, here to ring your
[01:45.36] Ears until you're deaf with fear
[01:48.26] And spear you while your death is near
[01:51.41] Lightning wielder, here to yield your
[01:57.54] Time, for you have passed your prime
[02:00.02] Sublime you for your act of crime
[02:04.87] Choose
[02:07.81] (Choose?)
[02:09.16] Someone's gotta die today
[02:12.19] And you have got the final say
[02:16.83] You?
[02:19.39] Or your crew?
[02:21.15] Please don't make me do this
[02:24.17] Don't make me do this
[02:27.41] When does a comet become a meteor?
[02:31.49] When does a candle become a blaze? (I can take the suffering from you)
[02:34.27] When does a man become a monster?
[02:40.10] When does a ripple become a tidal wave?
[02:43.32] When does the reason become the blame? (Let me take the suffering from)
[02:46.40] When does a man become a monster?
[02:51.21] 
[03:04.42] Captain?
[03:06.79] (I have to see her)
[03:09.96] But we'll die
[03:12.22] (I know)
[03:15.53] Thunder, bring her through the wringer
[03:21.55] Show her I'm the judgment call
[03:24.20] The one who makes her kingdom fall
[03:27.41] Lightning, wield her, use and yield her
[03:33.54] Show her what she can't conceal
[03:36.10] For true nature will be revealed
[03:38.77] `),

    "Z9NNit-z8wE": parseLRC(`[00:15.79] It's just me, myself and I
[00:18.79] Stuck in my bedroom, living in this world you left behind
[00:23.86] Dreaming of all these monsters that I'll never get to fight
[00:28.76] But boy, I wish I could, so, I could bring the world some light
[00:34.23] 'Cause I'm stuck with your stories but no clue who you are
[00:39.54] And no idea if you're dead or just too far
[00:44.64] Somebody tell me, come and give me a sign
[00:50.02] If I fight those monsters, is it you I'll find?
[00:54.77] If so then
[00:56.08] Give me Sirens and a Cyclops
[00:58.30] Give me Giants and a Hydra
[01:00.54] I know life and fate are scary but I wanna be legendary
[01:06.30] I'll fight the harpies and chimeras, the Minotaur, even Cerberus
[01:11.28] I know life and fate are scary, but I wanna be l-l-l-legendary
[01:16.37] There are strangers in our halls
[01:19.57] Trying to win the heart of my mom, but she is standing tall
[01:24.37] 108 old faces of men who call me small
[01:29.63] They keep taking space and it's not much longer we can stall
[01:34.80] 'Cause they're getting impatient
[01:37.63] Dangerous too
[01:40.20] And I would fight them if I was half as strong as you
[01:45.12] Somebody help me, come and give me the strength
[01:50.23] Can I do whatever it takes to keep my mom safe?
[01:55.34] If so then
[01:56.64] Give me Sirens and a Cyclops
[01:59.11] Give me Giants and a Hydra
[02:01.16] I know life and fate are scary but I wanna be legendary
[02:06.28] I'll fight the harpies and chimeras, the Minotaur, even Cerberus
[02:12.06] I know life and fate are scary, but I wanna be legendary!
[02:16.89] Where is he? Where is the man who'll have you to wife?
[02:20.57] Oh-whoa-oh
[02:21.85] Where is he? Where is the man with whom you'll spend your life?
[02:25.78] 'Cause it's been 20 years (20 years)
[02:28.84] And we still have no king
[02:31.32] Give me a chance, a single opportunity
[02:33.82] And I'll overcome these obstacles and scrutiny and-
[02:36.68] Boy
[02:38.87] When's your tramp of a mother gonna choose a new husband?
[02:41.65] (Oh-oh)
[02:43.46] Why don't you open her room so we can have fun with her?
[02:46.65] Don't you dare call my mother a tramp!
[02:50.74] (Oh-whoa-oh)
[02:52.90] I just did
[02:54.76] What'chu gonna do about it, champ?
[02:58.81] Somebody tell me, come and give a sign
[03:05.77] If I fight this monster, is it you I'll find?
[03:10.72] `),

    "-gqU2V1snnc": parseLRC(`[00:02.24] Fight, little wolf, fight
[00:03.99] Wanna entertain me?
[00:05.48] Bite, little wolf, bite
[00:07.07] Let's see how you take this
[00:08.65] Strike, little wolf, strike
[00:10.30] Wanna be a man? Then
[00:11.83] Fight, little wolf, fight, little wolf, fight
[00:15.54] You've made your worst mistake here, might be your last one too
[00:21.56] You'll have run out of bones to break when you and I are through
[00:28.29] I'll teach you all the lessons your daddy never could
[00:34.38] This cruel world doesn't give out presents just for being good, so
[00:40.70] Fight, little wolf, fight
[00:42.39] Wanna entertain me?
[00:43.86] Bite, little wolf, bite
[00:45.44] Let's see how you take this
[00:47.19] Strike, little wolf, strike
[00:48.69] Wanna be a man? Then
[00:50.33] Fight, little wolf, fight, little wolf, fight
[00:53.10] Or die, little wolf, die
[00:54.96] Don't you know it's fight or
[00:56.69] Flight, little wolf, flight?
[00:58.37] All because you had to
[00:59.89] Try, little wolf, try
[01:01.54] Run away before you
[01:03.10] Die, little wolf, die, little wolf, die
[01:08.32] Need some help?
[01:12.27] 
[01:15.19] What's going on here?
[01:17.01] Is your plan to stand around?
[01:19.62] 'Cause I suggest you fight back
[01:23.10] I don't know how
[01:24.43] Uppercut him, now
[01:26.15] Whoa, how did I do that?
[01:29.90] Is time now moving slow?
[01:32.42] No, I just made your thoughts quick
[01:35.42] Woah, that is so sick!
[01:38.85] Alright now, let's try this again
[01:41.72] I've no respect for bullies, those who impose their will
[01:47.96] I've seen plenty enough to truly understand this kind of filth
[01:54.60] Let's teach this dog a lesson in front of all his kind
[02:00.79] One young wolf has a larger heart than all these men combined
[02:10.35] Fight, little wolf, fight
[02:11.88] Show them that you've got some
[02:13.59] Bite, little wolf, bite
[02:15.05] Take advantage now and
[02:16.54] Strike, little wolf, strike
[02:18.24] Don't go down without a
[02:19.94] Fight, little wolf, fight, little wolf
[02:22.24] Get up and fight
[02:23.28] Fight, little wolf, fight
[02:24.74] Wanna entertain us? (Oh, oh-oh)
[02:26.41] Bite, little wolf, bite
[02:27.88] Let's see how you take this
[02:29.12] Strike, little wolf, strike (strike!)
[02:31.12] Wanna be a man? Then (oh-oh, oh-oh)
[02:32.74] Fight, little wolf, fight, little wolf, fight (fight!)
[02:36.06] Oh, maybe I pushed you a bit too hard
[02:39.57] Ow
[02:42.89] Go back and cry in your corner
[02:45.88] Make sure your mother hears
[02:48.82] If she won't choose a man to adorn her, we'll bring blood and tears
[02:56.80] 
[03:04.52] Tell me, Athena, why you came to my aid
[03:08.88] `),

    "3pIXn3zHkpc": parseLRC(`[00:04.49] I had a friend before and
[00:06.53] He was a lot like you
[00:08.60] I helped him fight through war but
[00:10.76] He had his demons too
[00:12.39] And then we grew apart
[00:16.77] Then his light went dark
[00:23.69] And so I thought
[00:24.94] Maybe if I made a different call
[00:29.00] Maybe if I hadn't missed it all
[00:33.21] Maybe he'd be fine
[00:37.59] Maybe we'd unwind
[00:41.61] Maybe if I help another soul
[00:45.82] Maybe if I helped you reach your goal
[00:49.90] Life could be that bright
[00:54.23] I could sleep at night
[01:01.05] Athena, I don't know who your friend is
[01:04.91] I don't know what he's like, but
[01:07.02] My time with you has been splendid
[01:09.32] The bеst day of my life
[01:10.75] Cause I got in a fight, and I didn't die
[01:13.22] I'vе never felt strong before
[01:15.16] You're my friend, I couldn't ask for more
[01:17.91] And so I think
[01:19.39] Maybe if life wasn't spent as planned
[01:23.45] Maybe it's time that you lend a hand
[01:27.68] I don't think he'll mind
[01:31.59] If not his friend, then mine
[01:36.15] Maybe, to fall is to learn one way
[01:40.14] Maybe, it's all gonna turn out great
[01:44.24] I know we'll be fine
[01:48.34] I know it's light you'll find
[01:55.94] You're a good kid
[01:57.78] Thanks
[01:58.54] `),

    "jWOpikivhbQ": parseLRC(`[00:04.16] Old friend
[00:06.70] It's been ten years since I last saw you
[00:10.87] Remember me
[00:13.43] I am the infamous
[00:16.30] Odysseus!
[00:17.57] (Oh-woah-oh-oh-oh, woah-oh-oh-oh, woah-oh-oh)
[00:20.45] Let's see where you've been
[00:23.22] Keep your friends close and your enemies closer
[00:26.00] Ruthlessness is mercy upon ourselves
[00:28.85] One wrong move and you're done for, anything I
[00:31.71] Song of past romance, I see the
[00:34.47] We won't take more suffering from you
[00:37.71] Drown in your sorrow and fears!
[00:40.96] Captain?
[00:43.18] I have to see her
[00:46.19] But we'll die
[00:49.07] I know
[00:51.91] 
[00:54.10] Odysseus, where did you go?
[00:58.55] 
[01:08.94] Morning sleepyhead, you've been resting for a while
[01:14.21] I swore that you were dead when you washed up on my isle
[01:19.02] Did you know you talk in your sleep?
[01:21.78] Tell me though, who's Penelope?
[01:24.60] She's my wife
[01:29.45] Anyways, I've got all you could want here, all you could need here
[01:33.75] Just you and me, my dear, my love for life
[01:37.15] Soon into bed we'll climb and spend our time
[01:40.25] I'm not your man
[01:42.28] I'm what you want here, I'm what you need here
[01:45.12] Just you and me, my love in paradise
[01:48.42] Now 'til the end of time
[01:50.63] From here on out you're mine, all mine
[01:53.58] Hell no, I could kill you where you stand
[01:57.23] I'm no pet, I'm a married man
[01:59.50] Oh, handsome, you may try
[02:01.82] But last I checked, goddesses can't die
[02:05.63] Goddess?
[02:06.58] You're adorable
[02:08.07] Bow down now to the immortal Calypso, here to entertain
[02:13.15] But fear not, I bring no pain
[02:15.19] 'Cause we've got all we could want here, all we could need here
[02:18.94] Under my spell, we're stuck in paradise
[02:22.37] No one can come or go, my island stays unknown
[02:25.96] No, no
[02:27.55] I don't belong here, there's something wrong here
[02:30.33] I won't be drawn to love in paradise
[02:33.65] Not 'til the end of time, there is no way
[02:37.04] You're mine, all mine
[02:40.80] Seven years she's kept you trapped out of your control
[02:45.66] Time can take a heavy toll
[02:50.31] 
[02:52.67] Odysseus?
[02:54.31] All I hear are screams
[02:57.18] Ody, get away from the ledge
[02:59.95] You don't know what I've gone through!
[03:02.61] You don't know what I've sacrificed
[03:05.53] Every comrade I long knew
[03:08.31] Every friend, I saw them die
[03:10.97] And all I hear are screams
[03:12.59] It will be fine, dear, come back inside, dear
[03:15.49] Love of my life, come back to paradise (let me close my eyes)
[03:18.89] I know your life's been hard, I'll stay inside your heart (all I hear are screams!)
[03:23.52] I love you my dear, I love our time here
[03:26.73] Life would be so much worse if you had died (just let me close my eyes)
[03:30.08] Please stay from away from harm, stay in my open arms (all I hear are-)
[03:35.25] (This life is amazing when you greet it with open arms)
[03:37.84] (How much longer 'til your luck runs out?)
[03:40.40] (Waiting, waiting) (whatever we face, we'll be fine if we're leading from the heart)
[03:43.79] (How much longer 'til the show goes south?)
[03:46.42] Oh-oh (No matter the place, we can light up the world, here's how to start)
[03:49.38] (How much longer 'til we all fall down?)
[03:52.15] Oh-oh! (Greet the world with open arms, greet the world with open)
[03:54.02] (You rely on wit)
[03:55.91] Athena!
[03:59.53] 
[04:02.92] He needs my help
[04:04.69] `),

    "5m3Xe7iDivk": parseLRC(`[00:04.09] Father, God King
[00:06.44] Rarely do I ask for favors
[00:09.19] Now, I'm knocking on your door
[00:11.63] With hopes to save a friendship with one who's a prisoner far from home
[00:20.38] Odysseus
[00:22.41] Divine intervention, is that what you seek?
[00:26.56] To untie apprehensions that were placed on that Greek?
[00:30.85] You are playing with thunder, for a man full of shame
[00:34.76] But if he's worth the risk of going under, why not make it a game?
[00:42.52] Convince each of them that he ought to be released
[00:45.25] And I'll release him
[00:47.03] Who's them?
[00:50.92] Apollo
[00:54.94] Hephaestus
[00:58.10] Aphrodite
[01:02.60] Ares, Hera, or me
[01:10.42] What do you say?
[01:11.92] Great
[01:12.53] Very well
[01:13.09] Eh
[01:13.48] Alright!
[01:14.07] Groovy
[01:15.05] Bring it
[01:16.50] Apollo!
[01:17.33] You all know I'm a fan of catchy songs
[01:19.74] So with so many sirens gone, I think Ody's in the wrong
[01:24.46] They were trying to do him worse
[01:26.69] All he did was reimburse them
[01:28.88] Now they'll tread with caution first
[01:30.70] To live another day and sing another verse
[01:34.29] If that's true, release him
[01:39.36] Hephaestus!
[01:41.14] Trust is not given, it's forged
[01:44.09] Why should I give him my support?
[01:46.19] He sacrificed his own cohort
[01:48.43] Did you forget they failed to listen?
[01:50.60] He was betrayed and then imprisoned
[01:52.76] But if you make the right decision
[01:54.99] He can still build a future with those who miss him
[01:58.67] Fine, release him
[02:04.19] Aphrodite!
[02:05.64] Your little high and mighty Odysseus
[02:08.60] Claims to love his mother, but let her die of a broken heart
[02:12.51] He was busy fighting
[02:14.50] More like busy spiting the cyclops
[02:17.31] Let him feel the pain that his mother felt and rot
[02:21.12] Wait, please reconsider this
[02:26.10] Really Athena? These old tricks?
[02:30.33] Ares!
[02:32.66] Ares, Ares
[02:36.80] What kind of sick coward holds back his power
[02:39.62] While his friends get devoured?
[02:41.33] He didn't even fight Scylla, didn't even try to kill her!
[02:44.45] Hides inside a wooden horse to get the job done
[02:47.32] Never handles things upfront
[02:48.96] Pathetic and weak like his son!
[02:53.30] Hold your tongue now, his son's my friend
[02:57.49] And tell your lover that a broken heart can mend
[03:01.75] You want more bloodshed?
[03:03.98] Then set him free to get back to his homestead
[03:08.19] He'll make everybody bleed
[03:14.05] Uh, release him
[03:18.94] Hey, baby
[03:20.44] Hera!
[03:21.44] So many heroes, so many tales
[03:25.54] Give me one good reason why yours should prevail
[03:29.38] He's got the mind of a genius (try harder)
[03:31.74] He's pretty skilled with words (you can do better than that)
[03:33.91] He's kind of funny? Eh
[03:36.07] Never once has he cheated on his wife
[03:38.82] Release him
[03:47.52] I've played your game and won
[03:49.94] Release him
[03:51.86] You dare to defy me?
[03:54.07] To make me feel shame?
[03:56.19] No one beats me, no one wins my game!
[03:59.88] Thunder, bring her through the wringer
[04:08.52] Show her I'm the judgment call
[04:12.42] The one who makes her kingdom fall!
[04:20.39] Is she dead?
[04:21.55] 
[05:04.18] Let him go, please
[05:08.60] Let him go
[05:11.90] `),

    "7M3gzo-hSCo": parseLRC(`[00:13.88] Someone arrived today
[00:16.80] They said they're taking you away
[00:19.48] That you're not mine to save
[00:22.38] And soon I won't get to see your face
[00:25.05] So I came by to say
[00:27.04] You're unlike anyone I have ever known
[00:31.79] 'Cause you're all I've ever known
[00:36.24] And if I pushed you
[00:39.21] Or if I came on too strong
[00:41.59] Or if I ambushed you
[00:44.55] For that, I'll say I was wrong
[00:47.43] And if you hate me
[00:50.02] Then I am sorry my love's too much for you
[00:56.25] But I'm not sorry for loving you
[00:59.08] (I'm not sorry for loving you)
[01:01.64] I'm not sorry for loving you
[01:04.58] (I'm not sorry for loving you)
[01:06.54] (Calypso)
[01:07.44] Let me speak
[01:09.39] I spent my whole life here
[01:12.09] Was cast away when I was young
[01:14.85] Alone for a hundred years
[01:17.24] I had no friends but the sky and sun
[01:20.02] So when you washed ashore
[01:22.73] I thought for sure that you were my dream come true
[01:27.26] I thought I knew
[01:31.15] So if I pushed you
[01:34.46] Or if I came on too strong
[01:36.80] Or if I ambushed you
[01:39.66] For that, I'll say I was wrong
[01:42.30] And if you hate me
[01:45.09] Then I am sorry my love's too much for you (ooh)
[01:51.46] But I'm not sorry for loving you
[01:54.28] (I'm not sorry for loving you)
[01:56.87] I'm not sorry for loving you
[01:59.92] (I'm not sorry for loving you)
[02:02.62] I'm not sorry
[02:04.07] I'm angry and tired and restless and sad
[02:06.66] I'm stuck in the moments I swore that we had
[02:09.24] I wish you would chase me, or try to embrace me
[02:12.06] For once, I wish you would lie and say
[02:15.01] (I love you)
[02:17.56] You do?
[02:19.18] (But not in the way that you want me to)
[02:24.37] I hate that I fell in love with you
[02:27.36] (Hate that I fell in love with you)
[02:29.83] Why did I fall in love with you?
[02:32.75] (Why did I fall in love with you?)
[02:35.50] What do I do with this love for you?
[02:38.38] (What do I do with this love for you?)
[02:41.04] How am I supposed to get over you?
[02:44.19] (How am I supposed to get over you?)
[02:46.53] Why in the world won't you love me too?
[02:49.24] `),

    "jZW2GnEcjpM": parseLRC(`[00:00.11] Six hundred men
[00:03.44] Six hundred deaths under my command
[00:06.98] 'Cause I had one goal in mind
[00:12.00] No fleet, no band
[00:15.38] Only this raft that I made by hand
[00:18.88] How will I reach my homeland?
[00:21.05] All you have to do is not open this bag
[00:25.34] Hermes?
[00:26.89] Ha-ha-ha-ha! Hello, old friend
[00:30.54] So you're the one who talked to Calypso
[00:34.01] Why are you here?
[00:36.19] You're being given a final option
[00:39.05] Consider this your one last chance
[00:41.52] To make it back home and abandon caution
[00:44.72] Wash it away like the blood your hands have known
[00:48.24] I know if you dance with fate
[00:50.58] Then I know, I know, you'll enhance your state
[00:53.64] If your plan's so great, then why'd you wait to say it?
[00:58.68] Well, it's a little bit dangerous, my friend
[01:01.64] You'll need a mindset change for this
[01:03.84] You cannot get away with playing safe, for this
[01:06.99] You wanna get home? Put it all on the line
[01:11.09] And put your whole brain in it
[01:12.96] Remember every trick in your domain for this
[01:15.84] You gotta treat it like it is the main event
[01:18.92] You wanna get home? Put it all on the line, be dangerous
[01:24.53] Alright, I'm in, what do I do?
[01:27.26] First stop, uncharted waters
[01:30.25] When lost, look towards the sky
[01:32.75] Follow the North Star, no matter how far
[01:35.70] You think you're going, you keep on rowing
[01:39.26] When strangers lurk around the isle
[01:42.10] When danger greets you with a smile
[01:44.79] Fight your way through, do what you must do
[01:47.56] But no matter what, keep moving
[01:50.08] It's gonna be dangerous, my friend
[01:52.67] You'll need a mindset change for this
[01:54.82] You cannot get away with playing safe for this
[01:57.82] You wanna get home? Put it all on the line
[02:02.17] And put your whole brain in it
[02:03.96] Remember every trick in your domain for this
[02:06.94] You gotta treat it like it is the main event
[02:09.86] You wanna get home? Put it all on the line, be dangerous
[02:15.42] And lastly, the wind bag
[02:17.86] We went through so much to get this
[02:20.88] Keep this bag closed if you wanna get home, sir
[02:23.96] (You won't get another time to try)
[02:26.25] The raging storm inside won't let you get closer
[02:30.13] (It was meant to stop you by design)
[02:32.14] 'Cause no mortal can pass Poseidon's storm
[02:35.60] Open this bag, and you'll never make it home
[02:40.08] You'll never make it home
[02:43.54] Don't you know that danger is my friend?
[02:46.69] My whole life I've trained for this
[02:48.83] I cannot tell you how much I have paid for this
[02:51.98] I have to get home, put it all on the line
[02:56.11] I'm gonna use ruthlessness
[02:57.96] Every trick, every skill put to use for this
[03:00.85] I plan to put an end to all the foolishness
[03:03.96] I have to get home, put it all on the line, I'll be dangerous
[03:10.42] Hermes
[03:13.25] Thank you
[03:14.33] Don't thank me friend
[03:16.22] I'm not the one who fought for you
[03:19.24] Then who? Good luck
[03:23.10] `),

    "4n0U1Erga90": parseLRC(`
[ar:Jorge Rivera-Herrans; Anna Lea; Cast of EPIC: The Musical]
[al:Jorge Rivera-Herrans; Anna Lea; Cast of EPIC: The Musical]
[ti:EPIC MUSICAL THE CHALLENGE]
[au:Jorge RIvera-Herrans]
[length:03:21.98]
[by:haruko chan]
[re:www.megalobiz.com/lrc/maker]
[ve:v1.2.3]
[00:03.57]Song by
[00:05.46]Cast of EPIC: The Musical, Jorge Rivera-Herrans, Anna Lea
[00:15.41]I'm supposed to choose a suitor to wear the crown
[00:22.85]I said I would choose as soon as I weave this shroud
[00:29.24]They don't know that every night
[00:35.07]I unthread all the work I've done
[00:39.05]'Cause I'd rather lie
[00:42.77]Than allow them to think they've won
[00:45.43]Though I never thought that I'd resort to this
[00:51.28]Just know I'll be here
[00:55.53]But I don't know how much longer I'll last since we saw that storm
[01:01.64]And though it was so close to our kingdom, it was far from the norm, unless
[01:10.13]Oh, could it be some kinda sign
[01:15.71]That my world is all about to change?
[01:19.42]Is it finally time for the challenge I arranged?
[01:25.54]Though I never thought that it would come to this
[01:32.19]Just know I'll be here buying you time
[01:37.12]Time is fleeting, it's running out
[01:39.88]Time to be the man of the house (oh, buying you time)
[01:44.21]Time is fleeting, it's running out
[01:47.22]Time to be the man of the house
[01:51.04]Whoever can string my husband's old bow
[01:55.28]And shoot through 12 axes cleanly
[01:58.67]Will be the new king, sit down at the throne
[02:02.66]And rule with me as his queen
[02:08.50]Let the arrow fly
[02:13.03]Once you know that your aim is true
[02:15.94]'Cause I'd rather die
[02:20.19]Than grow old without the best of you
[02:22.85]Though I never thought that these would be the lengths we go for love
[02:29.74]I would not have it any other way
[02:36.39]And though I never thought that it would end like this
[02:44.09]Just know I'll be here
[02:49.67]Waiting, waiting
[02:56.31](Penelope) waiting, waiting
[03:01.62](Penelope) waiting, waiting
[03:08.25]Oh
`),

    "8njnTRKGdYw": parseLRC(`[00:11.23] There you are, coward
[00:13.85] 
[00:23.59] I've been waitin' for this moment, for the perfect time to strike
[00:31.48] When your home's so close, and you've reached your coast
[00:35.97] That's when our paths collide
[00:38.65] I've got a reputation
[00:42.70] I've got a name to uphold
[00:45.03] So I can't go lettin' you walk or else the world forgets I'm cold
[00:51.74] Now get in the water
[00:55.46] Get in the water
[00:59.59] Or I'll raise the tide so high
[01:03.38] All of Ithaca will die
[01:07.10] Get in the water (wait)
[01:10.99] Get in the water (stop this, please)
[01:14.86] I'll make tidal waves so profound
[01:18.44] Both your wife and your son will drown (no)
[01:22.29] Get in the water
[01:26.09] Get in the water
[01:29.83] Don't mistake my threats for bluff
[01:33.50] You have lived more than enough
[01:37.36] Get in the water
[01:41.19] Get in the water
[01:44.87] I'll take your son and gouge his eyes
[01:48.69] That is, unless you choose to die
[01:52.44] Get in the water
[01:53.60] Aren't you tired, Poseidon?
[01:57.01] It's been ten years, how long will this go?
[02:01.09] We're both hurtin' from losses
[02:04.61] So why not leave this here and just go home?
[02:12.22] I can't
[02:16.20] Maybe you could learn to forgive (no)
[02:25.63] Ruthlessness is mercy upon ourselves
[02:38.15] Die
[02:39.93] 
[03:03.00] You can relax, my friend
[03:07.22] I can tell you're getting nervous
[03:09.32] (Look at all we've lost and all we've learned)
[03:11.45] (I'll stay in your heart)
[03:15.02] Oh, whoa, Odysseus
[03:18.86] Waitin', waitin', waitin', ooh
[03:34.60] `),

    "T3rnBuSTNhY": parseLRC(`[00:23.68] Six hundred men (six hundred)
[00:26.44] Six hundred men (six hundred)
[00:29.12] Six hundred men (six hundred)
[00:32.02] Six hundred men (six hundred)
[00:34.78] I don't think you seem to get it
[00:37.67] I can't afford to die
[00:39.64] 'Cause I will get back to my son
[00:42.66] And I will get back to my wife
[00:56.25] For every comrade, every one of my friends
[01:02.04] Almost all of whom were slaughtered by your hand
[01:06.80] Six hundred strike
[01:09.06] Six hundred men (six hundred)
[01:11.91] Six hundred men (six hundred)
[01:14.67] Six hundred men (six hundred)
[01:17.43] Six hundred, six hundred men
[01:26.88] You idiot, can't you see?
[01:31.91] You sealed your fate just to beat me
[01:37.64] You released my storm when you opened that bag
[01:43.62] Blocked your one way home
[01:47.01] Now you'll never get back
[01:53.16] You're going to call off that storm
[01:58.96] Or what? You can't kill me
[02:05.15] Exactly
[02:11.41] Wait, wait, ah!
[02:18.27] How does it feel to be helpless?
[02:21.22] How does it feel to know pain?
[02:24.29] I watched my friends die in horror
[02:27.23] Crying as they were all slain
[02:30.12] I heard their final moments
[02:33.17] Calling their captain in vain
[02:36.09] Look what you turned me into
[02:39.11] Look what we've become
[02:41.41] Enough
[02:42.22] All of the pain that I've been through (stop!)
[02:45.12] Haven't I suffered enough? Stop!
[02:48.10] You didn't stop when I begged you
[02:51.29] Told me to close my heart
[02:53.46] (You) you said the world was dark (monster)
[02:57.36] Didn't you say that ruthlessness is mercy upon our-
[03:01.74] Alright, please
[03:12.91] After everything you've done
[03:17.27] How will you sleep at night?
[03:22.31] Next to my wife
[03:23.32] `),

    "Bb6ssHUxrNk": parseLRC(`[00:15.43] I'm supposed to choose a suitor to wear the crown
[00:20.77] 
[00:23.18] I said I would choose as soon as I weave this shroud
[00:30.01] They don't know that every night
[00:35.76] I unthread all the work I've done
[00:39.06] 'Cause I'd rather lie
[00:43.06] Than allow them to think they've won
[00:45.72] Though I never thought that I'd resort to this
[00:51.95] Just know I'll be here
[00:56.43] But I don't know how much longer I'll last since we saw that storm
[01:03.52] And though it was so close to our kingdom, it was far from the norm, unless
[01:10.34] Oh, could it be some kinda sign
[01:16.20] That my world is all about to change?
[01:20.00] Is it finally time for the challenge I arranged?
[01:26.31] Though I never thought that it would come to this
[01:32.42] Just know I'll be here buying you time
[01:37.13] Time is fleeting, it's running out
[01:40.79] Time to be the man of the house (oh, buying you time)
[01:44.88] Time is fleeting, it's running out
[01:47.97] Time to be the man of the house
[01:51.95] Whoever can string my husband's old bow
[01:55.40] And shoot through 12 axes cleanly
[01:58.73] Will be the new king, sit down at the throne
[02:02.54] And rule with me as his queen
[02:07.65] 
[02:09.96] Let the arrow fly
[02:13.50] Once you know that your aim is true
[02:16.78] 'Cause I'd rather die
[02:20.60] Than grow old without the best of you
[02:23.29] Though I never thought that these would be the lengths we go for love
[02:30.56] I would not have it any other way
[02:37.64] And though I never thought that it would end like this
[02:44.69] Just know I'll be here
[02:50.99] Waiting, waiting
[02:55.83] (Penelope) waiting, waiting
[03:01.80] (Penelope) waiting, waiting
[03:09.46] Oh
[03:13.91] `),

    "oeDDZNKHOVo": parseLRC(`[00:03.27] Whoever can string the old king's bow
[00:06.53] And shoot through twelve axes cleanly
[00:10.26] Will be the new king, sit down at the throne
[00:13.66] Penelope as his queen
[00:17.51] Where is he? Where is the man who can string this bow? Oh-whoa
[00:23.79] Screw this competition, we've been here for hours
[00:27.33] None of us can string this, we don't have the power
[00:30.62] Screw this damn challenge, no more delays
[00:34.07] Can't you guys see we're bein' played?
[00:36.72] This is how they hold us down while the throne gets colder
[00:41.43] Hold us down while we slowly age
[00:44.84] Hold us down while the boy gets bolder
[00:48.13] Where in the hell is our pride and our rage?
[00:51.89] Here and now, there's a chance for action
[00:54.99] Here and now, we can take control
[00:58.59] Here and now, burn it down to ashes
[01:01.66] Channel the fire inside your soul
[01:05.76] Haven't you noticed who's missin'?
[01:09.43] Don't you know the prince is not around?
[01:12.04] I heard he's on a diplomatic mission
[01:15.25] And I heard today he comes back to town, so
[01:19.02] I say, we gather near the beaches
[01:22.57] I say, we wait 'til he arrives
[01:25.68] Then, when he docks his ship, we can breach it
[01:29.10] Let us leave now, today we can strike and
[01:33.14] Hold him down 'til the boy stops shakin'
[01:36.10] Hold him down while I slit his throat
[01:39.67] Hold him down while I slowly break his
[01:42.86] Pride, his trust, his faith and his bones
[01:46.57] Cut him down into tiny pieces
[01:50.07] Throw him down in the great below
[01:53.03] When the crown wonders where the prince is
[01:56.50] Only the ocean and I will know
[02:00.33] And when the deed is done
[02:03.30] The queen will have no one
[02:06.32] To stop us from breakin' her bedroom door
[02:09.83] Stop us from takin' her love and more
[02:15.95] And then we'll hold her down while her gate is open
[02:20.84] Hold her down while I get a taste
[02:24.41] Hold her down while we share her spoils
[02:27.46] I will not let any part go to waste
[02:30.99] Here and now, there's a chance for action (chance for action)
[02:34.56] Here and now, we can take control (take control)
[02:38.20] Here and now, burn it down to ashes
[02:41.07] Channel the fire inside your soul and
[02:44.95] Hold 'em down, hold 'em down (hold 'em down, oh)
[02:48.48] Hold 'em down, hold 'em down
[02:51.74] Hold 'em down, hold 'em down (hold 'em down)
[02:54.82] Channel the fire inside your soul, and (hold 'em down, hold 'em down)
[02:58.22] `),

    "UjcV3CYfCsM": parseLRC(`[00:02.42] For 20 years, I've suffered every punishment and pain
[00:08.67] From the wrath of gods and monsters to the screams of comrades slain
[00:14.98] I come back and find my palace desecrated, sacked like Troy
[00:21.40] Worst of all, I hear you dare to touch my wife and hurt my boy
[00:30.34] I have had enough
[00:37.10] Odysseus, Odysseus
[00:46.87] Odysseus, Ody-
[00:57.36] In the heat of battle, at the edge of the unknown
[01:02.67] Somewhere in the shadows lurks an agile, deadly foe
[01:08.07] We have the advantage, we've the numbers and the might
[01:12.33] No, you don't understand it, this man plans for every fight
[01:18.90] Odysseus, Odysseus
[01:24.73] Odysseus, Odysseus
[01:29.80] Where is he? Where is he?
[01:32.02] Keep your head down, he's aimin' for the torches
[01:35.23] Our weapons, they're missin'
[01:37.14] He's usin' the darkness to hide his approaches
[01:40.34] We're empty-handed up against an archer
[01:42.81] Our only chance is to strike him in the darkness
[01:45.36] We know these halls, the odds can be tilted
[01:48.08] You don't think I know my own palace? I built it
[01:51.06] Odysseus, Odysseus
[01:56.79] Odysseus, Odysseus
[02:01.47] Old king, our leader is dead
[02:04.95] You've destroyed the serpent's head
[02:07.48] Now the rest of us are no longer a threat
[02:11.94] Old king, forgive us instead
[02:15.33] So that no more blood is shed
[02:18.02] Let's have open arms instead (no)
[02:23.08] Odysseus, Odysseus
[02:28.87] Odysseus, Odysseus
[02:34.04] Damn, he's more cunnin' than I assumed
[02:38.26] While we were busy plottin', he hid our weapons inside this room
[02:43.46] I find it hard to believe that the sharpest of kings left his armory unlocked
[02:48.24] So what? Now that we have armed ourselves
[02:51.70] Let's make the bastard rot (behind you)
[02:56.25] 
[03:07.86] Throw down those weapons, and I ensure you'll be spared
[03:12.91] After seein' what the king will do to us, we wouldn't dare
[03:18.37] I don't wanna hurt you, but trust me, I've come prepared
[03:22.93] Huh, your very presence has doomed the king, young prince
[03:26.68] We don't fight fair (stop)
[03:29.11] Brothers, we got company, and he's made a grave mistake
[03:34.24] Left the weapons room unlocked, and now they're ours to take
[03:39.72] Brothers, come and arm yourselves, there's a chance for us to win
[03:44.71] We can still defeat the king if we all attack the prince
[03:50.26] Where is he? Where is he?
[03:53.46] Capture him, he's our greatest chance
[03:56.25] Get off me, get off me
[03:58.51] Fight 'til the prince can barely stand
[04:01.77] Hold him down, hold him down
[04:03.92] Make the king obey our command
[04:06.59] Hold him down, hold him down
[04:08.93] 'Cause if he won't, I'll break the kid's hands
[04:13.72] Got him
[04:17.38] Me-mer-
[04:20.19] Mercy? Mercy?
[04:25.71] My mercy has long since drowned
[04:28.22] It died to bring me home
[04:30.92] And as long as you're around
[04:33.12] My family's fate is left unknown
[04:36.11] You plotted to kill my son
[04:38.90] You planned to rape my wife
[04:41.36] All of you are goin' to die (Odysseus)
[04:47.36] You've filled my heart with hate
[04:51.74] All of you, who have done me wrong
[04:54.01] This will be your fate!
[04:56.57] Odysseus (ah, no-no, ah)
[05:08.21] Odysseus (oh, oh)
[05:17.49] `),

    "rF5tJ8xuaIc": parseLRC(`[00:03.24] Penelope
[00:06.62] 
[00:20.99] Is it you? Have my prayers been answered?
[00:27.39] Is it really you standing there, or am I dreaming once more?
[00:34.85] You look different, your eyes look tired
[00:41.64] Your frame is lighter, your smile torn
[00:48.61] Is it really you, my love?
[00:52.63] I am not the man you fell in love with
[00:58.56] I am not the man you once adored
[01:04.55] I am not your kind and gentle husband
[01:09.75] And I am not the love you knew before
[01:17.20] Would you fall in love with me again
[01:23.36] If you knew all I've done?
[01:27.80] The things I cannot change
[01:30.39] Would you love me all the same?
[01:33.56] I know that you've been waiting, waiting for love
[01:48.48] What kinds of things did you do?
[01:54.27] Left a trail of red on every island
[01:59.72] As I traded friends like objects I could use
[02:05.62] Hurt more lives than I can count on my hands
[02:11.87] But all of that was to bring me back to you
[02:17.06] So tell me
[02:18.65] Would you fall in love with me again
[02:24.36] If you knew all I've done?
[02:29.31] The things I can't undo
[02:31.96] I am not the man you knew
[02:35.08] I know that you've been waiting, waiting
[02:42.66] If that's true, could you do me a favor?
[02:47.75] Just a moment of labor that would bring me some peace
[02:54.63] See that wedding bed? Could you carry it over?
[03:00.14] Lift it high on your shoulders and take it far away from here
[03:07.30] How could you say this?
[03:12.18] I had built that wedding bed with my blood and sweat
[03:18.74] Carved it into the olive tree where we first met
[03:24.09] A symbol of our love everlasting
[03:28.43] Do you realize what you have asked me?
[03:31.28] The only way to move it is to cut it from its roots
[03:37.21] Only my husband knew that
[03:40.66] So I guess that makes him you
[03:47.05] Penelope
[03:50.56] I will fall in love with you over and over again
[03:57.52] I don't care how, where, or when
[04:00.15] No matter how long it's been, you're mine
[04:03.53] Don't tell me you're not the same person
[04:06.52] You're always my husband, and I've been waiting, waiting
[04:14.44] Penelope, waiting, waiting (Penelope)
[04:21.90] Waiting, waiting
[04:27.60] Waiting, oh
[04:36.02] For you
[04:41.14] 
[05:14.92] How long has it been?
[05:20.83] 20 years
[05:25.89] I-I love you
[05:34.58] `),

};
