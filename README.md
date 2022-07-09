# Assignment Birdie

Here is a little explanation of this repository and the way I have thought this work, with improvement ideas and limitations of the product.

## Quick overview of the project

I have recreated all from scratch, following the requirements in the readme of the projet : backend with express and frontend with react.

### Backend

This backend uses an express server on JavaScript and a mysql database. Two resquests GET only are used :
- controller/visitid :  getting the visit_id for a care_recipient_id given (that is written in input on the frontend)
- controller/getKeys : getting payload and visit_id for a care_recipient_id_given

GetKeys alone could have be enough actually, but it was more the consequence of first choices then abandoned, and besides, as we have only two requests on the app, it is not flooding the database, so it does not seem to be a problem too.

### Frontend

#### Inspiration

The frontend was inspired by Trello : I thought that a system of cards with eventboxes in it could be really convenient. However, I did not expect to have so much visit_id : there were much to scroll, so I finally chose a vertical display, that brings a more naturall scrolling, even though we have a lot of place unused. However, this place might be used to add some features, such as a selection of event_type or dates for instance.

#### Construction

On our front end we have the following construction :
- A Home, which is the main page, with the input component
- A Feed, displaying all the related Boards
- A Board, displaying event_boxes for a visit_id and a care_recipient_id given
- Event_box for the display of the information to the user

#### Choices

Some choices were maybe unusual, as I like to sometimes think out of the box :
- the Switch instead of an input button : it allows us to only have one page, and it is different logic. I am not sure about its relevance, however, since it worked well, I have decided to let it remain.
- the display by visit_id :  with further thoughts, maybe displaying time stamps and making bigger cards (I don't know, for example, one by month) could have been better for the user

#### Possible improvements

I have spent around 10-15 hours of this task, besides my current job, and I had to discover the uses of express and mysql that I had never used, so everything is not perfect of course, and I have thought of some improvements that could be done with more time.

- Display timestamps in a dedicated space with a proper form
- Add filters to event_types to select the ones that you are interested in
- Add a timeframe to select a date to pick
- Add an admin interface to write down some cards directly, as in Trello

## Conclusion

Thanks for reading this readme : you could see a demo of the app in the repository.
Do not mind to ask me any questions about this work, and thanks for giving me this opportunity.