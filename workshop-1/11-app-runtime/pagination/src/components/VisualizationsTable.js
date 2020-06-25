import React from "react";
import {
  ButtonStrip,
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableHead,
  TableRow,
  TableRowHead,
} from "@dhis2/ui";

import { DeleteVisualizationButton } from './DeleteVisualizationButton'
import { NewVisualizationButton } from "./NewVisualizationButton";

export const VisualizationsTable = ({ visualizations, refetch }) => (
  <Table>
    <TableHead>
      <TableRowHead>
        <TableCellHead>Name</TableCellHead>
        <TableCellHead>
          <ButtonStrip end>
            <NewVisualizationButton refetch={refetch} />
          </ButtonStrip>
        </TableCellHead>
      </TableRowHead>
    </TableHead>
    <TableBody>
      {visualizations.map((visualization) => (
        <TableRow key={visualization.id}>
          <TableCell>{visualization.name}</TableCell>
          <TableCell>
            <ButtonStrip end>
              <DeleteVisualizationButton id={visualization.id} refetch={refetch} />
            </ButtonStrip>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
