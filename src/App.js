import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // we know this will be asynchronous because we're going to make a potential API request
      // this.setState({ currentUser: user });
     
      // if you check the Dev-Tools you'll notice that you're always getting an OBJECT back. even though it doesn't exist inside of our database
      // The reason for this is that: we actually use this  reference object to tell firestore whether to save data inside of or DB or to get Data from this location in the DB
      // it does not have the actual data related to the document. Instead it gives us properties that tell us details about the ID and path to this specific query reference.
      // If we check the Dev-Tools we'll see that, the parent is a collection reference representing the collection that this document is in.

      // Difference between DOC-ref vs Collection-Ref: 
      // The DOc-Ref we use to perform CRUD methods on firestore.
      // DOC-ref methods are: .set() , .get() , .update(), .delete()

      // Adding documents to collections using collectionRef object: .add() method

      //The snapshotObject we get back from the referenceObject using the .get() method

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // we get beack userRef from our function. We make sure we're passing back the userRefObject.
        // we want it because we want to use it to check if our database updated at our reference with any new data

        userRef.onSnapshot(snapshot => {
          // on this snapshot object is where we're going to get the data related to this user we just possibly stored.
          // or the data related to the user that is already stored in the database

          //console.log(snapShot.data()); // you'll get your snapshot. it will have: exists, id , it won't have props. You have to call .data()

          this.setState({
            currentUser: {


              id: snapshot.id,
            ...snapshot.data()
            }
          
          // }, () => {
            // our console log can't go after setState.

            // console.log(this.state);
          });

          //console.log(this.state);
        });

        
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
      
      
      
      //createUserProfileDocument(userAuth);
      
      //console.log(user);
    });
  }

  
  componentWillUnmount() {
    this.unsubscribeFromAuth(); 
  }

  render() {
    return (
      <div>
        {/* we are passing in currentUser={this.state.currentUser} in the Header . So that the current state is passed */}
        <Header currentUser={this.state.currentUser} />  
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
