from app.models import db, Review


def seed_reviews():
    review1 = Review(
        comment="It's Waldron Island", user_id=1, rating=3, spot_id=1)

    review2 = Review(
        comment="It's thai Island", user_id=1, rating=3, spot_id=2)

    review3 = Review(
        comment="It's belize Island", user_id=1, rating=3, spot_id=3)

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)

    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews')
    db.session.commit()

