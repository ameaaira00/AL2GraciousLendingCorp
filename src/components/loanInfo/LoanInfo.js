import React from 'react';
import "./LoanInfo.css";

const LoanInfo = () => {
    return (
        <section id="loan-info" className="section">
            <div className="content">
                <div className="loanContainer">
                    <div className="column1">
                        <div className="requirements">
                        <h2>Requirements:</h2>
                        <ul>
                            <li>Passbook or ATM Card</li>
                            <li>2 (dalawa) Valid ID's</li>
                            <li>1 (isa) sa mga sumusunod:</li>
                            <ul>
                                <li>Meralco/ Water Bill</li>
                                <li>Telephone/ Cable/ Internet Bill</li>
                                <li>Business Permit</li>
                            </ul>
                            <li>Dalhin ang Flyers na ito.</li>
                        </ul>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="phoneAPlus">
                        <h2>Phone A Loan Plus:</h2>
                        <div className="text-message">
                            <p>Mag-loan kahit na sa bahay! I-text lang ang</p>
                            <div className="message-highlight">
                                <p>#LC AL2 &lt; PANGALAN&gt; &lt;MENSAHE&gt;</p>
                            </div>
                            <p>sa mga sumusunod na numero:</p>
                            <ul>
                                <li>0925 530 0455 (Sun)</li>
                                <li>0908 814 3775 (Smart)</li>
                                <li>0917 634 9946 (Globe)</li>
                            </ul>
                            <p>At hintayin ang aming reply!</p>
                            <p>Halimbawa:
                            <div className="message-highlight">
                                <p>#LC AL2 JUAN DELA CRUZ MAGLO-LOAN PO</p>
                            </div>
                            </p>
                            

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoanInfo;
