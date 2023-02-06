from app.models import db, spotsamenitiesjoins
from app.seeds import amenities
from app.seeds import spots


def seed_spotsamenitiesjoins():
    test = spotsamenitiesjoins.insert().values(spot_id=1, amenity_id=1)
    db.session.execute(test)

    db.session.commit()

def undo_spotsamenitiesjoins():
    db.session.execute('TRUNCATE spotsamenitiesjoins;')
    db.session.commit()

