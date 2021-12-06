import './Spellbook.css';
import Header from './components/Header';
import SpellList from './components/SpellList';

function Spellbook() {
  return (
    <div className="Spellbook">
      <header className="Spellbook-header">
        <Header classType='wizard' classLevel='3' castAbility='18' />
        <SpellList />
      </header>
    </div>
  );
}

export default Spellbook;
