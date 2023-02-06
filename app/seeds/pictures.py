from app.models import db, Picture


def seed_pictures():
    waldron_island1 = Picture(img_url='https://islebnbbucket.s3.us-east-2.amazonaws.com/waldron_island.jpg', spot_id=1)

    db.session.add(waldron_island1)

    db.session.commit()

def undo_pictures():
    db.session.execute('TRUNCATE pictures;')
    db.session.commit()