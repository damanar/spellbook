import React from 'react';

class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attributes: {
                charisma: '',
                constitution: '',
                dexterity: '',
                intelligence: '',
                strength: '',
                wisdom: ''
            },
            class: {
                classType: '',
                level: ''
            },
            skills: {},
            spells: {
                level0: {},
                level1: {},
                level2: {},
                level3: {},
                level4: {},
                level5: {},
                level6: {},
                level7: {},
                level8: {},
                level9: {}
            }
        }
    }
};

export default Character;