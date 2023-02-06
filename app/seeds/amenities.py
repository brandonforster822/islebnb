from app.models import db, Amenity

def seed_amenities():
    developed = Amenity(amenity='Developed')
    non_developed = Amenity(amenity='Non-developed')
    private_island = Amenity(amenity='Private island')
    island_parcel = Amenity(amenity='Island parcel')
    peninsula = Amenity(amenity='Peninsula')
    ocean_island = Amenity(amenity='Ocean island')
    river_island = Amenity(amenity='River island')
    lake_island = Amenity(amenity='Lake island')
    airstrip = Amenity(amenity='Airstrip')
    off_the_grid = Amenity(amenity='Off-the-grid')
    pool = Amenity(amenity='Pool')
    indoor_fireplace = Amenity(amenity='Indoor fireplace')
    wifi = Amenity(amenity='Wifi')
    air_conditioning = Amenity(amenity='Air conditioning')
    american = Amenity(amenity='American')
    foreign = Amenity(amenity='Foreign')

    db.session.add(developed)
    db.session.add(non_developed)
    db.session.add(private_island)
    db.session.add(island_parcel)
    db.session.add(peninsula)
    db.session.add(ocean_island)
    db.session.add(river_island)
    db.session.add(lake_island)
    db.session.add(airstrip)
    db.session.add(off_the_grid)
    db.session.add(pool)
    db.session.add(indoor_fireplace)
    db.session.add(wifi)
    db.session.add(air_conditioning)
    db.session.add(american)
    db.session.add(foreign)

    db.session.commit()

def undo_amenities():
    db.session.execute('TRUNCATE amenities CASCADE')
    db.session.commit()

