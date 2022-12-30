import {
  View,
  Panel,
  PanelHeader,
  Gallery,
  Group,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./App.css";
import { FetchTodos } from './components/FetchTodos';
import { Filter } from './components/Filter';
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import { TotalTodos } from './components/TotalTodos';

const App = () => {
  return (
    <View activePanel="mainPanel">
      <Panel id="mainPanel">
        <PanelHeader>New year's wish list</PanelHeader>
        <Gallery className='gallery' slideWidth='70%' isDraggable={true} showArrows={true} align='center' bullets='dark'>
          <Group style={{maxWidth: '50%', margin: 'auto' }}>
            <Filter />
            <TodoList />
          </Group>
          <Group style={{maxWidth: '50%', margin: 'auto' }}>
            <TotalTodos />
            <NewTodo />
            <FetchTodos />
          </Group>
        </Gallery>
      </Panel>
    </View>
  );
};

export default App;
    //  {/* <AppRoot>
    //   <SplitLayout header={<PanelHeader separator={false} />}>
    //     <SplitCol autoSpaced>
    //       <View activePanel="main">
    //         <Panel id="main">
    //          <Group header={<Header mode="secondary">Items</Header>}>
    //             <SimpleCell>Hello</SimpleCell>
    //             <SimpleCell>World</SimpleCell>
    //           </Group>
    //         </Panel>
    //       </View>
    //     </SplitCol>
    //   </SplitLayout>
    // </AppRoot> */}