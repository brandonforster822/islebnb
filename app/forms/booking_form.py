from flask_wtf import FlaskForm
from wtform import StringField
from wtform.validators import DataRequired
from app.models import BookedSpot

class BookingForm(FlaskForm):
    spotId = StringField('spotId', validators=[DataRequired()])
    startDate = StringField('startDate', validators=[DataRequired])
    endDate = StringField('endDate', validators=[DataRequired()])
    userId = StringField('userId', validators=[DataRequired()])

    