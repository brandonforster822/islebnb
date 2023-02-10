from app.models import db, spotsamenitiesjoins
from app.seeds import amenities
from app.seeds import spots


def seed_spotsamenitiesjoins():
    island1_1 = spotsamenitiesjoins.insert().values(spot_id=1, amenity_id=1)
    island1_2 = spotsamenitiesjoins.insert().values(spot_id=1, amenity_id=2)
    island2_1 = spotsamenitiesjoins.insert().values(spot_id=2, amenity_id=1)
    island2_2 = spotsamenitiesjoins.insert().values(spot_id=2, amenity_id=2)
    island3_1 = spotsamenitiesjoins.insert().values(spot_id=3, amenity_id=1)
    
    db.session.execute(island1_1)
    db.session.execute(island1_2)
    db.session.execute(island2_1)
    db.session.execute(island2_2)
    db.session.execute(island3_1)

    db.session.commit()

def undo_spotsamenitiesjoins():
    db.session.execute('TRUNCATE spotsamenitiesjoins;')
    db.session.commit()

