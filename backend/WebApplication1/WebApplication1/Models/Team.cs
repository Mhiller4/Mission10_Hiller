using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Mission10_Hiller.Models;

public partial class Team
{
    //make TeamID the primary key
    //Question marks for null values
    [Key]
    [Required]
    public int TeamID { get; set; }

    public string TeamName { get; set; } = null!;

    public int? CaptainID { get; set; }

    public ICollection<Bowler> Bowlers { get; set; } = new List<Bowler>();
}