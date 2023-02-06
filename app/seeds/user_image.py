from app.models import db, UserImage

def seed_user_image():
    user1 = UserImage(img_url='https://islebnbbucket.s3.us-east-2.amazonaws.com/palmtreepfp.jpeg',
                    user_id=1)

    db.session.add(user1)
    db.session.commit()

def undo_user_image():
    db.session.execute('TRUNCATE user_image')
    db.session.commit()
