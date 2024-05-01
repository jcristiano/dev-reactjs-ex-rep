import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Container, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import ExpandMoreIcons from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

interface Item {
    id: number,
    title: string;
}

interface Action {
    label: string,
    onClick: () => void;
}

interface ListItemWithActionsProps {
    item: Item,
    actions: Action[];
}

const StyledAccordion = styled(Accordion)<{ expanded: boolean }>`
    background-color: ${(props) => props.expanded ? 'white' : '#1e88e5'};
    color: ${(props) => props.expanded ? 'black' : 'white'};
`;

const StyledExpandedMoreIcon = styled(ExpandMoreIcons)<{ expanded: boolean }>`
  color: ${props => props.expanded ? 'black' : 'white'};
`;

const ListaItem: React.FunctionComponent<ListItemWithActionsProps> = ({item, actions}) => {
    const [ expanded, setExpanded ] = useState<boolean>(false);

    const handleAccordingChange = () => {
        debugger;
        setExpanded(!expanded);
    }

    return(
        <StyledAccordion expanded={expanded} onChange={handleAccordingChange}>
            <AccordionSummary
                expandIcon={<StyledExpandedMoreIcon expanded={expanded} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {actions.map((action, index) => (
                        <ListItemButton key={index} onClick={action.onClick}>
                            <ListItemText primary={action.label} />
                        </ListItemButton>
                    ))}
                </List>
            </AccordionDetails>
        </StyledAccordion>
    )
}

const ListaItens: React.FunctionComponent = () => {

    const produtos: Item[] = [
        {id: 1, title: 'PlayStation'},
        {id: 2, title: 'PC Gamer'}
    ];

    const categorias: Item[] = [
        {id: 1, title: 'Eletronicos'},
        {id: 2, title: 'Cosmetico'}
    ];

    const vendas: Item[] = [
        {id: 1, title: 'Primeira venda'},
        {id: 2, title: 'Segunda venda'}
    ];

    return(
        <Container>
            <ListaItem 
                item={{title: 'Produtos', id: 0}}
                actions={
                    produtos.map( produto => ({
                        label: produto.title,
                        onClick: () => {
                            console.log(`Clicado no produto: ${produto.title}`)
                        }
                    }))
                }
            />
            <ListaItem 
                item={{title: 'Categorias', id: 0}}
                actions={
                    categorias.map( categoria => ({
                        label: categoria.title,
                        onClick: () => {
                            console.log(`Clicado no produto: ${categoria.title}`)
                        }
                    }))
                }
            />
            <ListaItem 
                item={{title: 'Vendas', id: 0}}
                actions={
                    vendas.map( venda => ({
                        label: venda.title,
                        onClick: () => {
                            console.log(`Clicado no produto: ${venda.title}`)
                        }
                    }))
                }
            />
        </Container>
    )
}

export default ListaItens;
