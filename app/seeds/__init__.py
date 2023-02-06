from flask.cli import AppGroup
from .users import seed_users, undo_users
from .amenities import seed_amenities, undo_amenities
from .reviews import seed_reviews, undo_reviews
from .spots import seed_spots, undo_spots
from .spotsamenitiesjoins import seed_spotsamenitiesjoins, undo_spotsamenitiesjoins
from .pictures import seed_pictures, undo_pictures
from .user_image import seed_user_image, undo_user_image



seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_users()
    seed_amenities()
    seed_user_image()
    seed_spots()
    seed_reviews()
    seed_pictures()
    seed_spotsamenitiesjoins()

@seed_commands.command('undo')
def undo():
    undo_spotsamenitiesjoins()
    undo_amenities()
    undo_reviews()
    undo_user_image()
    undo_pictures()
    undo_spots()
    undo_users()