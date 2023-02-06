from app.models import db, Review


def seed_reviews():
    review1 = Review(
        comment="It's Waldron Island", user_id=1, rating=3, spot_id=1)

    db.session.add(review1)

    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews')
    db.session.commit()

