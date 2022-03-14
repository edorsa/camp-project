import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ProductDetails from '../pages/ProductDetails'
import CartDetails from '../pages/CartDetails'
import { ToastContainer } from 'react-toastify'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
               
                <Grid.Column width={12}>
                   <Route  exact path ="/" component={ProductList}/>
                   <Route  exact path ="/products" component={ProductList}/>
                   <Route   exact path ="/products/:name" component={ProductDetails}/>
                   <Route   path ="/cart" component={CartDetails}/>

                   
                </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}
