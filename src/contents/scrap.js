var $ = jQuery;
function extractWeapon(cols) {

    function values(el) {
        var spans = $(el).text().split('\n');

        return spans.filter(function(val) {
            return val !== '';

        }).map(function(val) {
            var i = parseInt(val, 10);
            if (!isNaN(i)) {
                return i;

            } else if (val === '-') {
                return null;

            } else {
                return val.trim();
            }
        });

    }

    function locations(els) {

        var places = [],
            aotaOnly = false;

        for(var i = 0, l = els.length; i < l; i++) {
            var t = $(els[i]).text().trim();

            if (t.toLowerCase() === '(aota only)') {
                aotaOnly = true;

            } else {
                places.push(t);
            }

        }

        return {
            places: places,
            aotaOnly: aotaOnly
        };

    }

    function effects(el) {

        var e = {
            poison: null,
            bleed: null,
            divine: null,
            occult: null
        };

        var text = $(el).text().split('\n').filter(function(t) {
                return !isNaN(parseInt(t, 10));

            }).map(function(val) {
                return +val;
            }),
            img = $(el).find('img');

        for(var i = 0, l = img.length; i < l; i++) {

            var m = img[i].alt;
            m = m.substring(0, m.length - 4).split('_')[2];

            e[m] = text[i];

        }

        return e;

    }

    var offset = cols.length - 15;

    // TODO catalysts don't have effects!
    var image = cols[0],
        name = $(cols[1]).text().trim(),
        dmgPhysical = values(cols[2]),
        dmgMagic = values(cols[3]),
        dmgFire = values(cols[4]),
        dmgLighting = values(cols[5]),
        dmgBonus = values(cols[6]),
        auxEffects = effects(cols[7 + offset]),
        reqStrength = values(cols[8 + offset]),
        reqDex = values(cols[9 + offset]),
        reqInt = values(cols[10 + offset]),
        reqFaith = values(cols[11 + offset]),
        burden = values(cols[12 + offset]),
        type = values(cols[13 + offset]),
        find = locations($(cols[14 + offset]).find('li'));

    var data = {
        name: name,
        atk: {
            physical: dmgPhysical[0],
            magic: dmgMagic[0],
            fire: dmgFire[0],
            lightning: dmgLighting[0],
            bonus: dmgBonus[0]
        },

        def: {
            physical: dmgPhysical[1],
            magic: dmgMagic[1],
            fire: dmgFire[1],
            lightning: dmgLighting[1],
            stab: dmgBonus[1]
        },

        effects: auxEffects,

        req: {
            strength: reqStrength[0],
            dexterity: reqDex[0],
            intelligence: reqInt[0],
            faith: reqFaith[0]
        },

        scale: {
            strength: reqStrength[1],
            dexterity: reqDex[1],
            intelligence: reqInt[1],
            faith: reqFaith[1]
        },

        durability: burden[0],
        weight: burden[1],
        attackTypes: type,

        obtained: find.places,
        aotaOnly: find.aotaOnly

    };

    return data;

}

$(window).ready(function() {

    console.log('ready');

    var tables = $('.wiki_table').find('tbody').slice();

    var weapons = [];
    for(var i = 0, l = tables.length - 1; i < l; i++) {
        var table = $(tables[i]),
            tr = table.find('tr').slice(2);

        for(var e = 0, el = tr.length; e < el; e++) {
            weapons.push(extractWeapon($(tr[e]).find('td')));
        }

    }

    console.log(JSON.stringify(weapons));

});
