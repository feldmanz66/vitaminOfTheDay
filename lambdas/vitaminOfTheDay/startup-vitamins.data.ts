export type StartupFamilyType = 
    'get shit done' |
    'think' |
    'plan' |
    'build' |
    'lead' |
    'sell' |
    'preserve' |
    'evolve';

export interface QuoteModel {
    quote: string,
    qoutee: string,
    number: string,
    family: StartupFamilyType
    company?: string,
}

export const STARTUP_VITAMINS: QuoteModel[] = 
    [
        {
            quote: 'Get shit done.',
            qoutee: 'Aaron Levie',
            number: '001',
            company: 'Box',
            family: 'get shit done'
        },
        {
            quote: 'Less meetings more doing.',
            qoutee: 'Jason Goldberg',
            number: '002',
            company: 'Fab.com',
            family: 'get shit done'
        },
        {
            quote: 'Perfectionism id oftem an excuse for procrastination.',
            qoutee: 'Paul Graham',
            number: '003',
            company: 'Y Combinator',
            family: 'get shit done'
        },
        {
            quote: 'Do, or do not. There is no try.',
            qoutee: 'Yoda',
            number: '004',
            family: 'get shit done'
        },
        {
            quote: 'My best entrepreneurial advice is to start.',
            qoutee: 'Dave Morin',
            number: '005',
            company: 'Path',
            family: 'get shit done'
        },
        {
            quote: 'You don\'t need more time, you just need to decide.',
            qoutee: 'Seth Godin',
            number: '006',
            family: 'get shit done'
        },
        {
            quote: 'You can\'t build a reputation on what you are going to do.',
            qoutee: 'Henry Ford',
            number: '007',
            family: 'get shit done'
        },
        {
            quote: 'Optimism, pessimism, fuck that; we\'re going to make it happen',
            qoutee: 'Elon Musk',
            number: '008',
            company: 'Tesla Motors',
            family: 'get shit done'
        },
        {
            quote: 'You can\'t be that kid standing at the top of the waterslide overthinking it. You have to go down the chute.',
            qoutee: 'Tina Fey',
            number: '009',
            family: 'get shit done'
        },
        {
            quote: 'Life is short. Do stuff that matters.',
            qoutee: 'Siqi Chen',
            number: '010',
            company: 'Hey Inc.',
            family: 'get shit done'
        },
        {
            quote: 'Don\'t compromise.',
            qoutee: 'Steve Jobs',
            number: '011',
            company: 'Apple',
            family: 'get shit done'
        },
        {
            quote: 'Some people want it to happen, some wish it would happen, others make it happen',
            qoutee: 'Michael Jordan',
            number: '012',
            family: 'get shit done'
        },
        {
            quote: 'Don\'t spend so much time trying to choose the perfect opportunity, that you miss the right opportunity.',
            qoutee: 'Michael Deli',
            number: '013',
            family: 'get shit done'
        },
        {
            quote: 'Never half-ass two things, whole-ass one thing.',
            qoutee: 'Ron Swanson',
            company: 'Parks and Recreation',
            number: '014',
            family: 'get shit done'
        },
        {
            quote: 'Think bigger.',
            qoutee: 'Tony Hsieh',
            company: 'Zappos.com',
            number: '015',
            family: 'think'
        },
        {
            quote: 'Be amazing. Be revolutionary.',
            qoutee: 'Blake Mycoskie',
            company: 'TOMS Shoes',
            number: '016',
            family: 'think'
        },
        {
            quote: 'Lives remaining: 0.',
            qoutee: 'Alexis Ohanian',
            company: 'Reddit',
            number: '017',
            family: 'think'
        },
        {
            quote: 'Innovation is hard because "solving problems people didn\'t know they had" and " building something no one needs" look identical at first.',
            qoutee: 'Aaron Levie',
            number: '018',
            company: 'Box',
            family: 'think'
        },
        {
            quote: 'Always challlenging the old ways.',
            qoutee: 'Howard Schultz',
            number: '019',
            company: 'Starbucks',
            family: 'think'
        },
        {
            quote: 'Your margin is my opportunity.',
            qoutee: 'Jeff Bezos',
            number: '020',
            company: 'Amazon',
            family: 'think'
        },
        {
            quote: 'Passion never fails.',
            qoutee: 'Paul Chen',
            number: '021',
            company: 'FloNetwork, Fortiva',
            family: 'think'
        },
        {
            quote: 'Luck is what happens when preparation meets opportunity.',
            qoutee: 'Seneca',
            number: '022',
            family: 'think'
        },
        {
            quote: 'Chase the vision, not the money; the money will end up following you.',
            qoutee: 'Tony Hsieh',
            number: '023',
            company: 'Zappos.com',
            family: 'think'
        },
        {
            quote: 'Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.',
            qoutee: 'John Steinbeck',
            number: '024',
            family: 'think'
        },
        {
            quote: 'Great companies don\'t throw money at problems, they throw ideas at problems.',
            qoutee: 'Greg McAdoo',
            number: '025',
            company: 'Sequoia Capital',
            family: 'think'
        },
        {
            quote: 'Most of entrepreneurship is differentiating between good-sounding dumb ideas and dumb-sounding good ideas.',
            qoutee: 'Aaron Gotwalt',
            number: '026',
            company: 'CoTweet, Seesaw Decisions',
            family: 'think'
        },
        {
            quote: 'Entrepreneur is just French for "has ideas, does them".',
            qoutee: 'Alexis Ohanian',
            number: '027',
            company: 'Reddit',
            family: 'think'
        },
        {
            quote: 'Ideas are worthless until you get them out of your head to see what you can do.',
            qoutee: 'Tanner Christensen',
            number: '028',
            company: 'Creative Strategist',
            family: 'think'
        },
        {
            quote: 'Most people think it\'s all about the idea. It\'s not. Everyone has ideas... The hard part is to execute on the idea.',
            qoutee: 'Mark Cuban',
            number: '029',
            family: 'think'
        },
        {
            quote: 'Simple can be harder than complex. You have to work hard to get your thinking clean to make it simple.',
            qoutee: 'Steve Jobs',
            number: '030',
            company: 'Apple',
            family: 'think'
        },
        {
            quote: 'It\'s hard to do a really good job on anything you don\'t think about in the shower',
            qoutee: 'Paul Graham',
            number: '031',
            company: 'Y Combinator',
            family: 'think'
        },
        {
            quote: 'The risk is not in doing something that feels risky. The risk is in not doing something that feels risky.',
            qoutee: 'Andy Dunn',
            number: '032',
            company: 'Bonobos',
            family: 'think'
        },
        {
            quote: 'It\'s not about the amount of wealth you can accumulate, it\'s about the impact and change you can create.',
            qoutee: 'Neil Blumenthal',
            number: '033',
            company: 'Warby Parker',
            family: 'think'
        },
        {
            quote: 'People can copy what you\'ve done, but they can\'t copy what you\'re going to do.',
            qoutee: 'Dennis Crowley',
            number: '034',
            company: 'Foursquare',
            family: 'think'
        },
        {
            quote: 'Opportunity lives at the intersection of what people need tomorrow and can be just barely built today.',
            qoutee: 'Aaron Levie',
            number: '035',
            company: 'Box',
            family: 'think'
        },
        {
            quote: 'Embrace what you don\'t know, especially in the beginning because what you don\'t know can become your greatest assest. It ensures that you will absolutely be doing things different from everybody else.',
            qoutee: 'Sara Blakely',
            number: '036',
            company: 'Spanx',
            family: 'think'
        },
        {
            quote: 'The best startups generally come from somebody needing to scratch an itch.',
            qoutee: 'Michael Arrington',
            number: '037',
            company: 'TechCrunch',
            family: 'think'
        },
        {
            quote: 'Start with the assumption that the best way to do something is not way it\'s being done right now.',
            qoutee: 'Aaron Levie',
            number: '038',
            company: 'Box',
            family: 'think'
        },
        {
            quote: 'Optimism should be at the top of an entrepreneur\'s checklist.',
            qoutee: 'Alana Muller',
            number: '039',
            company: 'Kauffman FastTrac',
            family: 'think'
        },
        {
            quote: 'Man\'s mind, once stretched by a new idea, never regains its original dimensions',
            qoutee: 'Oliver Wendell Holmes',
            number: '40',
            family: 'think'
        },
        {
            quote: 'Even if you don\'t have the perfect idea to begin with, you can likely adapt.',
            qoutee: 'Victoria Ransom',
            number: '041',
            company: 'Wildfire',
            family: 'think'
        },
        {
            quote: 'The fastast way to change yourself is to hang out with people who are already the way you want to be.',
            qoutee: 'Reid Hoffman',
            number: '042',
            company: 'LinkedIn',
            family: 'think'
        },
        {
            quote: 'Don\'t play games that you don\'t understand, even if you see lots of other people making money from them',
            qoutee: 'Tony Hsieh',
            number: '043',
            company: 'Zappos.com',
            family: 'think'
        },
        {
            quote: 'We should call the createups, not startups. The goal is not to start something, the goal is create something.',
            qoutee: 'Dharmesh Shah',
            number: '044',
            company: 'HubSpot',
            family: 'think'
        },
        {
            quote: 'You can\'t put out projects, the you don\'t use yourself',
            qoutee: 'Gary Vaynerchuk',
            number: '045',
            company: 'VaynerMedia',
            family: 'think'
        },
        {
            quote: 'A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.',
            qoutee: 'Winston Churchill',
            number: '046',
            family: 'think'
        },
        {
            quote: 'The tsk we must set for ourselves is not to feel secure, but to be able to tolerate insecurity.',
            qoutee: 'Erich Fromm',
            number: '047',
            family: 'think'
        },
        {
            quote: 'Openly share and talk to people about your idea. use their lack of interest or doubt to fuel your motivation to make it happen.',
            qoutee: 'Todd Garland',
            number: '048',
            company: 'BuySellAds',
            family: 'think'
        },
        {
            quote: 'You should set goals beyond your reach so you always have something to live for.',
            qoutee: 'Ted Turner',
            number: '049',
            company: 'TBS, CNN',
            family: 'think'
        },
        {
            quote: 'The difference between a vision and a hallucination is that other people can see the vision.',
            qoutee: 'Marc Andreessen',
            number: '050',
            company: 'Andreesson Horowitz',
            family: 'think'
        },
        {
            quote: 'Quality is the best business plan.',
            qoutee: 'John Lasseter',
            number: '051',
            company: 'Pixar',
            family: 'plan'
        },
        {
            quote: 'The first draft of anything is shit.',
            qoutee: 'Ernest Hemingway',
            number: '052',
            family: 'plan'
        },
        {
            quote: 'A good plan, violently executed now, is better than a perfect plan next week.',
            qoutee: 'General George Patton',
            number: '053',
            family: 'plan'
        },
        {
            quote: 'We don\'t always know what\'s going to happen. And that\'s okay',
            qoutee: 'Biz Stone',
            number: '054',
            company: 'Twitter',
            family: 'plan'
        },
        {
            quote: 'Advice for young entrepreneurs - unproven ideas and people are OK, stick to proven business models though.',
            qoutee: 'James Tudsbury',
            number: '055',
            company: 'Monster Digital Marketing',
            family: 'plan'
        },
        {
            quote: 'Projections are bullshit. They\'re just guesses.',
            qoutee: 'Jason Fried',
            number: '056',
            company: '37Signals',
            family: 'plan'
        },
        {
            quote: 'Building a successful business model isn\'t about changing your company based on every bit od feedback: It\'s about understanding whom to listen to and why.',
            qoutee: 'Steve Blank',
            number: '057',
            company: 'E.piphany',
            family: 'plan'
        },
        {
            quote: 'Don\'t spend too much time planning, release early and often, somethings will work, others won\'t, refine and move forward and above all forget the money, just make sure you love what you\'re doing.',
            qoutee: 'Kevin Rose',
            number: '058',
            company: 'Digg, Revision3',
            family: 'plan'
        },
        {
            quote: 'Stay self-funded as long as possible.',
            qoutee: 'Garrett Camp',
            number: '059',
            company: 'Expa, Uber, and StumbleUpon',
            family: 'plan'
        },
        {
            quote: 'If you prematurely invest all your time and money in the wrong idea, you have nothing left to try new ideas.',
            qoutee: 'Alberto Savoia',
            number: '060',
            family: 'plan'
        },
    ];