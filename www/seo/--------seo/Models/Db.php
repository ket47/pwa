<?php
namespace Models;

class Db extends \mysqli{
    function __construct() {
        parent::__construct(
            getenv('database.default.hostname'),
            getenv('database.default.username'),
            getenv('database.default.password'),
            getenv('database.default.database')
        );
    }
    
    public function esc($string){
        return $this->real_escape_string($string);
    }

    public $result;
    #[\ReturnTypeWillChange]
    public function query( string $sql,int $result_mode = MYSQLI_STORE_RESULT){
        $this->result=parent::query($sql,$result_mode);
        if($this->errno){
            die($this->error);
        }
        return $this;
    }
    
    public function rows(){
        $rows=[];
        while($row=$this->result->fetch_object()){
            $rows[]=$row;
        }
        return $rows;
    }
    
    public function row(){
        return $this->result->fetch_object();
    }
}