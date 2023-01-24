from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    comment = StringField('comment', validators=[DataRequired()])
    rating = StringField('rating', validators=[DataRequired()])
    spot_id = StringField('spot_id', validators=[DataRequired()])
    user_id = StringField('user_id', validators=[DataRequired()])