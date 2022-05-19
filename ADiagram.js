import React from 'react';
import 'beautiful-react-diagrams/styles.css';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
// const initialSchema = createSchema({
//   nodes: [
//     {
//       id: 'node-1',
//       content: 'Node 1',
//       coordinates: [150, 60],
//       outputs: [ { id: 'port-1', alignment: 'right' } ],
//     },
//   ]
// });
// const CustomRender = ({ id, content, data, inputs, outputs }) => (
//     <div style={{background: 'purple'}}>
//       <div style={{textAlign: 'right'}}>
//         <button icon="times" size="small" onClick={()=>data.onClick(id)}/>
//       </div>
//       <div role="button" style={{padding: '15px'}}>
//         {content}
//       </div>
//       <div style={{marginTop: '10px',display:'flex', justifyContent:'space-between'}}>
//         {inputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' }}))}
//         {outputs.map((port) => React.cloneElement(port, {style: { width: '25px', height: '25px', background: '#1B263B' }}))}
//       </div>
//     </div>
// );
// const UncontrolledDiagram = () => {
//   // create diagrams schema
//   const [schema, { onChange, addNode, removeNode }] = useSchema(initialSchema);
//   const deleteNodeFromSchema = (id) => {
//     const nodeToRemove = schema.nodes.find(node => node.id === id);
//     removeNode(nodeToRemove);
//   };
//   const addNewNode = () => {
//     const nextNode = {
//        id: `node-${schema.nodes.length+1}`,
//        content: `Node ${schema.nodes.length+1}`,
//        coordinates: [
//          schema.nodes[schema.nodes.length - 1].coordinates[0] + 100,
//          schema.nodes[schema.nodes.length - 1].coordinates[1],
//        ],
//        render: CustomRender,
//        data: {onClick: deleteNodeFromSchema},
//        inputs: [{ id: `port-${Math.random()}`}],
//        outputs: [{ id: `port-${Math.random()}`}],
//    };
//    addNode(nextNode);
//   }
//   return (
//     <div style={{ height: '22.5rem' }}>
//       <button color="primary" icon="plus" onClick={addNewNode}>Add new node</button>
//       <Diagram schema={schema} onChange={onChange} />
//     </div>
//   );
// };
// ///////////////////////////////////////////////////////////////////
// const initialSchema = createSchema({
//   nodes: [
//     { id: 'node-1', content: 'Node 1', coordinates: [250, 60], },
//     { id: 'node-2', content: 'Node 2', coordinates: [100, 200], },
//     { id: 'node-3', content: 'Node 3', coordinates: [250, 220], },
//     { id: 'node-4', content: 'Node 4', coordinates: [400, 200], },
//   ],
//   links: [
//     { input: 'node-1',  output: 'node-2', label: 'Link 2', readonly: true },
//     { input: 'node-1',  output: 'node-3', label: 'Link 3', readonly: true },
//     { input: 'node-1',  output: 'node-4', label: 'Link 4', readonly: true, className: 'my-custom-link-class' },
//   ]
// });
const initSchema = createSchema({
  nodes: [
    {
      id: 'node-1',
      content: 'Start',
      coordinates: [100, 150],
      outputs: [
        { id: 'port-1', alignment: 'right' },
        { id: 'port-2', alignment: 'right' },
      ],
      disableDrag: true,
      data: {
        foo: 'bar',
        count: 0,
      }
    },
    {
      id: 'node-2',
      content: 'Middle',
      coordinates: [300, 150],
      inputs: [
        { id: 'port-3', alignment: 'left' },
        { id: 'port-4', alignment: 'left' },
      ],
      outputs: [
        { id: 'port-5', alignment: 'right' },
        { id: 'port-6', alignment: 'right' },
      ],
      data: {
        bar: 'foo',
      }
    },
    {
      id: 'node-3',
      content: 'End',
      coordinates: [600, 150],
      inputs: [
        { id: 'port-7', alignment: 'left' },
        { id: 'port-8', alignment: 'left' },
      ],
      data: {
        foo: true,
        bar: false,
        some: {
          deep: {
            object: true,
          }
        },
      }
    },
  ],
  links: [
    { input: 'port-1',  output: 'port-4' },
  ]
});
const UncontrolledDiagram = () => {
//   const [schema, { onChange }] = useSchema(initialSchema);
  const [secondSchema, { onChange }] = useSchema(initSchema);
  return (
    <div style={{ height: '22.5rem' }}>
      {/* <Diagram schema={schema} onChange={onChange} /> */}
      <Diagram schema={secondSchema} onChange={onChange} />
    </div>
  );
};

export default UncontrolledDiagram;
