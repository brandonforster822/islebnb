from app.models import db, Spot


def seed_spots():
    spot1 = Spot(title='Waldron Island', lat=48.7016, lng=123.0717,
    address='Waldron Island, WA 98297', description='Waldron Island is 2900 acres with a population of 120, a very quiet private community. They mostly are retired or grow flowers and vegetables for the other islands.',
    price=498, host_id=1)

    db.session.add(spot1)

    db.session.commit()

def undo_spots():
    db.session.execute('TRUNCATE spots CASCADE')
    db.session.commit()

