require('behaviour3js');
var roleBehaviour = {};
roleBehaviour['FindSource'] = require('behaviour.findSource');
roleBehaviour['Harvest'] = require('behaviour.harvest');
roleBehaviour['StoreResources'] = require('behaviour.storeResources');
roleBehaviour['Upgrade'] = require('behaviour.upgrade');
roleBehaviour['Flee'] = require('behaviour.flee');
roleBehaviour['Repair'] = require('behaviour.repair');
roleBehaviour['DangerInterrupt'] = require('decorator.DangerInterrupt');

var behaviourTree = new b3.BehaviorTree();
behaviourTree.load({
    "title": "A Behavior Tree",
    "description": "",
    "root": "c0e20722-d6be-41c9-8ef7-2070ef4a1cff",
    "display": {
        "camera_x": 551,
        "camera_y": 398.5,
        "camera_z": 0.75,
        "x": -144,
        "y": -32
    },
    "properties": {},
    "nodes": {
        "ea489313-13ca-4c00-8190-ddd363222d8b": {
            "id": "ea489313-13ca-4c00-8190-ddd363222d8b",
            "name": "MemSequence",
            "title": "Harvest Sequence",
            "description": "",
            "display": {
                "x": 480,
                "y": -176
            },
            "parameters": {},
            "properties": {},
            "children": [
                "0dbc2fbb-07fd-430d-8081-dbf3718e28db",
                "ff6435ae-45fb-432c-8701-188529f23b73",
                "2ed4b0d5-8fcd-44bf-8881-742af5c960cc"
            ]
        },
        "0dbc2fbb-07fd-430d-8081-dbf3718e28db": {
            "id": "0dbc2fbb-07fd-430d-8081-dbf3718e28db",
            "name": "FindSource",
            "title": "Find Source",
            "description": "",
            "display": {
                "x": 688,
                "y": -272
            },
            "parameters": {},
            "properties": {}
        },
        "ff6435ae-45fb-432c-8701-188529f23b73": {
            "id": "ff6435ae-45fb-432c-8701-188529f23b73",
            "name": "Harvest",
            "title": "Harvest",
            "description": "",
            "display": {
                "x": 688,
                "y": -208
            },
            "parameters": {},
            "properties": {}
        },
        "2ed4b0d5-8fcd-44bf-8881-742af5c960cc": {
            "id": "2ed4b0d5-8fcd-44bf-8881-742af5c960cc",
            "name": "Priority",
            "title": "Priority",
            "description": "",
            "display": {
                "x": 688,
                "y": -48
            },
            "parameters": {},
            "properties": {},
            "children": [
                "a1b5727d-83f5-4757-84f3-c96eca8001cb",
                "c6bb53b0-2284-4d97-b093-7c0a5031f9c1",
                "35114dcb-dd27-4633-b262-983f4fa1286b",
                "c0f8fe48-b12c-4809-8f5b-dfe761c2a47f"
            ]
        },
        "a1b5727d-83f5-4757-84f3-c96eca8001cb": {
            "id": "a1b5727d-83f5-4757-84f3-c96eca8001cb",
            "name": "StoreResources",
            "title": "Store Resources",
            "description": "",
            "display": {
                "x": 896,
                "y": -144
            },
            "parameters": {},
            "properties": {}
        },
        "c0f8fe48-b12c-4809-8f5b-dfe761c2a47f": {
            "id": "c0f8fe48-b12c-4809-8f5b-dfe761c2a47f",
            "name": "Upgrade",
            "title": "Upgrade",
            "description": "",
            "display": {
                "x": 896,
                "y": 48
            },
            "parameters": {},
            "properties": {}
        },
        "c6bb53b0-2284-4d97-b093-7c0a5031f9c1": {
            "id": "c6bb53b0-2284-4d97-b093-7c0a5031f9c1",
            "name": "Build",
            "title": "Build",
            "description": "",
            "display": {
                "x": 896,
                "y": -80
            },
            "parameters": {},
            "properties": {}
        },
        "35114dcb-dd27-4633-b262-983f4fa1286b": {
            "id": "35114dcb-dd27-4633-b262-983f4fa1286b",
            "name": "Repair",
            "title": "Repair",
            "description": "",
            "display": {
                "x": 896,
                "y": -16
            },
            "parameters": {},
            "properties": {}
        },
        "428d1a3d-3053-42a1-b322-e152b806205a": {
            "id": "428d1a3d-3053-42a1-b322-e152b806205a",
            "name": "DangerInterrupt",
            "title": "No Danger?",
            "description": "",
            "display": {
                "x": 272,
                "y": -176
            },
            "parameters": {},
            "properties": {},
            "child": "ea489313-13ca-4c00-8190-ddd363222d8b"
        },
        "c0e20722-d6be-41c9-8ef7-2070ef4a1cff": {
            "id": "c0e20722-d6be-41c9-8ef7-2070ef4a1cff",
            "name": "MemPriority",
            "title": "MemPriority",
            "description": "",
            "display": {
                "x": 64,
                "y": -32
            },
            "parameters": {},
            "properties": {},
            "children": [
                "428d1a3d-3053-42a1-b322-e152b806205a",
                "18fce5cc-64af-4d19-9ea5-ff0e51a159e1"
            ]
        },
        "18fce5cc-64af-4d19-9ea5-ff0e51a159e1": {
            "id": "18fce5cc-64af-4d19-9ea5-ff0e51a159e1",
            "name": "Flee",
            "title": "Flee",
            "description": "",
            "display": {
                "x": 272,
                "y": 112
            },
            "parameters": {},
            "properties": {}
        }
    },
    "custom_nodes": [
        {
            "name": "FindSource",
            "title": "Find Source",
            "category": "action"
        },
        {
            "name": "EnemiesNear",
            "title": "Enemies Nearby",
            "category": "condition"
        },
        {
            "name": "MoveTo",
            "title": "Move To",
            "category": "action"
        },
        {
            "name": "Harvest",
            "title": "Harvest",
            "category": "action"
        },
        {
            "name": "StoreResources",
            "title": "Store Resources",
            "category": "action"
        },
        {
            "name": "NoEnergy",
            "title": "No Energy",
            "category": "condition"
        },
        {
            "name": "Upgrade",
            "title": "Upgrade",
            "category": "action"
        },
        {
            "name": "Build",
            "title": "Build",
            "category": "action"
        },
        {
            "name": "Repair",
            "title": "Repair",
            "category": "action"
        },
        {
            "name": "DangerInterrupt",
            "title": "No Danger?",
            "category": "decorator"
        },
        {
            "name": "Flee",
            "title": "Flee",
            "category": "action"
        }
    ]
}, roleBehaviour);
module.exports = behaviourTree;