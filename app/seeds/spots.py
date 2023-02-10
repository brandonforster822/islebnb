from app.models import db, Spot


def seed_spots():
    spot1 = Spot(title='Waldron Island', lat=48.7016, lng=123.0717,
    address='Washington, USA', description='Waldron Island is 2900 acres with a population of 120, a very quiet private community. They mostly are retired or grow flowers and vegetables for the other islands.',
    price=498, host_id=1)

    spot2 = Spot(title='Rangyai Island', lat=7.9563, lng=98.4416,
    address='East of Phuket, Thailand', description='Located just east of the island of Phuket, an island popular with tourists and estate owners, Rangyai is the largest island currently available for sale in the region.',
    price=696, host_id=1)

    spot3 = Spot(title='Long Coco Caye', lat=16.4989, lng=-88.1669,
    address='Belize, Central America', description='This naturally beautiful island is arguably the finest private island in the Western Caribbean. With a tropical habitat of coconut palm and pine, a navigable deep-water lagoon roughly 1,000 long and 300 feet wide, with an entrance for yachts, white sandy beaches on its northern shores, and all surrounded with turquoise waters and vibrant, thriving coral reef home to countless species of marine wildlife, ready to be explored and respected. This is an unparalleled paradise.',
    price=324, host_id=1)

    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)

    db.session.commit()

def undo_spots():
    db.session.execute('TRUNCATE spots CASCADE')
    db.session.commit()

