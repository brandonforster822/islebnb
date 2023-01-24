from .db import db

spotsamenitiesjoins = db.Table('spotsamenitiesjoins',
    db.Column('spot_id', db.Integer, db.ForeignKey('spots.id')),
    db.Column('amenity_id', db.Integer, db.ForeignKey('amenities.id'))
)