const Sequelize = require('sequelize');
const { STRING, TEXT } = Sequelize;
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/poker');

const data = [
    {name: 'Royal Flush', image: '/royal_flush.png', content: 'The best hand possible, a royal flush consists of A, K, Q, J and 10, all of the same suit.'},
    {name: 'Straight Flush', image: '/straight_flush.png', content: 'Very rare, a straight flush consists of any straight that is all the same suit.'},
    {name: 'Four Of A Kind', image: '/four_of_a_kind.png', content: 'Four of a kind, or "quads", consists of four cards of equal value along with another card known as a side card.'},
    {name: 'Full House', image: '/full_house.png', content: 'A full house consists of three cards of one value and two cards of another.'},
    {name: 'Flush', image: '/flush.png', content: 'A flush is a hand which has all cards of the same suit.'},
    {name: 'Straight', image: '/straight.png', content: 'A straight has 5 cards of consecutive value that are not all the same suit.'},
    {name: 'Three Of A Kind', image: '/three_of_a_kind.png', content: 'Also known as "trips", three of a kind is 3 cards of the same value and 2 side cards of different values.'},
    {name: 'Two Pair', image: '/two_pair.png', content: 'Two pair consists of two cards of equal value, another two cards of equal value, and one extra card.'},
    {name: 'Pair', image: '/pair.png', content: 'One pair consists of two cards of the same value, and three extra cards.'},
    {name: 'High Card', image: '/high_card.png', content: 'Five cards that do not interact with each other to make any of the other hands, in this case the highest card is counted.'}
  ];

const Hand = db.define('hand', {
    name: {
        type: STRING
    },
    image: {
        type: STRING
    },
    content: {
        type: TEXT
    }
})

const syncAndSeed = async() => {
    try{
        await db.sync({ force: true })
        await data.map( hand => {
            Hand.create({
                name: hand.name,
                image: hand.image,
                content: hand.content
            })
        })
    }
    catch(ex) {
        console.log(ex)
    }
}


module.exports = {
    db,
    syncAndSeed,
    models: {
        Hand
    }
}