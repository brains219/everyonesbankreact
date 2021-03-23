import React, { Component } from 'react';
import { Table } from "react-bootstrap";

const Rates = (props) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="mt-3">Everyone's Checking Rates:</h4>
            <Table className="Table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Amounts</th>
                  <th scope="col">Annual Percentage Yield</th>
                  <th scope="col">Interest Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$0.00 - $2,499.99</td>
                  <td>1.00%</td>
                  <td>0.97%</td>
                </tr>
                <tr>
                  <td>$2,500+</td>
                  <td>1.50%</td>
                  <td>1.40%</td>
                </tr>
              </tbody>
            </Table>
            <div className="row">
              <div className="col">
                <h4 className="mt-3">Everyone's Savings Rates:</h4>
                <Table className="Table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Amounts</th>
                      <th scope="col">Annual Percentage Yield</th>
                      <th scope="col">Interest Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$0.00 - $4,999.99</td>
                      <td>1.00%</td>
                      <td>0.97%</td>
                    </tr>
                    <tr>
                      <td>$5,000+</td>
                      <td>2.00%</td>
                      <td className="mb-3">1.70%</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Rates;