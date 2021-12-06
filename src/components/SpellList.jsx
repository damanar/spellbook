import React from 'react';
import Dnd5eapi from '../apis/Dnd5eapi.js';

const opt_levels = [
    {value: null, label: 'Select Level'},
    {value: 0, label: 'Level 0'},
    {value: 1, label: 'Level 1'},
    {value: 2, label: 'Level 2'},
    {value: 3, label: 'Level 3'},
    {value: 4, label: 'Level 4'},
    {value: 5, label: 'Level 5'},
    {value: 6, label: 'Level 6'},
    {value: 7, label: 'Level 7'},
    {value: 8, label: 'Level 8'},
    {value: 9, label: 'Level 9'}
]

const opt_schools = [
    {value: null, label: 'Select School'},
    {value: 'abjuration', label: 'Abjuration'},
    {value: 'conjuration', label: 'Conjuration'},
    {value: 'divination', label: 'Divination'},
    {value: 'enchantment', label: 'Enchantment'},
    {value: 'evocation', label: 'Evocation'},
    {value: 'illusion', label: 'Illusion'},
    {value: 'necromancy', label: 'Necromancy'},
    {value: 'transmutation', label: 'Transmutation'}
]

class SpellList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spellLevel: '',
            school: '',
            spellList: []
        }
        this.handleLevel = this.handleLevel.bind(this);
        this.handleSchool = this.handleSchool.bind(this);
    }
    handleLevel(event) {
        this.setState({
            spellLevel: event.target.value
        });
    }
    handleSchool(event) {
        this.setState({
            school: event.target.value
        });
    }
    componentDidUpdate(pp, ps) {
        if(ps.spellLevel !== this.state.spellLevel ||
            ps.school !== this.state.spellLevel) {
                this.getSpellList(this.state.spellLevel, this.state.school);
        }
    }
    getSpellList = async () => {
        var sl = '';
        var sc = '';
        if(this.state.spellLevel){sl = this.state.spellLevel}
        if(this.state.school){sc = this.state.school}
        try {
            const response = await Dnd5eapi.get('/spells?level='+sl+'&school='+sc);
            this.setState({
                spellList: response.data.results
            })
            console.log(this.state.spellList);
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        const elOptLevel = opt_levels.map(i => <option key={i.value} value={i.value}>{i.label}</option>);
        const elOptSchool = opt_schools.map(i => <option key={i.value} value={i.value}>{i.label}</option>);
        return (
            <div id="spellList">
                <form action=''>
                    <select name="spellLevel" value={this.state.spellLevel} onChange={this.handleLevel}>
                        {elOptLevel}
                    </select>
                    <select name="school" value={this.state.school} onChange={this.handleSchool}>
                        {elOptSchool}
                    </select>

                    {/*<button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Seek</button>*/}
                </form>

                <div id="returnSpells">
                    <ul>{this.state.spellList && this.state.spellList.map(spell => {
                        return (
                            <li key={spell.index}>{spell.name}</li>
                        )
                    })}</ul>
                </div>

            </div>
        )
    }
}

export default SpellList;