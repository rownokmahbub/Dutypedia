import styled from "styled-components";

export const Wrapper = styled('div')`
@media all and (min-width: 768px) {
    
    .routine-table-body-section {
      
      max-height: 400px;
  }
  /* Scrollbar customization */

  .routine-table-body-section {
      overflow-y: scroll;
  }

  .routine-table-body-section::-webkit-scrollbar {
      width: 11px;
      height: 10px;
      background: #181818;
  }

  .routine-table-body-section::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
      margin:7px;
  }

  .routine-table-body-section::-webkit-scrollbar-thumb {
      background: #444444;
      border-radius: 10px;
  }

  .routine-table-body-section::-webkit-scrollbar-button:single-button {
      background-color: #272727;
      display: block;
      border-style: solid;
      height: 1.5vw;
      width: 1vw;
  }

  .routine-table-body-section::-webkit-scrollbar-button:single-button:horizontal:decrement {
      border-width: 5px;
      border-color: transparent grey transparent transparent;
  }
  .routine-table-body-section::-webkit-scrollbar-button:single-button:vertical:increment {
      border-width: 5px;
      border-color: grey transparent transparent;
  }

  .routine-table-body-section::-webkit-scrollbar-button:single-button:horizontal:increment {
      border-width: 5px;
      border-color: transparent transparent transparent grey;
  }
  .routine-table-body-section::-webkit-scrollbar-button:single-button:vertical:decrement {
      border-width: 5px;
      border-color: transparent transparent grey;
  }
}

    
    `