import React, { Component } from 'react';

require('./_cgu.scss');


class CGU extends Component {
    render() {
        return (
            <section>
                <div className="pdf">
                    <object className="pdf" data={require('../../../docs/cgu.pdf')} type="application/pdf" width="100%" height="100%"></object>
                </div>

            </section>
        )
    }
}

export default CGU;